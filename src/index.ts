import { IDL as AverIdl, AverCore } from './idl/aver'
import { PublicKey, Connection } from "@solana/web3.js";
import { SolanaParser } from "@sonarwatch/solana-transaction-parser";
import { Idl } from '@project-serum/anchor';
import fs from 'fs'

const MARKET_PUBKEY = '5McbCCMvYH2QsKSNagv87WvLyPKArQJngFBK5FqEfPNY'
const SOLANA_URL = 'https://holy-cold-glade.solana-mainnet.quiknode.pro/'
const PROGRAM_ID = '6q5ZGhEj6kkmEjuyCXuH4x8493bpi9fNzvy9L8hX83HQ'
const rpcConnection = new Connection(SOLANA_URL)
const txParser = new SolanaParser([{ idl: AverIdl as unknown as Idl, programId: PROGRAM_ID }])

async function writeToJsonFile(arraytoWrite: any[]) {
  const jsonContent = JSON.stringify(arraytoWrite)

  fs.writeFile("./parsed-txns.json", jsonContent, 'utf8', function (err) {
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
  const signatures = await getSignatures()
  const parsedTxns: any[] = []

  console.log('There are ', signatures.length, ' signatures')
  
  for(let i = 0; i < 10; i++) {
    const parsed = await txParser.parseTransaction(
      rpcConnection,
      signatures[i],
      false,
    )

    if (parsed && parsed.length > 0) {
      console.log(parsed[0].name)
      console.log(parsed[0].accounts)
      console.log(parsed[0].args)

      parsedTxns.push(parsed[0])
    }
  }

  if (parsedTxns.length > 0) {
    writeToJsonFile(parsedTxns)
  }
}
try {
  parseTransactions()
} catch (e) {
  console.error(e)
}




console.log('Run the index file...')

