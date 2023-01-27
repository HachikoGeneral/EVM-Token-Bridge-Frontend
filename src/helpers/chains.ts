import { IChainData } from './types';

const supportedChains: IChainData[] = [
  {
    name: 'Chikochain',
    short_name: 'CHK',
    chain: 'ETH',
    network: 'mainnet',
    chain_id: 42,
    network_id: 42,
    rpc_url: 'http://70.34.216.42:9934',
    native_currency: {
      symbol: 'CHK',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '0x2e5E530dC2C6b2A8f214ee929dC4a302575881A9',
      balance: ''
    }
  },
  {
    name: 'Polygon',
    short_name: 'MATIC',
    chain: 'ETH',
    network: 'mainnet',
    chain_id: 137,
    network_id: 137,
    rpc_url: 'wss://polygon-mainnet.g.alchemy.com/v2/Sziok2o64OsCpH9HP339wQdHe-akTGFi',
    native_currency: {
      symbol: 'MATIC',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '0x9e1a245707799e747B4482E965B18BDd7cB4df57',
      balance: ''
    },
  {
    name: 'Ethereum Ropsten',
    short_name: 'rop',
    chain: 'ETH',
    network: 'ropsten',
    chain_id: 3,
    network_id: 3,
    rpc_url: 'https://ropsten.infura.io/v3/%API_KEY%',
    native_currency: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '',
      balance: ''
    },
    explorer: 'https://ropsten.etherscan.io/'
  },
  {
    name: 'Ethereum Rinkeby',
    short_name: 'rin',
    chain: 'ETH',
    network: 'rinkeby',
    chain_id: 4,
    network_id: 4,
    rpc_url: 'https://rinkeby.infura.io/v3/%API_KEY%',
    native_currency: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '',
      balance: ''
    },
    explorer: 'https://rinkeby.etherscan.io/'
  },
  {
    name: 'Ethereum Görli',
    short_name: 'gor',
    chain: 'ETH',
    network: 'goerli',
    chain_id: 5,
    network_id: 5,
    rpc_url: 'https://goerli.infura.io/v3/%API_KEY%',
    native_currency: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '',
      balance: ''
    }
  },
  {
    name: 'Binance Smart Chain',
    short_name: 'bsc',
    chain: 'smartchain',
    network: 'mainnet',
    chain_id: 56,
    network_id: 56,
    rpc_url: 'https://bsc-dataseed1.defibit.io/',
    native_currency: {
      symbol: 'BNB',
      name: 'BNB',
      decimals: '18',
      contractAddress: '',
      balance: ''
    }
  }
];

export default supportedChains;
