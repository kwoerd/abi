[
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "metadataURI",
                      "type": "string"
                    },
                    {
                      "internalType": "address",
                      "name": "implementation",
                      "type": "address"
                    }
                  ],
                  "internalType": "struct IExtension.ExtensionMetadata",
                  "name": "metadata",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "bytes4",
                      "name": "functionSelector",
                      "type": "bytes4"
                    },
                    {
                      "internalType": "string",
                      "name": "functionSignature",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct IExtension.ExtensionFunction[]",
                  "name": "functions",
                  "type": "tuple[]"
                }
              ],
              "internalType": "struct IExtension.Extension[]",
              "name": "extensions",
              "type": "tuple[]"
            },
            {
              "internalType": "address",
              "name": "royaltyEngineAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "nativeTokenWrapper",
              "type": "address"
            }
          ],
          "internalType": "struct MarketplaceV3.MarketplaceConstructorParams",
          "name": "_marketplaceV3Params",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_size",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_start",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_end",
          "type": "uint256"
        }
      ],
      "name": "InvalidCodeAtRange",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "WriteError",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "prevURI",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "newURI",
          "type": "string"
        }
      ],
      "name": "ContractURIUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        },
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "metadataURI",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "implementation",
                  "type": "address"
                }
              ],
              "internalType": "struct IExtension.ExtensionMetadata",
              "name": "metadata",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bytes4",
                  "name": "functionSelector",
                  "type": "bytes4"
                },
                {
                  "internalType": "string",
                  "name": "functionSignature",
                  "type": "string"
                }
              ],
              "internalType": "struct IExtension.ExtensionFunction[]",
              "name": "functions",
              "type": "tuple[]"
            }
          ],
          "indexed": false,
          "internalType": "struct IExtension.Extension",
          "name": "extension",
          "type": "tuple"
        }
      ],
      "name": "ExtensionAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "metadataURI",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "implementation",
                  "type": "address"
                }
              ],
              "internalType": "struct IExtension.ExtensionMetadata",
              "name": "metadata",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bytes4",
                  "name": "functionSelector",
                  "type": "bytes4"
                },
                {
                  "internalType": "string",
                  "name": "functionSignature",
                  "type": "string"
                }
              ],
              "internalType": "struct IExtension.ExtensionFunction[]",
              "name": "functions",
              "type": "tuple[]"
            }
          ],
          "indexed": false,
          "internalType": "struct IExtension.Extension",
          "name": "extension",
          "type": "tuple"
        }
      ],
      "name": "ExtensionRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        },
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "metadataURI",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "implementation",
                  "type": "address"
                }
              ],
              "internalType": "struct IExtension.ExtensionMetadata",
              "name": "metadata",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bytes4",
                  "name": "functionSelector",
                  "type": "bytes4"
                },
                {
                  "internalType": "string",
                  "name": "functionSignature",
                  "type": "string"
                }
              ],
              "internalType": "struct IExtension.ExtensionFunction[]",
              "name": "functions",
              "type": "tuple[]"
            }
          ],
          "indexed": false,
          "internalType": "struct IExtension.Extension",
          "name": "extension",
          "type": "tuple"
        }
      ],
      "name": "ExtensionReplaced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "platformFeeRecipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "flatFee",
          "type": "uint256"
        }
      ],
      "name": "FlatPlatformFeeUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "bytes4",
          "name": "functionSelector",
          "type": "bytes4"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "metadataURI",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct IExtension.ExtensionMetadata",
          "name": "extMetadata",
          "type": "tuple"
        }
      ],
      "name": "FunctionDisabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "bytes4",
          "name": "functionSelector",
          "type": "bytes4"
        },
        {
          "components": [
            {
              "internalType": "bytes4",
              "name": "functionSelector",
              "type": "bytes4"
            },
            {
              "internalType": "string",
              "name": "functionSignature",
              "type": "string"
            }
          ],
          "indexed": false,
          "internalType": "struct IExtension.ExtensionFunction",
          "name": "extFunction",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "metadataURI",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct IExtension.ExtensionMetadata",
          "name": "extMetadata",
          "type": "tuple"
        }
      ],
      "name": "FunctionEnabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "platformFeeRecipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "platformFeeBps",
          "type": "uint256"
        }
      ],
      "name": "PlatformFeeInfoUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "enum IPlatformFee.PlatformFeeType",
          "name": "feeType",
          "type": "uint8"
        }
      ],
      "name": "PlatformFeeTypeUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "RoyaltyEngineUpdated",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_extensionName",
          "type": "string"
        },
        {
          "internalType": "bytes4",
          "name": "_functionSelector",
          "type": "bytes4"
        }
      ],
      "name": "_disableFunctionInExtension",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "metadataURI",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "implementation",
                  "type": "address"
                }
              ],
              "internalType": "struct IExtension.ExtensionMetadata",
              "name": "metadata",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bytes4",
                  "name": "functionSelector",
                  "type": "bytes4"
                },
                {
                  "internalType": "string",
                  "name": "functionSignature",
                  "type": "string"
                }
              ],
              "internalType": "struct IExtension.ExtensionFunction[]",
              "name": "functions",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct IExtension.Extension",
          "name": "_extension",
          "type": "tuple"
        }
      ],
      "name": "addExtension",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractType",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractVersion",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "defaultExtensions",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_extensionName",
          "type": "string"
        },
        {
          "internalType": "bytes4",
          "name": "_functionSelector",
          "type": "bytes4"
        }
      ],
      "name": "disableFunctionInExtension",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_extensionName",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "bytes4",
              "name": "functionSelector",
              "type": "bytes4"
            },
            {
              "internalType": "string",
              "name": "functionSignature",
              "type": "string"
            }
          ],
          "internalType": "struct IExtension.ExtensionFunction",
          "name": "_function",
          "type": "tuple"
        }
      ],
      "name": "enableFunctionInExtension",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllExtensions",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "metadataURI",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "implementation",
                  "type": "address"
                }
              ],
              "internalType": "struct IExtension.ExtensionMetadata",
              "name": "metadata",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bytes4",
                  "name": "functionSelector",
                  "type": "bytes4"
                },
                {
                  "internalType": "string",
                  "name": "functionSignature",
                  "type": "string"
                }
              ],
              "internalType": "struct IExtension.ExtensionFunction[]",
              "name": "functions",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct IExtension.Extension[]",
          "name": "allExtensions",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "extensionName",
          "type": "string"
        }
      ],
      "name": "getExtension",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "metadataURI",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "implementation",
                  "type": "address"
                }
              ],
              "internalType": "struct IExtension.ExtensionMetadata",
              "name": "metadata",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bytes4",
                  "name": "functionSelector",
                  "type": "bytes4"
                },
                {
                  "internalType": "string",
                  "name": "functionSignature",
                  "type": "string"
                }
              ],
              "internalType": "struct IExtension.ExtensionFunction[]",
              "name": "functions",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct IExtension.Extension",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getFlatPlatformFeeInfo",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_functionSelector",
          "type": "bytes4"
        }
      ],
      "name": "getImplementationForFunction",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "functionSelector",
          "type": "bytes4"
        }
      ],
      "name": "getMetadataForFunction",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "metadataURI",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "internalType": "struct IExtension.ExtensionMetadata",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPlatformFeeInfo",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPlatformFeeType",
      "outputs": [
        {
          "internalType": "enum IPlatformFee.PlatformFeeType",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRoleMember",
      "outputs": [
        {
          "internalType": "address",
          "name": "member",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleMemberCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "count",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "getRoyalty",
      "outputs": [
        {
          "internalType": "address payable[]",
          "name": "recipients",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRoyaltyEngineAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "royaltyEngineAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRoleWithSwitch",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_defaultAdmin",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_contractURI",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "_trustedForwarders",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "_platformFeeRecipient",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "_platformFeeBps",
          "type": "uint16"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "forwarder",
          "type": "address"
        }
      ],
      "name": "isTrustedForwarder",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes[]",
          "name": "data",
          "type": "bytes[]"
        }
      ],
      "name": "multicall",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "results",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155BatchReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC721Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_extensionName",
          "type": "string"
        }
      ],
      "name": "removeExtension",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "metadataURI",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "implementation",
                  "type": "address"
                }
              ],
              "internalType": "struct IExtension.ExtensionMetadata",
              "name": "metadata",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bytes4",
                  "name": "functionSelector",
                  "type": "bytes4"
                },
                {
                  "internalType": "string",
                  "name": "functionSignature",
                  "type": "string"
                }
              ],
              "internalType": "struct IExtension.ExtensionFunction[]",
              "name": "functions",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct IExtension.Extension",
          "name": "_extension",
          "type": "tuple"
        }
      ],
      "name": "replaceExtension",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
        }
      ],
      "name": "setContractURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_platformFeeRecipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_flatFee",
          "type": "uint256"
        }
      ],
      "name": "setFlatPlatformFeeInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_platformFeeRecipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_platformFeeBps",
          "type": "uint256"
        }
      ],
      "name": "setPlatformFeeInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum IPlatformFee.PlatformFeeType",
          "name": "_feeType",
          "type": "uint8"
        }
      ],
      "name": "setPlatformFeeType",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_royaltyEngineAddress",
          "type": "address"
        }
      ],
      "name": "setRoyaltyEngine",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "BuyerApprovedForListing",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "listingCreator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        }
      ],
      "name": "CancelledListing",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "currency",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "pricePerToken",
          "type": "uint256"
        }
      ],
      "name": "CurrencyApprovedForListing",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "listingCreator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "assetContract",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "listingId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "pricePerToken",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "startTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "endTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "address",
              "name": "listingCreator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IDirectListings.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IDirectListings.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "reserved",
              "type": "bool"
            }
          ],
          "indexed": false,
          "internalType": "struct IDirectListings.Listing",
          "name": "listing",
          "type": "tuple"
        }
      ],
      "name": "NewListing",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "listingCreator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "assetContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "quantityBought",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalPricePaid",
          "type": "uint256"
        }
      ],
      "name": "NewSale",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "listingCreator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "assetContract",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "listingId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "pricePerToken",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "startTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "endTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "address",
              "name": "listingCreator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IDirectListings.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IDirectListings.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "reserved",
              "type": "bool"
            }
          ],
          "indexed": false,
          "internalType": "struct IDirectListings.Listing",
          "name": "listing",
          "type": "tuple"
        }
      ],
      "name": "UpdatedListing",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "_msgData",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_msgSender",
      "outputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_listingId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_buyer",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_toApprove",
          "type": "bool"
        }
      ],
      "name": "approveBuyerForListing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_listingId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_currency",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_pricePerTokenInCurrency",
          "type": "uint256"
        }
      ],
      "name": "approveCurrencyForListing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_listingId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_buyFor",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_currency",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_expectedTotalPrice",
          "type": "uint256"
        }
      ],
      "name": "buyFromListing",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_listingId",
          "type": "uint256"
        }
      ],
      "name": "cancelListing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "pricePerToken",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "startTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "endTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "bool",
              "name": "reserved",
              "type": "bool"
            }
          ],
          "internalType": "struct IDirectListings.ListingParameters",
          "name": "_params",
          "type": "tuple"
        }
      ],
      "name": "createListing",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_listingId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_currency",
          "type": "address"
        }
      ],
      "name": "currencyPriceForListing",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_startId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endId",
          "type": "uint256"
        }
      ],
      "name": "getAllListings",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "listingId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "pricePerToken",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "startTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "endTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "address",
              "name": "listingCreator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IDirectListings.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IDirectListings.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "reserved",
              "type": "bool"
            }
          ],
          "internalType": "struct IDirectListings.Listing[]",
          "name": "_allListings",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_startId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endId",
          "type": "uint256"
        }
      ],
      "name": "getAllValidListings",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "listingId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "pricePerToken",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "startTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "endTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "address",
              "name": "listingCreator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IDirectListings.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IDirectListings.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "reserved",
              "type": "bool"
            }
          ],
          "internalType": "struct IDirectListings.Listing[]",
          "name": "_validListings",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_listingId",
          "type": "uint256"
        }
      ],
      "name": "getListing",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "listingId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "pricePerToken",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "startTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "endTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "address",
              "name": "listingCreator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IDirectListings.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IDirectListings.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "reserved",
              "type": "bool"
            }
          ],
          "internalType": "struct IDirectListings.Listing",
          "name": "listing",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_listingId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_buyer",
          "type": "address"
        }
      ],
      "name": "isBuyerApprovedForListing",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_listingId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_currency",
          "type": "address"
        }
      ],
      "name": "isCurrencyApprovedForListing",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalListings",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_listingId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "pricePerToken",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "startTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "endTimestamp",
              "type": "uint128"
            },
            {
              "internalType": "bool",
              "name": "reserved",
              "type": "bool"
            }
          ],
          "internalType": "struct IDirectListings.ListingParameters",
          "name": "_params",
          "type": "tuple"
        }
      ],
      "name": "updateListing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "auctionId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "assetContract",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "closer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "auctionCreator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "winningBidder",
          "type": "address"
        }
      ],
      "name": "AuctionClosed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "auctionCreator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "auctionId",
          "type": "uint256"
        }
      ],
      "name": "CancelledAuction",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "auctionCreator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "auctionId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "assetContract",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "buyoutBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "timeBufferInSeconds",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "bidBufferBps",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "startTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "address",
              "name": "auctionCreator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IEnglishAuctions.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IEnglishAuctions.Status",
              "name": "status",
              "type": "uint8"
            }
          ],
          "indexed": false,
          "internalType": "struct IEnglishAuctions.Auction",
          "name": "auction",
          "type": "tuple"
        }
      ],
      "name": "NewAuction",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "auctionId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "bidder",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "assetContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bidAmount",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "buyoutBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "timeBufferInSeconds",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "bidBufferBps",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "startTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "address",
              "name": "auctionCreator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IEnglishAuctions.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IEnglishAuctions.Status",
              "name": "status",
              "type": "uint8"
            }
          ],
          "indexed": false,
          "internalType": "struct IEnglishAuctions.Auction",
          "name": "auction",
          "type": "tuple"
        }
      ],
      "name": "NewBid",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_auctionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bidAmount",
          "type": "uint256"
        }
      ],
      "name": "bidInAuction",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_auctionId",
          "type": "uint256"
        }
      ],
      "name": "cancelAuction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_auctionId",
          "type": "uint256"
        }
      ],
      "name": "collectAuctionPayout",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_auctionId",
          "type": "uint256"
        }
      ],
      "name": "collectAuctionTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "minimumBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "buyoutBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "timeBufferInSeconds",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "bidBufferBps",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "startTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endTimestamp",
              "type": "uint64"
            }
          ],
          "internalType": "struct IEnglishAuctions.AuctionParameters",
          "name": "_params",
          "type": "tuple"
        }
      ],
      "name": "createAuction",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "auctionId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_startId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endId",
          "type": "uint256"
        }
      ],
      "name": "getAllAuctions",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "buyoutBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "timeBufferInSeconds",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "bidBufferBps",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "startTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "address",
              "name": "auctionCreator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IEnglishAuctions.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IEnglishAuctions.Status",
              "name": "status",
              "type": "uint8"
            }
          ],
          "internalType": "struct IEnglishAuctions.Auction[]",
          "name": "_allAuctions",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_startId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endId",
          "type": "uint256"
        }
      ],
      "name": "getAllValidAuctions",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "buyoutBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "timeBufferInSeconds",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "bidBufferBps",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "startTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "address",
              "name": "auctionCreator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IEnglishAuctions.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IEnglishAuctions.Status",
              "name": "status",
              "type": "uint8"
            }
          ],
          "internalType": "struct IEnglishAuctions.Auction[]",
          "name": "_validAuctions",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_auctionId",
          "type": "uint256"
        }
      ],
      "name": "getAuction",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "buyoutBidAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "timeBufferInSeconds",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "bidBufferBps",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "startTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "address",
              "name": "auctionCreator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IEnglishAuctions.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IEnglishAuctions.Status",
              "name": "status",
              "type": "uint8"
            }
          ],
          "internalType": "struct IEnglishAuctions.Auction",
          "name": "_auction",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_auctionId",
          "type": "uint256"
        }
      ],
      "name": "getWinningBid",
      "outputs": [
        {
          "internalType": "address",
          "name": "_bidder",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_currency",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_bidAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_auctionId",
          "type": "uint256"
        }
      ],
      "name": "isAuctionExpired",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_auctionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bidAmount",
          "type": "uint256"
        }
      ],
      "name": "isNewWinningBid",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalAuctions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "offeror",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "offerId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "assetContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "seller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "quantityBought",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalPricePaid",
          "type": "uint256"
        }
      ],
      "name": "AcceptedOffer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "offeror",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "offerId",
          "type": "uint256"
        }
      ],
      "name": "CancelledOffer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "offeror",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "offerId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "assetContract",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "offerId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expirationTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "offeror",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IOffers.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IOffers.Status",
              "name": "status",
              "type": "uint8"
            }
          ],
          "indexed": false,
          "internalType": "struct IOffers.Offer",
          "name": "offer",
          "type": "tuple"
        }
      ],
      "name": "NewOffer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_offerId",
          "type": "uint256"
        }
      ],
      "name": "acceptOffer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_offerId",
          "type": "uint256"
        }
      ],
      "name": "cancelOffer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_startId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endId",
          "type": "uint256"
        }
      ],
      "name": "getAllOffers",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "offerId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expirationTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "offeror",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IOffers.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IOffers.Status",
              "name": "status",
              "type": "uint8"
            }
          ],
          "internalType": "struct IOffers.Offer[]",
          "name": "_allOffers",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_startId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endId",
          "type": "uint256"
        }
      ],
      "name": "getAllValidOffers",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "offerId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expirationTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "offeror",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IOffers.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IOffers.Status",
              "name": "status",
              "type": "uint8"
            }
          ],
          "internalType": "struct IOffers.Offer[]",
          "name": "_validOffers",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_offerId",
          "type": "uint256"
        }
      ],
      "name": "getOffer",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "offerId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expirationTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "offeror",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "enum IOffers.TokenType",
              "name": "tokenType",
              "type": "uint8"
            },
            {
              "internalType": "enum IOffers.Status",
              "name": "status",
              "type": "uint8"
            }
          ],
          "internalType": "struct IOffers.Offer",
          "name": "_offer",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "assetContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "totalPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expirationTimestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct IOffers.OfferParams",
          "name": "_params",
          "type": "tuple"
        }
      ],
      "name": "makeOffer",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_offerId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalOffers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]