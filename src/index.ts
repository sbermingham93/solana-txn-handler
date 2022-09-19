import { IDL as AverIdl, AverCore } from './idl/aver'
import { PublicKey, Connection, Keypair } from "@solana/web3.js";
import { SolanaParser } from "@sonarwatch/solana-transaction-parser";
import { AnchorProvider, EventParser, Idl, Program, Wallet } from '@project-serum/anchor';
import fs, { PathLike } from 'fs'

const MARKET_PUBKEY = '4wVPU2UjeowgSMnbRKcm7p5cFkq46NeTqTxG57wSz1TK'
const SOLANA_URL = 'https://holy-cold-glade.solana-mainnet.quiknode.pro/'
const PROGRAM_ID = '6q5ZGhEj6kkmEjuyCXuH4x8493bpi9fNzvy9L8hX83HQ'
const rpcConnection = new Connection(SOLANA_URL)
const txParser = new SolanaParser([{ idl: AverIdl as unknown as Idl, programId: PROGRAM_ID }])
const wallet = new Wallet(new Keypair())
const provider = new AnchorProvider(rpcConnection, wallet, {})
const program = new Program(AverIdl, PROGRAM_ID, provider)
const eventParser = new EventParser(
  program.programId,
  program.coder
)

async function writeToJsonFile(arraytoWrite: any[], path: PathLike) {
  const jsonContent = JSON.stringify(arraytoWrite)

  fs.writeFile(path, jsonContent, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}

async function getSignatures() {
  const signatures = await rpcConnection.getSignaturesForAddress(new PublicKey(MARKET_PUBKEY))

  return signatures.map((sig) => sig.signature)
}
const TX_EVENT_DISCRIMINATOR = 'pFdmPWk1kyA'

function parseConsumeLogMessages(logMessages: string[]) {
  const parsedEventTxns = []
  const events = eventParser.parseLogs(logMessages)
  let eventTxnResult = events.next()

  while (!eventTxnResult.done) {
    if (eventTxnResult.value != null) {
      parsedEventTxns.push(eventTxnResult.value)
    } 

    eventTxnResult = events.next()
  }
  
  console.log('GOT THE EVENTS...', parsedEventTxns)
  return parsedEventTxns
}

async function parseTransactions() {
  var signatures = await getSignatures()
  signatures = signatures.reverse()
  const parsedTxns: any[] = []

  console.log('There are ', signatures.length, ' signatures')

  let transactionDetails = await rpcConnection.getParsedTransactions(signatures)

  console.log('There are ', transactionDetails.length, ' transaction details')

  var orders = []
  var cancelled_orders = []

  var err_signatures: any[] = []
  var passed_signatures: any[] = []
  var err_transaction_details: any[] = []
  var passed_transaction_details: any[] = []
  for (let i = 0; i < signatures.length; i++) {
    if (transactionDetails[i]?.meta?.err != null) {
      err_signatures.push(signatures[i])
      err_transaction_details.push(transactionDetails[i])
    }
    else {
      passed_signatures.push(signatures[i])
      passed_transaction_details.push(transactionDetails[i])

      const logMessages = transactionDetails[i]?.meta?.logMessages
      if (logMessages.toString().includes('Program log: Order summary')) {
        const expression = /posted_order_id: Some\((.*?)\)/;
        var orderIdMatch = expression.exec(logMessages.toString());
        if (orderIdMatch != null && orderIdMatch.length > 0) {
          // console.log(orderIdMatch[1])
          let posted_order_id = orderIdMatch[1]
          orders.push(posted_order_id)
        }
      }

      if (logMessages.toString().includes('Program log: Instruction: ConsumeEvents')) {
        const eventTxns = parseConsumeLogMessages(logMessages)
        eventTxns.forEach((eventTxn) => {
          console.log(eventTxn)
        })
        // In this else statement, we have already checked that this signature doesn't contain an error, which
        // means the transaction completed successfully.
        // Every time we see a "ConsumeEvents" ix in the transaction details, we need to look for the 'pFdmPWk1kyA...' Program Log output
        // Example is seen here: https://explorer.solana.com/tx/PBKTEtkAYjB1PpN4Djj8caYL5U5oqViYNr8kVsTxCDEUgvfsGiSRc3XWmyLHVqrMgqYP2gF6dELBUfGMSq3eq1e
        // These are transaction event emits put out by the program. The struct is defined here: https://github.com/AverBet/aver-core/blob/main/programs/aver-core/src/utils.rs#L126
        // We need to parse the 'pFdmPWk1kyA...' strings similarly to how we do it in aver-py. Once that's done, I'll be able to know if there were any "Out" transaction types 
        // during each consume event and subsequetly remove that from the users "shadow orders" I've been keeping track of. See below.

        // PSEUDOCODE BELOW
        // outOrderId = parseConsumeEventsOut(logMessages.toString())
        // orders = orders.filter(obj => obj !== outOrderId.toString());
      }

      const parsed = await txParser.parseTransaction(
        rpcConnection,
        signatures[i],
        false,
      )
      if (parsed) {
        if (parsed[0].name == "cancelOrder") {
          let o_id = parsed[0].args["orderId"].toString()
          var index = orders.indexOf(o_id)
          let x = {
            'pubkey': parsed[0].accounts[1].pubkey.toString(),
            'outcomeId': parsed[0].args["outcomeId"],
            'orderId': o_id,
            'index': index,
          }
          cancelled_orders.push(x)
          orders = orders.filter(obj => obj !== o_id.toString());
        }
      }
    }
  }

  console.log('There are ', err_signatures.length, ' errored signatures')
  console.log('There are ', passed_signatures.length, ' passed signatures')
  console.log('There are ', err_transaction_details.length, ' error transaction details')
  console.log(cancelled_orders.length)

  for (let i = 0; i < passed_signatures.length; i++) {
    const parsed = await txParser.parseTransaction(
      rpcConnection,
      passed_signatures[i],
      false,
    )

    if (parsed && parsed.length > 0) {
      parsedTxns.push(parsed[0])
    }
  }

  if (parsedTxns.length > 0) {
    writeToJsonFile(parsedTxns, "./parsed-txns.json")
  }
  if (passed_transaction_details.length > 0) {
    writeToJsonFile(passed_transaction_details, "./passed-txns.json")
  }
  if (err_transaction_details.length > 0) {
    writeToJsonFile(err_transaction_details, "./error-txns.json")
  }
  if (cancelled_orders.length > 0) {
    writeToJsonFile(cancelled_orders, "./cancelled_orders.json")
  }
}
try {
  parseTransactions()
} catch (e) {
  console.error(e)
}




console.log('Run the index file...')

