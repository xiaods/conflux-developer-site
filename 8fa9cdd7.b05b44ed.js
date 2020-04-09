(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{164:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return i})),t.d(e,"default",(function(){return u}));var r=t(1),o=t(9),c=(t(0),t(189)),a={},s={id:"conflux-dex-sdk/crosschain/README",title:"README",description:"Conflux Crosschain SDK",source:"@site/docs/conflux-dex-sdk/crosschain/README.md",permalink:"/docs/conflux-dex-sdk/crosschain/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-dex-sdk/crosschain/README.md",lastUpdatedBy:"Zimeng Pan",lastUpdatedAt:1585302492},i=[{value:"Functions",id:"functions",children:[]},{value:"Const parameters for test",id:"const-parameters-for-test",children:[]},{value:"Examples",id:"examples",children:[]}],d={rightToc:i};function u(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"conflux-crosschain-sdk"},"Conflux Crosschain SDK"),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'// get data payloads for ethereum mint transaction\n// token: token type, (\'eth\', \'usdt\')\n// toAddress: conflux target address\n// amount: Number | String\n// return type: string\nfunction ethMint(token, toAddress, amount);\n\n// get op_return data for bitcoin mint transaction\n// toAddress: conflux target address\n// return type: string\nfunction btcMint(toAddress);\n\n// send a conflux transaction to burn specific token.\n// cfx: conflux node provider\n// sender: conflux wallet object\n// contractAddress: conflux crosschain contract address\n// token: token type, (\'eth\', \'usdt\')\n// toAddress: ethereum target address\n// amount: Number | String\n// return type: Promise\nasync function ethBurn(cfx, sender, contractAddress, token, toAddress, amount);\n\n// send a conflux transaction to burn cBTC.\n// cfx: conflux node provider\n// sender: conflux wallet object\n// contractAddress: conflux crosschain contract address\n// toAddress: ethereum target address\n// amount: Number | String\n// isTest: toAddress is bitcoin testnet3 address (=true) or mainnet address (=false)\n// return type: Promise\nasync function btcBurn(cfx, sender, contractAddress, toAddress, amount, isTest = false);\n\n// get user mint/burn operation list.\n// data: JSON object\n// {\n//    address: (String) user conflux address,\n//    types: (array of String) subset of {"eth_mint", "eth_burn", "erc20_mint", "erc20_burn", "btc_mint", "btc_burn"},\n//    status: (array of String) subset of {"doing", "finished"},\n// }\n// skip: the number of leading results to be ignored\n// cnt: the maximum number of results to return\n// node_url: url of running crosschain custodian node\nasync function getUserOperationList(data, skip, cnt, node_url);\n\n// get ethereum receive wallet address (used for both eth & usdt) of user.\n// user_address: conflux address of user\n// node_url: url of running crosschain custodian node\nasync function getUserReceiveWalletEth(user_address, node_url);\n\n// get bitcoin receive wallet address (used for both eth & usdt) of user.\n// user_address: conflux address of user\n// node_url: url of running crosschain custodian node\nasync function getUserReceiveWalletBtc(user_address, node_url);\n')),Object(c.b)("h2",{id:"const-parameters-for-test"},"Const parameters for test"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"crosschain.test_conf = {\n  conflux_factory_addr: // conflux cross chain contract address,\n  eth_factory_addr: // ethereum cross chain contract address on rinkeby testnet,\n  bitcoin_hot_wallet_addr: // bitcoin multisig-wallet address(testnet3),\n  usdt_addr: // usdt address on rinkeby testnet,\n  node_url: // custodian node url,\n  // conflux cToken address:\n  ceth_addr: ,\n  cbtc_addr: ,\n  cusdt_addr: ,\n};\n")),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("p",null,"Import crosschain module."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"const crosschain = require('crosschain');\n")),Object(c.b)("p",null,"Get mint payload for eth and send transaction using web3js."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"const crosschain = require('conflux-crosschain');\nconst ethpub = /* your ethereum address */;\nconst ethpri = /* your ethereum private key */;\nconst toAddress = /* target conflux address */;\nconst test_conf = crosschain.test_conf;\n\n// initialize node connection\nconst Web3 = require('web3');\nconst provider_url = /* web3js provider */\nconst w3 = new Web3(provider_url)\n\nasync function mintEth() {\n  let amount = 1000000000;\n  let nonce = await w3.eth.getTransactionCount(ethpub);\n  const txParams = {\n    from: ethpub,\n    to: test_conf.eth_factory_addr,\n    nonce: w3.utils.toHex(nonce),\n    gas: w3.utils.toHex(2000000),\n    gasPrice: \"2000000000\",\n    value: w3.utils.toHex(amount),\n    data: crosschain.ethMint('eth', toAddress, amount),\n  };\n  const {rawTransaction} = await w3.eth.accounts.signTransaction(txParams, ethpri);\n  const receipt = await w3.eth.sendSignedTransaction(rawTransaction);\n  return receipt;\n}\n")),Object(c.b)("p",null,"Mint of usdt is quite similar as eth, but before mint, user need to give eth_factory contract proper allowance:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'let amount = 100000;\n\nasync function approve(amount) {\n  let nonce = await w3.eth.getTransactionCount(ethpub);\n  const txParams = {\n    from: ethpub,\n    to: test_conf.usdt_addr,\n    nonce: w3.utils.toHex(nonce),\n    gas: w3.utils.toHex(2000000),\n    gasPrice: "2000000000",\n    data: crosschain.erc20Approve(test_conf.eth_factory_addr, amount),\n  };\n  const {rawTransaction} = await w3.eth.accounts.signTransaction(txParams, ethpri);\n  const receipt = await w3.eth.sendSignedTransaction(rawTransaction);\n  console.log(123);\n  if (!receipt.status)\n    process.exit(1);\n}\n\nasync function mint() {\n  let nonce = await w3.eth.getTransactionCount(ethpub);\n  const txParams = {\n    from: ethpub,\n    to: test_conf.eth_factory_addr,\n    nonce: w3.utils.toHex(nonce),\n    gas: w3.utils.toHex(2000000),\n    gasPrice: "2000000000",\n    data: crosschain.ethMint(\'usdt\', toAddress, amount),\n  };\n  const {rawTransaction} = await w3.eth.accounts.signTransaction(txParams, ethpri);\n  const receipt = await w3.eth.sendSignedTransaction(rawTransaction);\n  return receipt;\n}\n\napprove(0).then(() => {\n  return approve(amount);\n}).then(() => {\n  return mint(amount);\n});\nlet amount = 1000000000;\n')),Object(c.b)("p",null,"burn:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"const Conflux = require('js-conflux-sdk');\nconst cfx = new Conflux({\n  defaultGasPrice: 100,\n  defaultGas: 1000000,\n  //logger: console\n});\ncfx.setProvider('http://testnet-jsonrpc.conflux-chain.org:12537');\n\nconst senderAddr = /* your conflux address */;\nconst senderPrivateKey = /* your conflux private key */;\nconst sender = cfx.wallet.add(senderPrivateKey);\n\n// usdt\ncrosschain.ethBurn(cfx, sender, test_conf.conflux_factory_addr, 'cUSDT', /* your eth address */, 50000);\n// eth\ncrosschain.ethBurn(cfx, sender, test_conf.conflux_factory_addr, 'eth', /* your eth address */, 10000).then(console.log);\n// btc\ncrosschain.btcBurn(cfx, sender, test_conf.conflux_factory_addr, /* your bitcoin address */,  10000, true);\n")),Object(c.b)("p",null,"get user operation list:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"crosschain.getUserOperationList({\n  address: '0x65cf2b2c91e6eff901f10ab7363ae58cf1bfccc5',// for example\n  types: ['eth_mint', 'eth_burn', 'erc20_mint'],\n  status: ['finished', 'doing'],\n}, 0, 100, test_conf.node_url).then(console.log);\n\n/*\n{ txs:\n   [ { type: 'eth_mint',\n       nonce_or_txid:\n        '0xacf0ae864689f19789ea43cdc3daf0fa41fdeb5392dfe5291c6aab1a4b6c128b',\n       amount: '1000000000000000',\n       user_addr: '0x65CF2b2c91e6eff901F10ab7363ae58cf1bfCCc5',\n       to_addr: '0x65CF2b2c91e6eff901F10ab7363ae58cf1bfCCc5',\n       signer: [ 'fafa' ],\n       has_signed: true,\n       need: 2,\n       status: 'doing' },\n     { type: 'cUSDT_mint',\n       nonce_or_txid:\n        '0x6eb599af3ab6242260dada6f6b57dad91faa64518d7cf1ac4a975f7f718a8b29',\n       amount: '100000',\n       user_addr: '0x65cf2b2c91e6eff901f10ab7363ae58cf1bfccc5',\n       to_addr: '0x65cf2b2c91e6eff901f10ab7363ae58cf1bfccc5',\n       status: 'finished' },\n     { type: 'cUSDT_mint',\n       nonce_or_txid:\n        '0x490ae855b02c50d57eafd96351359e21bc689a1385443f33a764121f22b84b2b',\n       amount: '100000',\n       user_addr: '0x65cf2b2c91e6eff901f10ab7363ae58cf1bfccc5',\n       to_addr: '0x65cf2b2c91e6eff901f10ab7363ae58cf1bfccc5',\n       status: 'finished' } ],\n  total: 3 }\n*/\n")),Object(c.b)("p",null,"get and print receive wallet address of a user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"crosschain.getUserReceiveWalletEth(\n    '0x6B6C3A1eC5C689C3dd158b1a6E8Bc722373a2BfA', \n    test_conf.node_url\n).then(console.log);\n")))}u.isMDXComponent=!0},189:function(n,e,t){"use strict";t.d(e,"a",(function(){return f})),t.d(e,"b",(function(){return p}));var r=t(0),o=t.n(r);function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var d=o.a.createContext({}),u=function(n){var e=o.a.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):s({},e,{},n)),t},f=function(n){var e=u(n.components);return o.a.createElement(d.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},b=Object(r.forwardRef)((function(n,e){var t=n.components,r=n.mdxType,c=n.originalType,a=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),f=u(t),b=r,p=f["".concat(a,".").concat(b)]||f[b]||l[b]||c;return t?o.a.createElement(p,s({ref:e},d,{components:t})):o.a.createElement(p,s({ref:e},d))}));function p(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var c=t.length,a=new Array(c);a[0]=b;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var d=2;d<c;d++)a[d]=t[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);