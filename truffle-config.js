require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rifle noise concert hunt pet slot genuine'; 
let testAccounts = [
"0x780dda9747eb1da4b70f8da139c80843b17845442b5b2af7e2f4362c73fa9bb7",
"0x2010c9a6fcbd5d4a56270421f4ed4fff6cac97058725c24d76aaa64a0c347e73",
"0x62a109b8381f43427649cf129040717836f90ed93394452082dbbd79a9213feb",
"0xca73fc940336f6ca0eb0d6745fec770e1aa2a9e50dfaad1c889eabf7f99a9231",
"0xfb214071a3d47e7f3d41cb39434e2bbf6089cc9d46713a74825f7fe24bf8e5d9",
"0xd4953170971c35ea7c14cac7a8575f11696d935a6e8f8d1b17bb526e95e9eeaa",
"0x3d23ee9781efc4205d616734600631d0517df9217cb90ab193f92dd76c20df64",
"0x7861b5e64752a80b30efa8023ad8ec01c281261db3590816ff630b2a21d61eca",
"0xff23ae6880ea489e6314aa59ed992a6f13d90a0be75b72e2f99a1ac2a5e30528",
"0x0c037c7cd531add2676c79cc6af8678509ecce6365d8ba0e93998b0b04a5da57"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
