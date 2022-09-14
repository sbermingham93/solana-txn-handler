export type AverCore = {
    "version": "0.1.0",
    "name": "aver_core",
    "instructions": [
      {
        "name": "initMarket",
        "accounts": [
          {
            "name": "payer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "marketStore",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "quoteTokenMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "oracleFeed",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "initMarketArgs",
            "type": {
              "defined": "InitMarketArgs"
            }
          }
        ]
      },
      {
        "name": "supplementInitMarket",
        "accounts": [
          {
            "name": "payer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "orderbook",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "eventQueue",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "bids",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "asks",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "supplementInitMarketArgs",
            "type": {
              "defined": "SupplementInitMarketArgs"
            }
          }
        ]
      },
      {
        "name": "changeMarketStatus",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "marketStatus",
            "type": "u8"
          }
        ]
      },
      {
        "name": "updateMarketTimes",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "newTradingCeaseTime",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "newInplayStartTime",
            "type": {
              "option": "i64"
            }
          }
        ]
      },
      {
        "name": "placeOrder",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "orderbook",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "bids",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "asks",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "eventQueue",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "placeOrderArgs",
            "type": {
              "defined": "PlaceOrderArgs"
            }
          }
        ]
      },
      {
        "name": "cancelOrder",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "orderbook",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "bids",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "asks",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "eventQueue",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "orderId",
            "type": "u128"
          },
          {
            "name": "outcomeId",
            "type": "u8"
          }
        ]
      },
      {
        "name": "neutralizeOutcomePosition",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "orderbook",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "bids",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "asks",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "eventQueue",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "outcomeId",
            "type": "u8"
          }
        ]
      },
      {
        "name": "initUserMarket",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "host",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "numberOfOrders",
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      },
      {
        "name": "initUserHostLifetime",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "host",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      },
      {
        "name": "initReferrer",
        "accounts": [
          {
            "name": "payer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "owner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "referrer",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "host",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      },
      {
        "name": "initHost",
        "accounts": [
          {
            "name": "payer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "owner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "host",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "referrerFeeRateOfferedBps",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      },
      {
        "name": "depositTokens",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "withdrawTokens",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "consumeEvents",
        "accounts": [
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "orderbook",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "eventQueue",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "rewardTarget",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "maxIterations",
            "type": "u64"
          },
          {
            "name": "outcomeId",
            "type": "u8"
          }
        ]
      },
      {
        "name": "cancelAllOrders",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "outcomeIds",
            "type": {
              "vec": "u16"
            }
          }
        ]
      },
      {
        "name": "closeAaob",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "targetLamportsAccount",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "outcomeIds",
            "type": {
              "vec": "u16"
            }
          }
        ]
      },
      {
        "name": "closeUserMarket",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "closeMarket",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "targetLamportsAccount",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "sweepFees",
        "accounts": [
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "averQuoteTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thirdPartyTokenVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "hostCollectRevenueShare",
        "accounts": [
          {
            "name": "host",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thirdPartyTokenVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thirdPartyVaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "hostTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "referrerCollectRevenueShare",
        "accounts": [
          {
            "name": "referrer",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thirdPartyTokenVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thirdPartyVaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "referrerTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "collect",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "host",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "attemptResolve",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "oracleFeed",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "manualResolve",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "winningOutcome",
            "type": "u8"
          }
        ]
      },
      {
        "name": "settle",
        "accounts": [
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "host",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "rewardTarget",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "voidMarket",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "updateUserSelfExclusion",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "newSelfExclusionTime",
            "type": "i64"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "host",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "owner",
              "type": "publicKey"
            },
            {
              "name": "creationDate",
              "type": "i64"
            },
            {
              "name": "lastWithdrawal",
              "type": "i64"
            },
            {
              "name": "lastBalanceUpdate",
              "type": "i64"
            },
            {
              "name": "hostRevenueShareUncollected",
              "type": "u64"
            },
            {
              "name": "hostRevenueShareCollected",
              "type": "u64"
            },
            {
              "name": "hostFeeRateBps",
              "type": "u64"
            },
            {
              "name": "referrerFeeRateOfferedBps",
              "type": "u64"
            },
            {
              "name": "lastReferrerTermsChange",
              "type": "i64"
            }
          ]
        }
      },
      {
        "name": "market",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "marketStatus",
              "type": "u8"
            },
            {
              "name": "numberOfOutcomes",
              "type": "u8"
            },
            {
              "name": "numberOfWinners",
              "type": "u8"
            },
            {
              "name": "numberOfUmas",
              "type": "u8"
            },
            {
              "name": "vaultBump",
              "type": "u8"
            },
            {
              "name": "decimals",
              "type": "u8"
            },
            {
              "name": "inplayStartTime",
              "type": {
                "option": "i64"
              }
            },
            {
              "name": "tradingCeaseTime",
              "type": "i64"
            },
            {
              "name": "winningOutcome",
              "type": "u8"
            },
            {
              "name": "maxQuoteTokensIn",
              "type": "u64"
            },
            {
              "name": "maxQuoteTokensInPermissionCapped",
              "type": "u64"
            },
            {
              "name": "crankerReward",
              "type": "u64"
            },
            {
              "name": "matchedCount",
              "type": "u64"
            },
            {
              "name": "averAccumulatedFees",
              "type": "u64"
            },
            {
              "name": "thirdPartyAccumulatedFees",
              "type": "u64"
            },
            {
              "name": "openInterest",
              "type": "u64"
            },
            {
              "name": "withdrawableQuoteTokenBalance",
              "type": "u64"
            },
            {
              "name": "permissionedMarketFlag",
              "type": "bool"
            },
            {
              "name": "goingInPlayFlag",
              "type": "bool"
            },
            {
              "name": "activeImmediately",
              "type": "bool"
            },
            {
              "name": "quoteTokenMint",
              "type": "publicKey"
            },
            {
              "name": "quoteVault",
              "type": "publicKey"
            },
            {
              "name": "vaultAuthority",
              "type": "publicKey"
            },
            {
              "name": "marketAuthority",
              "type": "publicKey"
            },
            {
              "name": "marketStore",
              "type": "publicKey"
            },
            {
              "name": "oracleFeed",
              "type": "publicKey"
            },
            {
              "name": "feeTierCollectionBpsRates",
              "type": {
                "array": [
                  "u64",
                  7
                ]
              }
            },
            {
              "name": "marketName",
              "type": "string"
            },
            {
              "name": "outcomeNames",
              "type": {
                "vec": "string"
              }
            }
          ]
        }
      },
      {
        "name": "marketStore",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "market",
              "type": "publicKey"
            },
            {
              "name": "numberOfOutcomes",
              "type": "u8"
            },
            {
              "name": "minOrderbookBaseSize",
              "type": "u64"
            },
            {
              "name": "minNewOrderBaseSize",
              "type": "u64"
            },
            {
              "name": "minNewOrderQuoteSize",
              "type": "u64"
            },
            {
              "name": "orderbookAccounts",
              "type": {
                "vec": {
                  "defined": "OrderbookAccounts"
                }
              }
            },
            {
              "name": "initCounter",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "referrer",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "owner",
              "type": "publicKey"
            },
            {
              "name": "host",
              "type": "publicKey"
            },
            {
              "name": "creationDate",
              "type": "i64"
            },
            {
              "name": "lastBalanceUpdate",
              "type": "i64"
            },
            {
              "name": "lastWithdrawal",
              "type": "i64"
            },
            {
              "name": "lastReferral",
              "type": "i64"
            },
            {
              "name": "numberUsersReferred",
              "type": "u64"
            },
            {
              "name": "referrerRevenueShareCollected",
              "type": "u64"
            },
            {
              "name": "referrerFeeRateBps",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "userHostLifetime",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "user",
              "type": "publicKey"
            },
            {
              "name": "host",
              "type": "publicKey"
            },
            {
              "name": "userQuoteTokenAta",
              "type": "publicKey"
            },
            {
              "name": "referrer",
              "type": {
                "option": "publicKey"
              }
            },
            {
              "name": "referrerRevenueShareUncollected",
              "type": "u64"
            },
            {
              "name": "referralRevenueShareTotalGenerated",
              "type": "u64"
            },
            {
              "name": "referrerFeeRateBps",
              "type": "u64"
            },
            {
              "name": "lastFeeTierCheck",
              "type": {
                "defined": "FeeTier"
              }
            },
            {
              "name": "isSelfExcludedUntil",
              "type": {
                "option": "i64"
              }
            },
            {
              "name": "creationDate",
              "type": "i64"
            },
            {
              "name": "lastBalanceUpdate",
              "type": "i64"
            },
            {
              "name": "totalMarketsTraded",
              "type": "u16"
            },
            {
              "name": "totalQuoteVolumeTraded",
              "type": "u64"
            },
            {
              "name": "totalBaseVolumeTraded",
              "type": "u64"
            },
            {
              "name": "totalFeesPaid",
              "type": "u64"
            },
            {
              "name": "cumulativePnl",
              "type": "i64"
            },
            {
              "name": "cumulativeInvest",
              "type": "u64"
            },
            {
              "name": "displayName",
              "type": {
                "option": "string"
              }
            },
            {
              "name": "nftPfp",
              "type": {
                "option": "publicKey"
              }
            }
          ]
        }
      },
      {
        "name": "userMarket",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "market",
              "type": "publicKey"
            },
            {
              "name": "user",
              "type": "publicKey"
            },
            {
              "name": "userVerificationAccount",
              "type": {
                "option": "publicKey"
              }
            },
            {
              "name": "userHostLifetime",
              "type": "publicKey"
            },
            {
              "name": "numberOfOutcomes",
              "type": "u8"
            },
            {
              "name": "numberOfOrders",
              "type": "u32"
            },
            {
              "name": "maxNumberOfOrders",
              "type": "u32"
            },
            {
              "name": "netQuoteTokensIn",
              "type": "u64"
            },
            {
              "name": "accumulatedMakerQuoteVolume",
              "type": "u64"
            },
            {
              "name": "accumulatedMakerBaseVolume",
              "type": "u64"
            },
            {
              "name": "accumulatedTakerQuoteVolume",
              "type": "u64"
            },
            {
              "name": "accumulatedTakerBaseVolume",
              "type": "u64"
            },
            {
              "name": "outcomePositions",
              "type": {
                "vec": {
                  "defined": "OutcomePosition"
                }
              }
            },
            {
              "name": "orders",
              "type": {
                "vec": {
                  "defined": "Order"
                }
              }
            }
          ]
        }
      }
    ],
    "types": [
      {
        "name": "InitMarketArgs",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "numberOfOutcomes",
              "type": "u8"
            },
            {
              "name": "numberOfWinners",
              "type": "u8"
            },
            {
              "name": "vaultBump",
              "type": "u8"
            },
            {
              "name": "marketStoreBump",
              "type": "u8"
            },
            {
              "name": "permissionedMarketFlag",
              "type": "bool"
            },
            {
              "name": "minOrderbookBaseSize",
              "type": "u64"
            },
            {
              "name": "minNewOrderBaseSize",
              "type": "u64"
            },
            {
              "name": "minNewOrderQuoteSize",
              "type": "u64"
            },
            {
              "name": "maxQuoteTokensIn",
              "type": "u64"
            },
            {
              "name": "maxQuoteTokensInPermissionCapped",
              "type": "u64"
            },
            {
              "name": "crankerReward",
              "type": "u64"
            },
            {
              "name": "feeTierCollectionBpsRates",
              "type": {
                "array": [
                  "u64",
                  7
                ]
              }
            },
            {
              "name": "marketName",
              "type": "string"
            },
            {
              "name": "goingInPlayFlag",
              "type": "bool"
            },
            {
              "name": "activeImmediately",
              "type": "bool"
            },
            {
              "name": "tradingCeaseTime",
              "type": "i64"
            },
            {
              "name": "inplayStartTime",
              "type": {
                "option": "i64"
              }
            }
          ]
        }
      },
      {
        "name": "OrderbookAccounts",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "orderbook",
              "type": "publicKey"
            },
            {
              "name": "eventQueue",
              "type": "publicKey"
            },
            {
              "name": "bids",
              "type": "publicKey"
            },
            {
              "name": "asks",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "PlaceOrderArgs",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "outcomeId",
              "type": "u8"
            },
            {
              "name": "side",
              "type": "u8"
            },
            {
              "name": "limitPrice",
              "type": "u64"
            },
            {
              "name": "sizeFormat",
              "type": "u8"
            },
            {
              "name": "size",
              "type": "u64"
            },
            {
              "name": "orderType",
              "type": "u8"
            },
            {
              "name": "selfTradeBehavior",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "SupplementInitMarketArgs",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "outcomeId",
              "type": "u8"
            },
            {
              "name": "outcomeNames",
              "type": {
                "vec": "string"
              }
            },
            {
              "name": "orderbookBump",
              "type": "u8"
            },
            {
              "name": "eventQueueBump",
              "type": "u8"
            },
            {
              "name": "bidsBump",
              "type": "u8"
            },
            {
              "name": "asksBump",
              "type": "u8"
            },
            {
              "name": "eventCapacity",
              "type": "u8"
            },
            {
              "name": "nodesCapacity",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "OutcomePosition",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "free",
              "type": "u64"
            },
            {
              "name": "locked",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "Order",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "orderId",
              "type": "u128"
            },
            {
              "name": "outcomeId",
              "type": "u8"
            },
            {
              "name": "baseQty",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "MarketStatus",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Uninitialized"
            },
            {
              "name": "Initialized"
            },
            {
              "name": "ActivePreEvent"
            },
            {
              "name": "ActiveInPlay"
            },
            {
              "name": "HaltedPreEvent"
            },
            {
              "name": "HaltedInPlay"
            },
            {
              "name": "TradingCeased"
            },
            {
              "name": "CeasedCrankedClosed"
            },
            {
              "name": "Resolved"
            },
            {
              "name": "Voided"
            }
          ]
        }
      },
      {
        "name": "OrderType",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Limit"
            },
            {
              "name": "ImmediateOrCancel"
            },
            {
              "name": "FillOrKill"
            },
            {
              "name": "PostOnly"
            }
          ]
        }
      },
      {
        "name": "SizeFormat",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Payout"
            },
            {
              "name": "Stake"
            }
          ]
        }
      },
      {
        "name": "FeeTier",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Base"
            },
            {
              "name": "Aver1"
            },
            {
              "name": "Aver2"
            },
            {
              "name": "Aver3"
            },
            {
              "name": "Aver4"
            },
            {
              "name": "Aver5"
            },
            {
              "name": "ZeroFees"
            }
          ]
        }
      },
      {
        "name": "MarketEvent",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "InitMarket"
            },
            {
              "name": "InitUserMarket"
            },
            {
              "name": "InitHost"
            },
            {
              "name": "InitReferrer"
            },
            {
              "name": "InitUserHostLifetime"
            },
            {
              "name": "ProtocolFeesSwept"
            },
            {
              "name": "ThirdPartyFeesSwept"
            },
            {
              "name": "HostCollectRevenueShare"
            },
            {
              "name": "ReferrerCollectRevenueShare"
            },
            {
              "name": "Deposit"
            },
            {
              "name": "Withdraw"
            },
            {
              "name": "PlaceOrder"
            },
            {
              "name": "NeutralizeOutcomePosition"
            },
            {
              "name": "CancelOrder"
            },
            {
              "name": "TakerFill"
            },
            {
              "name": "MakerFill"
            },
            {
              "name": "Out"
            },
            {
              "name": "CollectWinnings"
            },
            {
              "name": "CloseUserAccount"
            },
            {
              "name": "MarketVoided"
            },
            {
              "name": "UpdateMarketTimes"
            },
            {
              "name": "ChangeMarketStatus"
            },
            {
              "name": "ManualResolution"
            },
            {
              "name": "AttemptResolution"
            },
            {
              "name": "CloseAaob"
            },
            {
              "name": "CloseMarket"
            },
            {
              "name": "ConsumeEventsCranker"
            },
            {
              "name": "CollectCloseCranker"
            },
            {
              "name": "UpdateUserSelfExclusionTime"
            }
          ]
        }
      }
    ],
    "events": [
      {
        "name": "TransactionEvent",
        "fields": [
          {
            "name": "transactionType",
            "type": "u8",
            "index": false
          },
          {
            "name": "marketPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "hostPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "userHostLifetimePubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "userWalletPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "userMarketPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "outcomeId",
            "type": "u8",
            "index": false
          },
          {
            "name": "programLamportsChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "programLamportsChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "walletQuoteTokenChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "walletQuoteTokenChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "umaQuoteTokenChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "umaQuoteTokenChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "umaOutcomeChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "umaOutcomeChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "pnlChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "pnlChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "feesPaid",
            "type": "u64",
            "index": false
          },
          {
            "name": "rebatesReceived",
            "type": "u64",
            "index": false
          },
          {
            "name": "side",
            "type": "u8",
            "index": false
          },
          {
            "name": "sizeFormat",
            "type": "u8",
            "index": false
          },
          {
            "name": "sizePayout",
            "type": "u64",
            "index": false
          },
          {
            "name": "sizeStake",
            "type": "u64",
            "index": false
          },
          {
            "name": "price",
            "type": "u64",
            "index": false
          },
          {
            "name": "orderType",
            "type": "u8",
            "index": false
          },
          {
            "name": "makerFlag",
            "type": "u8",
            "index": false
          },
          {
            "name": "orderId",
            "type": "u128",
            "index": false
          }
        ]
      },
      {
        "name": "StopMarketEvent",
        "fields": [
          {
            "name": "transactionType",
            "type": "u8",
            "index": false
          },
          {
            "name": "marketPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "userWalletPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "numberOfUmas",
            "type": "u8",
            "index": false
          },
          {
            "name": "vaultBalance",
            "type": "u64",
            "index": false
          },
          {
            "name": "openInterest",
            "type": "u64",
            "index": false
          },
          {
            "name": "withdrawableBalance",
            "type": "u64",
            "index": false
          },
          {
            "name": "averAccumulatedFees",
            "type": "u64",
            "index": false
          },
          {
            "name": "thirdPartyAccumulatedFees",
            "type": "u64",
            "index": false
          }
        ]
      },
      {
        "name": "CancelOrderEvent",
        "fields": [
          {
            "name": "transactionType",
            "type": "u8",
            "index": false
          },
          {
            "name": "outcomeId",
            "type": "u8",
            "index": false
          },
          {
            "name": "umaQuoteTokenChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "umaQuoteTokenChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "umaOutcomeChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "umaOutcomeChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "side",
            "type": "u8",
            "index": false
          },
          {
            "name": "sizePayout",
            "type": "u64",
            "index": false
          },
          {
            "name": "price",
            "type": "u64",
            "index": false
          },
          {
            "name": "orderId",
            "type": "u128",
            "index": false
          }
        ]
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "TooManyWinners",
        "msg": "Number of winners is greater than or equal to the number of outcomes"
      },
      {
        "code": 6001,
        "name": "InvalidQuoteTokenMint",
        "msg": "ATA has an invalid quote token mint"
      },
      {
        "code": 6002,
        "name": "UserSelfExcluded",
        "msg": "This user is self excluded at this time."
      },
      {
        "code": 6003,
        "name": "UncollectedFees",
        "msg": "Fees need to be swept before closing the market"
      },
      {
        "code": 6004,
        "name": "InvalidAccountOwner",
        "msg": "Account owner is not as expected"
      },
      {
        "code": 6005,
        "name": "MarketVaultNotEmpty",
        "msg": "Market vault needs to be empty to close the market"
      },
      {
        "code": 6006,
        "name": "InvalidWinningOutcome",
        "msg": "Failed to get valid winning outcome from oracle"
      },
      {
        "code": 6007,
        "name": "MarketStoreOrderbookAccountsError",
        "msg": "Orderbook accounts already exist for this outcome"
      },
      {
        "code": 6008,
        "name": "InvalidAverQuoteATA",
        "msg": "Invalid Aver quote token account provided"
      },
      {
        "code": 6009,
        "name": "IncorrectNumberOfOutcomes",
        "msg": "Number of outcomes must at least be 2 or greater"
      },
      {
        "code": 6010,
        "name": "InvalidAccountLength",
        "msg": "Account length not as expected"
      },
      {
        "code": 6011,
        "name": "InvalidMarketAuthority",
        "msg": "Market authority is not as expected"
      },
      {
        "code": 6012,
        "name": "InvalidThirdPartyTokenVault",
        "msg": "Third party token vault is not as expected"
      },
      {
        "code": 6013,
        "name": "InvalidUserAuthority",
        "msg": "User authority is not as expected"
      },
      {
        "code": 6014,
        "name": "InvalidVaultAccount",
        "msg": "Vault address is not as expected for pda and token"
      },
      {
        "code": 6015,
        "name": "InvalidSweepAuthority",
        "msg": "Invalid sweep authority"
      },
      {
        "code": 6016,
        "name": "InvalidMarketStatus",
        "msg": "Market status is invalid for operation"
      },
      {
        "code": 6017,
        "name": "MarketNotInPlay",
        "msg": "Market does not allow for going in-play"
      },
      {
        "code": 6018,
        "name": "MaxWinnersExceeded",
        "msg": "Max possible number of winners exceeded"
      },
      {
        "code": 6019,
        "name": "MaxOutcomesExceeded",
        "msg": "Max possible number of outcomes exceeded"
      },
      {
        "code": 6020,
        "name": "TradeSizeTooLow",
        "msg": "Trade size below minimum amount allowed"
      },
      {
        "code": 6021,
        "name": "CreateMarketAOBError",
        "msg": "There was an error when creating an orderbook/market on the aob"
      },
      {
        "code": 6022,
        "name": "PlaceOrderAOBError",
        "msg": "There was an error when trying to place an order on the aob"
      },
      {
        "code": 6023,
        "name": "CancelOrderAOBError",
        "msg": "There was an error when trying to cancel an order on the aob"
      },
      {
        "code": 6024,
        "name": "ConsumeEventsAOBError",
        "msg": "There was an error when consuming events on the aob"
      },
      {
        "code": 6025,
        "name": "InsufficientFunds",
        "msg": "Payer has insufficient funds"
      },
      {
        "code": 6026,
        "name": "FailedToInitTokenBalances",
        "msg": "Failed to init token balances"
      },
      {
        "code": 6027,
        "name": "InvalidOrderIndex",
        "msg": "The given order index is invalid."
      },
      {
        "code": 6028,
        "name": "InvalidOutcomeIndex",
        "msg": "The given outcome token index is invalid."
      },
      {
        "code": 6029,
        "name": "UserAccountFull",
        "msg": "The user account has reached its maximum capacity for open orders."
      },
      {
        "code": 6030,
        "name": "OrderNotFound",
        "msg": "The specified order has not been found."
      },
      {
        "code": 6031,
        "name": "NotEnoughFreeOutcomePositions",
        "msg": "Not enough free outcome tokens to lock outcome position."
      },
      {
        "code": 6032,
        "name": "NotEnoughLockedOutcomePositions",
        "msg": "Not enough locked outcome tokens to lock outcome position."
      },
      {
        "code": 6033,
        "name": "IncorrectAverMarketInUserMarket",
        "msg": "Aver Market is not as expected when placing order"
      },
      {
        "code": 6034,
        "name": "IncorrectPDA",
        "msg": "Incorrect PDA"
      },
      {
        "code": 6035,
        "name": "TransactionAborted",
        "msg": "The transaction has been aborted"
      },
      {
        "code": 6036,
        "name": "VaultAmountNotCorrect",
        "msg": "The amount in the Quote Token Vault account is not as expected"
      },
      {
        "code": 6037,
        "name": "WithdrawAmountTooHigh",
        "msg": "The amount that is being withdrawn is too high."
      },
      {
        "code": 6038,
        "name": "SerumAccountsDontMatchForOutcome",
        "msg": "Serum accounts don't match for the outcome id provided."
      },
      {
        "code": 6039,
        "name": "SerumAccountsIncorrectlyRelated",
        "msg": "Serum accounts not correctly related to each other."
      },
      {
        "code": 6040,
        "name": "OutcomePositionAmountError",
        "msg": "Free outcome positions error after user process"
      },
      {
        "code": 6041,
        "name": "NoOp",
        "msg": "The operation is a no-op"
      },
      {
        "code": 6042,
        "name": "MarketUMAsNeedSettlement",
        "msg": "UMAs remain for this market, need to settle"
      },
      {
        "code": 6043,
        "name": "OutcomeOutsideOutcomeSpace",
        "msg": "Given outcome is outside the outcome space for this market"
      },
      {
        "code": 6044,
        "name": "IncorrectOrderTypeForMarketOrder",
        "msg": "Market order type needs to be IOC or KOF"
      },
      {
        "code": 6045,
        "name": "DuplicateOrderbooksError",
        "msg": "There are duplicating AOB instances for this market"
      },
      {
        "code": 6046,
        "name": "SelfExclusionTimeInThePast",
        "msg": "Self exclusion time given is in the past"
      },
      {
        "code": 6047,
        "name": "InPlayStartTimeInThePast",
        "msg": "In-play start time given is in the past"
      },
      {
        "code": 6048,
        "name": "TradingCeaseTimeInThePast",
        "msg": "Trading cease time given is in the past"
      },
      {
        "code": 6049,
        "name": "NoOracleForMarket",
        "msg": "Market has no set oracle feed"
      },
      {
        "code": 6050,
        "name": "EventQueueZero",
        "msg": "Event queue header count is zero"
      },
      {
        "code": 6051,
        "name": "ReferrerAccountError",
        "msg": "Referrer account provided is not as expected"
      },
      {
        "code": 6052,
        "name": "MissingUserAccount",
        "msg": "A required user account is missing."
      },
      {
        "code": 6053,
        "name": "BaseSizeTooSmall",
        "msg": "The base order size is too small."
      },
      {
        "code": 6054,
        "name": "QuoteSizeTooSmall",
        "msg": "The quote order size is too small."
      },
      {
        "code": 6055,
        "name": "InvalidOrderIdForIndex",
        "msg": "Order id does not match with the order at the given index!"
      },
      {
        "code": 6056,
        "name": "InvalidOutcomeIdForIndex",
        "msg": "Outcome id does not match with the order at the given index!"
      },
      {
        "code": 6057,
        "name": "MakerTakerRateIssue",
        "msg": "Min taker fee has to be greater than max maker rebate"
      },
      {
        "code": 6058,
        "name": "IncorrectMarketBalancesAfterConsumeEvents",
        "msg": "Incorrect market balances after consume events"
      },
      {
        "code": 6059,
        "name": "CloseMarketAOBError",
        "msg": "There was an error when trying to close AOB accounts"
      },
      {
        "code": 6060,
        "name": "UserAccountStillActive",
        "msg": "The user account cannot be closed as it has pending orders or unsettled funds."
      },
      {
        "code": 6061,
        "name": "OrdersPendingForOutcome",
        "msg": "Cannot neutralize outcome position as UMA still has pending orders for outcome_id"
      },
      {
        "code": 6062,
        "name": "UserMustCollectWinnings",
        "msg": "User must collect winnings"
      },
      {
        "code": 6063,
        "name": "UserMustCollectAvailableDeposits",
        "msg": "User must collect free outcome positions"
      },
      {
        "code": 6064,
        "name": "IncorrectOutcomeNames",
        "msg": "Error in outcome names"
      },
      {
        "code": 6065,
        "name": "FreeOutcomePositionsRemain",
        "msg": "Free outcome positions remain in the UMA."
      },
      {
        "code": 6066,
        "name": "UserHasNoWinnings",
        "msg": "User market has no winnings to collect."
      },
      {
        "code": 6067,
        "name": "EventQueueNotEmpty",
        "msg": "Event queue must be empty in order to close serum accounts."
      },
      {
        "code": 6068,
        "name": "InvalidAutoCollectClose",
        "msg": "User account did not have auto collect or auto close set true."
      },
      {
        "code": 6069,
        "name": "InvalidUMAConfiguration",
        "msg": "User market account has invalid configurations"
      },
      {
        "code": 6070,
        "name": "UserPermissioningError",
        "msg": "Something went wrong with user permissioning"
      },
      {
        "code": 6071,
        "name": "QuoteTokenLimitExceeded",
        "msg": "Permissioned quote token limit exceeded"
      },
      {
        "code": 6072,
        "name": "LimitPriceError",
        "msg": "Limit price too high for market decimals"
      },
      {
        "code": 6073,
        "name": "SideError",
        "msg": "Side error"
      },
      {
        "code": 6074,
        "name": "PriceError",
        "msg": "If buy: price must be strictly greater than zero, sell: price strictly less than 1"
      },
      {
        "code": 6075,
        "name": "SelfExclusionTimeError",
        "msg": "New self exclusion time cannot be sooner than the older self exclusion time."
      },
      {
        "code": 6076,
        "name": "IncorrectBps",
        "msg": "bps needs to be >=0 or <= 10000"
      },
      {
        "code": 6077,
        "name": "TradingCeaseTimePassed",
        "msg": "This market is past it's trading cease time"
      },
      {
        "code": 6078,
        "name": "GoingInPlayTimePassed",
        "msg": "This market is past it's going in-play time"
      },
      {
        "code": 6079,
        "name": "InvalidUserQuoteATA",
        "msg": "User Quote ATA provided does not match user host lifetime ATA"
      }
    ]
  };
  
  export const IDL: AverCore = {
    "version": "0.1.0",
    "name": "aver_core",
    "instructions": [
      {
        "name": "initMarket",
        "accounts": [
          {
            "name": "payer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "marketStore",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "quoteTokenMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "oracleFeed",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "initMarketArgs",
            "type": {
              "defined": "InitMarketArgs"
            }
          }
        ]
      },
      {
        "name": "supplementInitMarket",
        "accounts": [
          {
            "name": "payer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "orderbook",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "eventQueue",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "bids",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "asks",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "supplementInitMarketArgs",
            "type": {
              "defined": "SupplementInitMarketArgs"
            }
          }
        ]
      },
      {
        "name": "changeMarketStatus",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "marketStatus",
            "type": "u8"
          }
        ]
      },
      {
        "name": "updateMarketTimes",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "newTradingCeaseTime",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "newInplayStartTime",
            "type": {
              "option": "i64"
            }
          }
        ]
      },
      {
        "name": "placeOrder",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "orderbook",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "bids",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "asks",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "eventQueue",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "placeOrderArgs",
            "type": {
              "defined": "PlaceOrderArgs"
            }
          }
        ]
      },
      {
        "name": "cancelOrder",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "orderbook",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "bids",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "asks",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "eventQueue",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "orderId",
            "type": "u128"
          },
          {
            "name": "outcomeId",
            "type": "u8"
          }
        ]
      },
      {
        "name": "neutralizeOutcomePosition",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "orderbook",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "bids",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "asks",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "eventQueue",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "outcomeId",
            "type": "u8"
          }
        ]
      },
      {
        "name": "initUserMarket",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "host",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "numberOfOrders",
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      },
      {
        "name": "initUserHostLifetime",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "host",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      },
      {
        "name": "initReferrer",
        "accounts": [
          {
            "name": "payer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "owner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "referrer",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "host",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      },
      {
        "name": "initHost",
        "accounts": [
          {
            "name": "payer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "owner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "host",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "referrerFeeRateOfferedBps",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      },
      {
        "name": "depositTokens",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "withdrawTokens",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "consumeEvents",
        "accounts": [
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "orderbook",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "eventQueue",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "rewardTarget",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "maxIterations",
            "type": "u64"
          },
          {
            "name": "outcomeId",
            "type": "u8"
          }
        ]
      },
      {
        "name": "cancelAllOrders",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "outcomeIds",
            "type": {
              "vec": "u16"
            }
          }
        ]
      },
      {
        "name": "closeAaob",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "marketStore",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "targetLamportsAccount",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "outcomeIds",
            "type": {
              "vec": "u16"
            }
          }
        ]
      },
      {
        "name": "closeUserMarket",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "closeMarket",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "targetLamportsAccount",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "sweepFees",
        "accounts": [
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "averQuoteTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thirdPartyTokenVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "hostCollectRevenueShare",
        "accounts": [
          {
            "name": "host",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thirdPartyTokenVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thirdPartyVaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "hostTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "referrerCollectRevenueShare",
        "accounts": [
          {
            "name": "referrer",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thirdPartyTokenVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thirdPartyVaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "referrerTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "collect",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userMarket",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userQuoteTokenAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "host",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "attemptResolve",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "oracleFeed",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "manualResolve",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "winningOutcome",
            "type": "u8"
          }
        ]
      },
      {
        "name": "settle",
        "accounts": [
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "host",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "rewardTarget",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "voidMarket",
        "accounts": [
          {
            "name": "marketAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "market",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "quoteVault",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "updateUserSelfExclusion",
        "accounts": [
          {
            "name": "user",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userHostLifetime",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "newSelfExclusionTime",
            "type": "i64"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "host",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "owner",
              "type": "publicKey"
            },
            {
              "name": "creationDate",
              "type": "i64"
            },
            {
              "name": "lastWithdrawal",
              "type": "i64"
            },
            {
              "name": "lastBalanceUpdate",
              "type": "i64"
            },
            {
              "name": "hostRevenueShareUncollected",
              "type": "u64"
            },
            {
              "name": "hostRevenueShareCollected",
              "type": "u64"
            },
            {
              "name": "hostFeeRateBps",
              "type": "u64"
            },
            {
              "name": "referrerFeeRateOfferedBps",
              "type": "u64"
            },
            {
              "name": "lastReferrerTermsChange",
              "type": "i64"
            }
          ]
        }
      },
      {
        "name": "market",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "marketStatus",
              "type": "u8"
            },
            {
              "name": "numberOfOutcomes",
              "type": "u8"
            },
            {
              "name": "numberOfWinners",
              "type": "u8"
            },
            {
              "name": "numberOfUmas",
              "type": "u8"
            },
            {
              "name": "vaultBump",
              "type": "u8"
            },
            {
              "name": "decimals",
              "type": "u8"
            },
            {
              "name": "inplayStartTime",
              "type": {
                "option": "i64"
              }
            },
            {
              "name": "tradingCeaseTime",
              "type": "i64"
            },
            {
              "name": "winningOutcome",
              "type": "u8"
            },
            {
              "name": "maxQuoteTokensIn",
              "type": "u64"
            },
            {
              "name": "maxQuoteTokensInPermissionCapped",
              "type": "u64"
            },
            {
              "name": "crankerReward",
              "type": "u64"
            },
            {
              "name": "matchedCount",
              "type": "u64"
            },
            {
              "name": "averAccumulatedFees",
              "type": "u64"
            },
            {
              "name": "thirdPartyAccumulatedFees",
              "type": "u64"
            },
            {
              "name": "openInterest",
              "type": "u64"
            },
            {
              "name": "withdrawableQuoteTokenBalance",
              "type": "u64"
            },
            {
              "name": "permissionedMarketFlag",
              "type": "bool"
            },
            {
              "name": "goingInPlayFlag",
              "type": "bool"
            },
            {
              "name": "activeImmediately",
              "type": "bool"
            },
            {
              "name": "quoteTokenMint",
              "type": "publicKey"
            },
            {
              "name": "quoteVault",
              "type": "publicKey"
            },
            {
              "name": "vaultAuthority",
              "type": "publicKey"
            },
            {
              "name": "marketAuthority",
              "type": "publicKey"
            },
            {
              "name": "marketStore",
              "type": "publicKey"
            },
            {
              "name": "oracleFeed",
              "type": "publicKey"
            },
            {
              "name": "feeTierCollectionBpsRates",
              "type": {
                "array": [
                  "u64",
                  7
                ]
              }
            },
            {
              "name": "marketName",
              "type": "string"
            },
            {
              "name": "outcomeNames",
              "type": {
                "vec": "string"
              }
            }
          ]
        }
      },
      {
        "name": "marketStore",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "market",
              "type": "publicKey"
            },
            {
              "name": "numberOfOutcomes",
              "type": "u8"
            },
            {
              "name": "minOrderbookBaseSize",
              "type": "u64"
            },
            {
              "name": "minNewOrderBaseSize",
              "type": "u64"
            },
            {
              "name": "minNewOrderQuoteSize",
              "type": "u64"
            },
            {
              "name": "orderbookAccounts",
              "type": {
                "vec": {
                  "defined": "OrderbookAccounts"
                }
              }
            },
            {
              "name": "initCounter",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "referrer",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "owner",
              "type": "publicKey"
            },
            {
              "name": "host",
              "type": "publicKey"
            },
            {
              "name": "creationDate",
              "type": "i64"
            },
            {
              "name": "lastBalanceUpdate",
              "type": "i64"
            },
            {
              "name": "lastWithdrawal",
              "type": "i64"
            },
            {
              "name": "lastReferral",
              "type": "i64"
            },
            {
              "name": "numberUsersReferred",
              "type": "u64"
            },
            {
              "name": "referrerRevenueShareCollected",
              "type": "u64"
            },
            {
              "name": "referrerFeeRateBps",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "userHostLifetime",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "user",
              "type": "publicKey"
            },
            {
              "name": "host",
              "type": "publicKey"
            },
            {
              "name": "userQuoteTokenAta",
              "type": "publicKey"
            },
            {
              "name": "referrer",
              "type": {
                "option": "publicKey"
              }
            },
            {
              "name": "referrerRevenueShareUncollected",
              "type": "u64"
            },
            {
              "name": "referralRevenueShareTotalGenerated",
              "type": "u64"
            },
            {
              "name": "referrerFeeRateBps",
              "type": "u64"
            },
            {
              "name": "lastFeeTierCheck",
              "type": {
                "defined": "FeeTier"
              }
            },
            {
              "name": "isSelfExcludedUntil",
              "type": {
                "option": "i64"
              }
            },
            {
              "name": "creationDate",
              "type": "i64"
            },
            {
              "name": "lastBalanceUpdate",
              "type": "i64"
            },
            {
              "name": "totalMarketsTraded",
              "type": "u16"
            },
            {
              "name": "totalQuoteVolumeTraded",
              "type": "u64"
            },
            {
              "name": "totalBaseVolumeTraded",
              "type": "u64"
            },
            {
              "name": "totalFeesPaid",
              "type": "u64"
            },
            {
              "name": "cumulativePnl",
              "type": "i64"
            },
            {
              "name": "cumulativeInvest",
              "type": "u64"
            },
            {
              "name": "displayName",
              "type": {
                "option": "string"
              }
            },
            {
              "name": "nftPfp",
              "type": {
                "option": "publicKey"
              }
            }
          ]
        }
      },
      {
        "name": "userMarket",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "version",
              "type": "u8"
            },
            {
              "name": "market",
              "type": "publicKey"
            },
            {
              "name": "user",
              "type": "publicKey"
            },
            {
              "name": "userVerificationAccount",
              "type": {
                "option": "publicKey"
              }
            },
            {
              "name": "userHostLifetime",
              "type": "publicKey"
            },
            {
              "name": "numberOfOutcomes",
              "type": "u8"
            },
            {
              "name": "numberOfOrders",
              "type": "u32"
            },
            {
              "name": "maxNumberOfOrders",
              "type": "u32"
            },
            {
              "name": "netQuoteTokensIn",
              "type": "u64"
            },
            {
              "name": "accumulatedMakerQuoteVolume",
              "type": "u64"
            },
            {
              "name": "accumulatedMakerBaseVolume",
              "type": "u64"
            },
            {
              "name": "accumulatedTakerQuoteVolume",
              "type": "u64"
            },
            {
              "name": "accumulatedTakerBaseVolume",
              "type": "u64"
            },
            {
              "name": "outcomePositions",
              "type": {
                "vec": {
                  "defined": "OutcomePosition"
                }
              }
            },
            {
              "name": "orders",
              "type": {
                "vec": {
                  "defined": "Order"
                }
              }
            }
          ]
        }
      }
    ],
    "types": [
      {
        "name": "InitMarketArgs",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "numberOfOutcomes",
              "type": "u8"
            },
            {
              "name": "numberOfWinners",
              "type": "u8"
            },
            {
              "name": "vaultBump",
              "type": "u8"
            },
            {
              "name": "marketStoreBump",
              "type": "u8"
            },
            {
              "name": "permissionedMarketFlag",
              "type": "bool"
            },
            {
              "name": "minOrderbookBaseSize",
              "type": "u64"
            },
            {
              "name": "minNewOrderBaseSize",
              "type": "u64"
            },
            {
              "name": "minNewOrderQuoteSize",
              "type": "u64"
            },
            {
              "name": "maxQuoteTokensIn",
              "type": "u64"
            },
            {
              "name": "maxQuoteTokensInPermissionCapped",
              "type": "u64"
            },
            {
              "name": "crankerReward",
              "type": "u64"
            },
            {
              "name": "feeTierCollectionBpsRates",
              "type": {
                "array": [
                  "u64",
                  7
                ]
              }
            },
            {
              "name": "marketName",
              "type": "string"
            },
            {
              "name": "goingInPlayFlag",
              "type": "bool"
            },
            {
              "name": "activeImmediately",
              "type": "bool"
            },
            {
              "name": "tradingCeaseTime",
              "type": "i64"
            },
            {
              "name": "inplayStartTime",
              "type": {
                "option": "i64"
              }
            }
          ]
        }
      },
      {
        "name": "OrderbookAccounts",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "orderbook",
              "type": "publicKey"
            },
            {
              "name": "eventQueue",
              "type": "publicKey"
            },
            {
              "name": "bids",
              "type": "publicKey"
            },
            {
              "name": "asks",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "PlaceOrderArgs",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "outcomeId",
              "type": "u8"
            },
            {
              "name": "side",
              "type": "u8"
            },
            {
              "name": "limitPrice",
              "type": "u64"
            },
            {
              "name": "sizeFormat",
              "type": "u8"
            },
            {
              "name": "size",
              "type": "u64"
            },
            {
              "name": "orderType",
              "type": "u8"
            },
            {
              "name": "selfTradeBehavior",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "SupplementInitMarketArgs",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "outcomeId",
              "type": "u8"
            },
            {
              "name": "outcomeNames",
              "type": {
                "vec": "string"
              }
            },
            {
              "name": "orderbookBump",
              "type": "u8"
            },
            {
              "name": "eventQueueBump",
              "type": "u8"
            },
            {
              "name": "bidsBump",
              "type": "u8"
            },
            {
              "name": "asksBump",
              "type": "u8"
            },
            {
              "name": "eventCapacity",
              "type": "u8"
            },
            {
              "name": "nodesCapacity",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "OutcomePosition",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "free",
              "type": "u64"
            },
            {
              "name": "locked",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "Order",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "orderId",
              "type": "u128"
            },
            {
              "name": "outcomeId",
              "type": "u8"
            },
            {
              "name": "baseQty",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "MarketStatus",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Uninitialized"
            },
            {
              "name": "Initialized"
            },
            {
              "name": "ActivePreEvent"
            },
            {
              "name": "ActiveInPlay"
            },
            {
              "name": "HaltedPreEvent"
            },
            {
              "name": "HaltedInPlay"
            },
            {
              "name": "TradingCeased"
            },
            {
              "name": "CeasedCrankedClosed"
            },
            {
              "name": "Resolved"
            },
            {
              "name": "Voided"
            }
          ]
        }
      },
      {
        "name": "OrderType",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Limit"
            },
            {
              "name": "ImmediateOrCancel"
            },
            {
              "name": "FillOrKill"
            },
            {
              "name": "PostOnly"
            }
          ]
        }
      },
      {
        "name": "SizeFormat",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Payout"
            },
            {
              "name": "Stake"
            }
          ]
        }
      },
      {
        "name": "FeeTier",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Base"
            },
            {
              "name": "Aver1"
            },
            {
              "name": "Aver2"
            },
            {
              "name": "Aver3"
            },
            {
              "name": "Aver4"
            },
            {
              "name": "Aver5"
            },
            {
              "name": "ZeroFees"
            }
          ]
        }
      },
      {
        "name": "MarketEvent",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "InitMarket"
            },
            {
              "name": "InitUserMarket"
            },
            {
              "name": "InitHost"
            },
            {
              "name": "InitReferrer"
            },
            {
              "name": "InitUserHostLifetime"
            },
            {
              "name": "ProtocolFeesSwept"
            },
            {
              "name": "ThirdPartyFeesSwept"
            },
            {
              "name": "HostCollectRevenueShare"
            },
            {
              "name": "ReferrerCollectRevenueShare"
            },
            {
              "name": "Deposit"
            },
            {
              "name": "Withdraw"
            },
            {
              "name": "PlaceOrder"
            },
            {
              "name": "NeutralizeOutcomePosition"
            },
            {
              "name": "CancelOrder"
            },
            {
              "name": "TakerFill"
            },
            {
              "name": "MakerFill"
            },
            {
              "name": "Out"
            },
            {
              "name": "CollectWinnings"
            },
            {
              "name": "CloseUserAccount"
            },
            {
              "name": "MarketVoided"
            },
            {
              "name": "UpdateMarketTimes"
            },
            {
              "name": "ChangeMarketStatus"
            },
            {
              "name": "ManualResolution"
            },
            {
              "name": "AttemptResolution"
            },
            {
              "name": "CloseAaob"
            },
            {
              "name": "CloseMarket"
            },
            {
              "name": "ConsumeEventsCranker"
            },
            {
              "name": "CollectCloseCranker"
            },
            {
              "name": "UpdateUserSelfExclusionTime"
            }
          ]
        }
      }
    ],
    "events": [
      {
        "name": "TransactionEvent",
        "fields": [
          {
            "name": "transactionType",
            "type": "u8",
            "index": false
          },
          {
            "name": "marketPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "hostPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "userHostLifetimePubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "userWalletPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "userMarketPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "outcomeId",
            "type": "u8",
            "index": false
          },
          {
            "name": "programLamportsChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "programLamportsChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "walletQuoteTokenChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "walletQuoteTokenChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "umaQuoteTokenChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "umaQuoteTokenChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "umaOutcomeChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "umaOutcomeChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "pnlChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "pnlChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "feesPaid",
            "type": "u64",
            "index": false
          },
          {
            "name": "rebatesReceived",
            "type": "u64",
            "index": false
          },
          {
            "name": "side",
            "type": "u8",
            "index": false
          },
          {
            "name": "sizeFormat",
            "type": "u8",
            "index": false
          },
          {
            "name": "sizePayout",
            "type": "u64",
            "index": false
          },
          {
            "name": "sizeStake",
            "type": "u64",
            "index": false
          },
          {
            "name": "price",
            "type": "u64",
            "index": false
          },
          {
            "name": "orderType",
            "type": "u8",
            "index": false
          },
          {
            "name": "makerFlag",
            "type": "u8",
            "index": false
          },
          {
            "name": "orderId",
            "type": "u128",
            "index": false
          }
        ]
      },
      {
        "name": "StopMarketEvent",
        "fields": [
          {
            "name": "transactionType",
            "type": "u8",
            "index": false
          },
          {
            "name": "marketPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "userWalletPubkey",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "numberOfUmas",
            "type": "u8",
            "index": false
          },
          {
            "name": "vaultBalance",
            "type": "u64",
            "index": false
          },
          {
            "name": "openInterest",
            "type": "u64",
            "index": false
          },
          {
            "name": "withdrawableBalance",
            "type": "u64",
            "index": false
          },
          {
            "name": "averAccumulatedFees",
            "type": "u64",
            "index": false
          },
          {
            "name": "thirdPartyAccumulatedFees",
            "type": "u64",
            "index": false
          }
        ]
      },
      {
        "name": "CancelOrderEvent",
        "fields": [
          {
            "name": "transactionType",
            "type": "u8",
            "index": false
          },
          {
            "name": "outcomeId",
            "type": "u8",
            "index": false
          },
          {
            "name": "umaQuoteTokenChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "umaQuoteTokenChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "umaOutcomeChangeSign",
            "type": "i8",
            "index": false
          },
          {
            "name": "umaOutcomeChange",
            "type": "u64",
            "index": false
          },
          {
            "name": "side",
            "type": "u8",
            "index": false
          },
          {
            "name": "sizePayout",
            "type": "u64",
            "index": false
          },
          {
            "name": "price",
            "type": "u64",
            "index": false
          },
          {
            "name": "orderId",
            "type": "u128",
            "index": false
          }
        ]
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "TooManyWinners",
        "msg": "Number of winners is greater than or equal to the number of outcomes"
      },
      {
        "code": 6001,
        "name": "InvalidQuoteTokenMint",
        "msg": "ATA has an invalid quote token mint"
      },
      {
        "code": 6002,
        "name": "UserSelfExcluded",
        "msg": "This user is self excluded at this time."
      },
      {
        "code": 6003,
        "name": "UncollectedFees",
        "msg": "Fees need to be swept before closing the market"
      },
      {
        "code": 6004,
        "name": "InvalidAccountOwner",
        "msg": "Account owner is not as expected"
      },
      {
        "code": 6005,
        "name": "MarketVaultNotEmpty",
        "msg": "Market vault needs to be empty to close the market"
      },
      {
        "code": 6006,
        "name": "InvalidWinningOutcome",
        "msg": "Failed to get valid winning outcome from oracle"
      },
      {
        "code": 6007,
        "name": "MarketStoreOrderbookAccountsError",
        "msg": "Orderbook accounts already exist for this outcome"
      },
      {
        "code": 6008,
        "name": "InvalidAverQuoteATA",
        "msg": "Invalid Aver quote token account provided"
      },
      {
        "code": 6009,
        "name": "IncorrectNumberOfOutcomes",
        "msg": "Number of outcomes must at least be 2 or greater"
      },
      {
        "code": 6010,
        "name": "InvalidAccountLength",
        "msg": "Account length not as expected"
      },
      {
        "code": 6011,
        "name": "InvalidMarketAuthority",
        "msg": "Market authority is not as expected"
      },
      {
        "code": 6012,
        "name": "InvalidThirdPartyTokenVault",
        "msg": "Third party token vault is not as expected"
      },
      {
        "code": 6013,
        "name": "InvalidUserAuthority",
        "msg": "User authority is not as expected"
      },
      {
        "code": 6014,
        "name": "InvalidVaultAccount",
        "msg": "Vault address is not as expected for pda and token"
      },
      {
        "code": 6015,
        "name": "InvalidSweepAuthority",
        "msg": "Invalid sweep authority"
      },
      {
        "code": 6016,
        "name": "InvalidMarketStatus",
        "msg": "Market status is invalid for operation"
      },
      {
        "code": 6017,
        "name": "MarketNotInPlay",
        "msg": "Market does not allow for going in-play"
      },
      {
        "code": 6018,
        "name": "MaxWinnersExceeded",
        "msg": "Max possible number of winners exceeded"
      },
      {
        "code": 6019,
        "name": "MaxOutcomesExceeded",
        "msg": "Max possible number of outcomes exceeded"
      },
      {
        "code": 6020,
        "name": "TradeSizeTooLow",
        "msg": "Trade size below minimum amount allowed"
      },
      {
        "code": 6021,
        "name": "CreateMarketAOBError",
        "msg": "There was an error when creating an orderbook/market on the aob"
      },
      {
        "code": 6022,
        "name": "PlaceOrderAOBError",
        "msg": "There was an error when trying to place an order on the aob"
      },
      {
        "code": 6023,
        "name": "CancelOrderAOBError",
        "msg": "There was an error when trying to cancel an order on the aob"
      },
      {
        "code": 6024,
        "name": "ConsumeEventsAOBError",
        "msg": "There was an error when consuming events on the aob"
      },
      {
        "code": 6025,
        "name": "InsufficientFunds",
        "msg": "Payer has insufficient funds"
      },
      {
        "code": 6026,
        "name": "FailedToInitTokenBalances",
        "msg": "Failed to init token balances"
      },
      {
        "code": 6027,
        "name": "InvalidOrderIndex",
        "msg": "The given order index is invalid."
      },
      {
        "code": 6028,
        "name": "InvalidOutcomeIndex",
        "msg": "The given outcome token index is invalid."
      },
      {
        "code": 6029,
        "name": "UserAccountFull",
        "msg": "The user account has reached its maximum capacity for open orders."
      },
      {
        "code": 6030,
        "name": "OrderNotFound",
        "msg": "The specified order has not been found."
      },
      {
        "code": 6031,
        "name": "NotEnoughFreeOutcomePositions",
        "msg": "Not enough free outcome tokens to lock outcome position."
      },
      {
        "code": 6032,
        "name": "NotEnoughLockedOutcomePositions",
        "msg": "Not enough locked outcome tokens to lock outcome position."
      },
      {
        "code": 6033,
        "name": "IncorrectAverMarketInUserMarket",
        "msg": "Aver Market is not as expected when placing order"
      },
      {
        "code": 6034,
        "name": "IncorrectPDA",
        "msg": "Incorrect PDA"
      },
      {
        "code": 6035,
        "name": "TransactionAborted",
        "msg": "The transaction has been aborted"
      },
      {
        "code": 6036,
        "name": "VaultAmountNotCorrect",
        "msg": "The amount in the Quote Token Vault account is not as expected"
      },
      {
        "code": 6037,
        "name": "WithdrawAmountTooHigh",
        "msg": "The amount that is being withdrawn is too high."
      },
      {
        "code": 6038,
        "name": "SerumAccountsDontMatchForOutcome",
        "msg": "Serum accounts don't match for the outcome id provided."
      },
      {
        "code": 6039,
        "name": "SerumAccountsIncorrectlyRelated",
        "msg": "Serum accounts not correctly related to each other."
      },
      {
        "code": 6040,
        "name": "OutcomePositionAmountError",
        "msg": "Free outcome positions error after user process"
      },
      {
        "code": 6041,
        "name": "NoOp",
        "msg": "The operation is a no-op"
      },
      {
        "code": 6042,
        "name": "MarketUMAsNeedSettlement",
        "msg": "UMAs remain for this market, need to settle"
      },
      {
        "code": 6043,
        "name": "OutcomeOutsideOutcomeSpace",
        "msg": "Given outcome is outside the outcome space for this market"
      },
      {
        "code": 6044,
        "name": "IncorrectOrderTypeForMarketOrder",
        "msg": "Market order type needs to be IOC or KOF"
      },
      {
        "code": 6045,
        "name": "DuplicateOrderbooksError",
        "msg": "There are duplicating AOB instances for this market"
      },
      {
        "code": 6046,
        "name": "SelfExclusionTimeInThePast",
        "msg": "Self exclusion time given is in the past"
      },
      {
        "code": 6047,
        "name": "InPlayStartTimeInThePast",
        "msg": "In-play start time given is in the past"
      },
      {
        "code": 6048,
        "name": "TradingCeaseTimeInThePast",
        "msg": "Trading cease time given is in the past"
      },
      {
        "code": 6049,
        "name": "NoOracleForMarket",
        "msg": "Market has no set oracle feed"
      },
      {
        "code": 6050,
        "name": "EventQueueZero",
        "msg": "Event queue header count is zero"
      },
      {
        "code": 6051,
        "name": "ReferrerAccountError",
        "msg": "Referrer account provided is not as expected"
      },
      {
        "code": 6052,
        "name": "MissingUserAccount",
        "msg": "A required user account is missing."
      },
      {
        "code": 6053,
        "name": "BaseSizeTooSmall",
        "msg": "The base order size is too small."
      },
      {
        "code": 6054,
        "name": "QuoteSizeTooSmall",
        "msg": "The quote order size is too small."
      },
      {
        "code": 6055,
        "name": "InvalidOrderIdForIndex",
        "msg": "Order id does not match with the order at the given index!"
      },
      {
        "code": 6056,
        "name": "InvalidOutcomeIdForIndex",
        "msg": "Outcome id does not match with the order at the given index!"
      },
      {
        "code": 6057,
        "name": "MakerTakerRateIssue",
        "msg": "Min taker fee has to be greater than max maker rebate"
      },
      {
        "code": 6058,
        "name": "IncorrectMarketBalancesAfterConsumeEvents",
        "msg": "Incorrect market balances after consume events"
      },
      {
        "code": 6059,
        "name": "CloseMarketAOBError",
        "msg": "There was an error when trying to close AOB accounts"
      },
      {
        "code": 6060,
        "name": "UserAccountStillActive",
        "msg": "The user account cannot be closed as it has pending orders or unsettled funds."
      },
      {
        "code": 6061,
        "name": "OrdersPendingForOutcome",
        "msg": "Cannot neutralize outcome position as UMA still has pending orders for outcome_id"
      },
      {
        "code": 6062,
        "name": "UserMustCollectWinnings",
        "msg": "User must collect winnings"
      },
      {
        "code": 6063,
        "name": "UserMustCollectAvailableDeposits",
        "msg": "User must collect free outcome positions"
      },
      {
        "code": 6064,
        "name": "IncorrectOutcomeNames",
        "msg": "Error in outcome names"
      },
      {
        "code": 6065,
        "name": "FreeOutcomePositionsRemain",
        "msg": "Free outcome positions remain in the UMA."
      },
      {
        "code": 6066,
        "name": "UserHasNoWinnings",
        "msg": "User market has no winnings to collect."
      },
      {
        "code": 6067,
        "name": "EventQueueNotEmpty",
        "msg": "Event queue must be empty in order to close serum accounts."
      },
      {
        "code": 6068,
        "name": "InvalidAutoCollectClose",
        "msg": "User account did not have auto collect or auto close set true."
      },
      {
        "code": 6069,
        "name": "InvalidUMAConfiguration",
        "msg": "User market account has invalid configurations"
      },
      {
        "code": 6070,
        "name": "UserPermissioningError",
        "msg": "Something went wrong with user permissioning"
      },
      {
        "code": 6071,
        "name": "QuoteTokenLimitExceeded",
        "msg": "Permissioned quote token limit exceeded"
      },
      {
        "code": 6072,
        "name": "LimitPriceError",
        "msg": "Limit price too high for market decimals"
      },
      {
        "code": 6073,
        "name": "SideError",
        "msg": "Side error"
      },
      {
        "code": 6074,
        "name": "PriceError",
        "msg": "If buy: price must be strictly greater than zero, sell: price strictly less than 1"
      },
      {
        "code": 6075,
        "name": "SelfExclusionTimeError",
        "msg": "New self exclusion time cannot be sooner than the older self exclusion time."
      },
      {
        "code": 6076,
        "name": "IncorrectBps",
        "msg": "bps needs to be >=0 or <= 10000"
      },
      {
        "code": 6077,
        "name": "TradingCeaseTimePassed",
        "msg": "This market is past it's trading cease time"
      },
      {
        "code": 6078,
        "name": "GoingInPlayTimePassed",
        "msg": "This market is past it's going in-play time"
      },
      {
        "code": 6079,
        "name": "InvalidUserQuoteATA",
        "msg": "User Quote ATA provided does not match user host lifetime ATA"
      }
    ]
  };
  