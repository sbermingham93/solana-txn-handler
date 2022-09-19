"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aver_1 = require("./idl/aver");
var web3_js_1 = require("@solana/web3.js");
var solana_transaction_parser_1 = require("@sonarwatch/solana-transaction-parser");
var anchor_1 = require("@project-serum/anchor");
var fs_1 = __importDefault(require("fs"));
var MARKET_PUBKEY = '4wVPU2UjeowgSMnbRKcm7p5cFkq46NeTqTxG57wSz1TK';
var SOLANA_URL = 'https://holy-cold-glade.solana-mainnet.quiknode.pro/';
var PROGRAM_ID = '6q5ZGhEj6kkmEjuyCXuH4x8493bpi9fNzvy9L8hX83HQ';
var rpcConnection = new web3_js_1.Connection(SOLANA_URL);
var txParser = new solana_transaction_parser_1.SolanaParser([{ idl: aver_1.IDL, programId: PROGRAM_ID }]);
var wallet = new anchor_1.Wallet(new web3_js_1.Keypair());
var provider = new anchor_1.AnchorProvider(rpcConnection, wallet, {});
var program = new anchor_1.Program(aver_1.IDL, PROGRAM_ID, provider);
var eventParser = new anchor_1.EventParser(program.programId, program.coder);
function writeToJsonFile(arraytoWrite, path) {
    return __awaiter(this, void 0, void 0, function () {
        var jsonContent;
        return __generator(this, function (_a) {
            jsonContent = JSON.stringify(arraytoWrite);
            fs_1.default.writeFile(path, jsonContent, 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
            return [2 /*return*/];
        });
    });
}
function getSignatures() {
    return __awaiter(this, void 0, void 0, function () {
        var signatures;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, rpcConnection.getSignaturesForAddress(new web3_js_1.PublicKey(MARKET_PUBKEY))];
                case 1:
                    signatures = _a.sent();
                    return [2 /*return*/, signatures.map(function (sig) { return sig.signature; })];
            }
        });
    });
}
var TX_EVENT_DISCRIMINATOR = 'pFdmPWk1kyA';
function parseConsumeLogMessages(logMessages) {
    var parsedEventTxns = [];
    var events = eventParser.parseLogs(logMessages);
    var eventTxnResult = events.next();
    while (!eventTxnResult.done) {
        if (eventTxnResult.value != null) {
            parsedEventTxns.push(eventTxnResult.value);
        }
        eventTxnResult = events.next();
    }
    console.log('GOT THE EVENTS...', parsedEventTxns);
    return parsedEventTxns;
}
function parseTransactions() {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var signatures, parsedTxns, transactionDetails, orders, cancelled_orders, err_signatures, passed_signatures, err_transaction_details, passed_transaction_details, _loop_1, orderIdMatch, index, i, i, parsed;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, getSignatures()];
                case 1:
                    signatures = _e.sent();
                    signatures = signatures.reverse();
                    parsedTxns = [];
                    console.log('There are ', signatures.length, ' signatures');
                    return [4 /*yield*/, rpcConnection.getParsedTransactions(signatures)];
                case 2:
                    transactionDetails = _e.sent();
                    console.log('There are ', transactionDetails.length, ' transaction details');
                    orders = [];
                    cancelled_orders = [];
                    err_signatures = [];
                    passed_signatures = [];
                    err_transaction_details = [];
                    passed_transaction_details = [];
                    _loop_1 = function (i) {
                        var logMessages, expression, posted_order_id, eventTxns, parsed, o_id_1, x;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    if (!(((_b = (_a = transactionDetails[i]) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.err) != null)) return [3 /*break*/, 1];
                                    err_signatures.push(signatures[i]);
                                    err_transaction_details.push(transactionDetails[i]);
                                    return [3 /*break*/, 3];
                                case 1:
                                    passed_signatures.push(signatures[i]);
                                    passed_transaction_details.push(transactionDetails[i]);
                                    logMessages = (_d = (_c = transactionDetails[i]) === null || _c === void 0 ? void 0 : _c.meta) === null || _d === void 0 ? void 0 : _d.logMessages;
                                    if (logMessages.toString().includes('Program log: Order summary')) {
                                        expression = /posted_order_id: Some\((.*?)\)/;
                                        orderIdMatch = expression.exec(logMessages.toString());
                                        if (orderIdMatch != null && orderIdMatch.length > 0) {
                                            posted_order_id = orderIdMatch[1];
                                            orders.push(posted_order_id);
                                        }
                                    }
                                    if (logMessages.toString().includes('Program log: Instruction: ConsumeEvents')) {
                                        eventTxns = parseConsumeLogMessages(logMessages);
                                        eventTxns.forEach(function (eventTxn) {
                                            console.log(eventTxn);
                                        });
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
                                    return [4 /*yield*/, txParser.parseTransaction(rpcConnection, signatures[i], false)];
                                case 2:
                                    parsed = _f.sent();
                                    if (parsed) {
                                        if (parsed[0].name == "cancelOrder") {
                                            o_id_1 = parsed[0].args["orderId"].toString();
                                            index = orders.indexOf(o_id_1);
                                            x = {
                                                'pubkey': parsed[0].accounts[1].pubkey.toString(),
                                                'outcomeId': parsed[0].args["outcomeId"],
                                                'orderId': o_id_1,
                                                'index': index,
                                            };
                                            cancelled_orders.push(x);
                                            orders = orders.filter(function (obj) { return obj !== o_id_1.toString(); });
                                        }
                                    }
                                    _f.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _e.label = 3;
                case 3:
                    if (!(i < signatures.length)) return [3 /*break*/, 6];
                    return [5 /*yield**/, _loop_1(i)];
                case 4:
                    _e.sent();
                    _e.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6:
                    console.log('There are ', err_signatures.length, ' errored signatures');
                    console.log('There are ', passed_signatures.length, ' passed signatures');
                    console.log('There are ', err_transaction_details.length, ' error transaction details');
                    console.log(cancelled_orders.length);
                    i = 0;
                    _e.label = 7;
                case 7:
                    if (!(i < passed_signatures.length)) return [3 /*break*/, 10];
                    return [4 /*yield*/, txParser.parseTransaction(rpcConnection, passed_signatures[i], false)];
                case 8:
                    parsed = _e.sent();
                    if (parsed && parsed.length > 0) {
                        parsedTxns.push(parsed[0]);
                    }
                    _e.label = 9;
                case 9:
                    i++;
                    return [3 /*break*/, 7];
                case 10:
                    if (parsedTxns.length > 0) {
                        writeToJsonFile(parsedTxns, "./parsed-txns.json");
                    }
                    if (passed_transaction_details.length > 0) {
                        writeToJsonFile(passed_transaction_details, "./passed-txns.json");
                    }
                    if (err_transaction_details.length > 0) {
                        writeToJsonFile(err_transaction_details, "./error-txns.json");
                    }
                    if (cancelled_orders.length > 0) {
                        writeToJsonFile(cancelled_orders, "./cancelled_orders.json");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
try {
    parseTransactions();
}
catch (e) {
    console.error(e);
}
console.log('Run the index file...');
