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
var fs_1 = __importDefault(require("fs"));
var MARKET_PUBKEY = '5McbCCMvYH2QsKSNagv87WvLyPKArQJngFBK5FqEfPNY';
var SOLANA_URL = 'https://holy-cold-glade.solana-mainnet.quiknode.pro/';
var PROGRAM_ID = '6q5ZGhEj6kkmEjuyCXuH4x8493bpi9fNzvy9L8hX83HQ';
var rpcConnection = new web3_js_1.Connection(SOLANA_URL);
var txParser = new solana_transaction_parser_1.SolanaParser([{ idl: aver_1.IDL, programId: PROGRAM_ID }]);
function writeToJsonFile(arraytoWrite) {
    return __awaiter(this, void 0, void 0, function () {
        var jsonContent;
        return __generator(this, function (_a) {
            jsonContent = JSON.stringify(arraytoWrite);
            fs_1.default.writeFile("./parsed-txns.json", jsonContent, 'utf8', function (err) {
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
function parseTransactions() {
    return __awaiter(this, void 0, void 0, function () {
        var signatures, parsedTxns, i, parsed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getSignatures()];
                case 1:
                    signatures = _a.sent();
                    parsedTxns = [];
                    console.log('There are ', signatures.length, ' signatures');
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < 10)) return [3 /*break*/, 5];
                    return [4 /*yield*/, txParser.parseTransaction(rpcConnection, signatures[i], false)];
                case 3:
                    parsed = _a.sent();
                    if (parsed && parsed.length > 0) {
                        console.log(parsed[0].name);
                        console.log(parsed[0].accounts);
                        console.log(parsed[0].args);
                        parsedTxns.push(parsed[0]);
                    }
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    if (parsedTxns.length > 0) {
                        writeToJsonFile(parsedTxns);
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
