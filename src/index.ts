import { IDL as AverIdl, AverCore } from './idl/aver'
import { PublicKey, Connection } from "@solana/web3.js";
import { SolanaParser } from "@sonarwatch/solana-transaction-parser";
import { Idl } from '@project-serum/anchor';
import fs, { PathLike } from 'fs'
import BN from '@project-serum/anchor';

const MARKET_PUBKEY = '4wVPU2UjeowgSMnbRKcm7p5cFkq46NeTqTxG57wSz1TK'
const SOLANA_URL = 'https://holy-cold-glade.solana-mainnet.quiknode.pro/'
const PROGRAM_ID = '6q5ZGhEj6kkmEjuyCXuH4x8493bpi9fNzvy9L8hX83HQ'
const rpcConnection = new Connection(SOLANA_URL)
const txParser = new SolanaParser([{ idl: AverIdl as unknown as Idl, programId: PROGRAM_ID }])

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
        // console.log('Includes, picking out order')
        const expression = /posted_order_id: Some\((.*?)\)/;
        var orderIdMatch = expression.exec(logMessages.toString());
        if (orderIdMatch != null && orderIdMatch.length > 0) {
          // console.log(orderIdMatch[1])
          let posted_order_id = orderIdMatch[1]
          orders.push(posted_order_id)
        }
      }

      if (logMessages.toString().includes('Program log: Instruction: ConsumeEvents')) {
        outOrderId = parseConsumeEventsOutEmit()
        orders = orders.filter(obj => obj !== outOrderId.toString());
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

