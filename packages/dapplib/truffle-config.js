require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool response screen pulp hidden kiwi equal genre'; 
let testAccounts = [
"0x09a1e61365823bd487df9eae1a36a413f2d4c9782e4b8742d8bddbe6d13f8aeb",
"0xd76dbb673f68ed68498568e15d2d435df282d757b775dc7551370368c3f6a69f",
"0xa98e8ffa1773291e9eb867424feb35bbd7414ac698edec842914924391ee032e",
"0x09d137f943b185a19d6298e64ba7011efd0ec67613b07fe9d200e8f98d4cf735",
"0xae3163d19c524e4463daf8bc30db347867067a960bedc7bdf3151cfffdf4bf85",
"0x435aa2646c7b61baf4f3e75b0c41c422df5c2bcf208ff752ec9fb86726dc5f3d",
"0x54a59825c8664f5783f8cf32550728448f51d5afce95df106bf85390bf9f0662",
"0xc98eb68ee4a6b64e60a81105e4d29cca7d7509d5e6921fa047a3616b64d978b7",
"0xfca0a203609ebf388a03882c8aa294c368cb9ccbc9443b09d6f4e8b866b7e4e4",
"0x16b8935722cb975b389519ff2306b2d09d6b06ec377829dec0dcd9333c7df512"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

