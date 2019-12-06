export const enum Network {
  MAINNET = 'MAINNET',
  ROPSTEN = 'ROPSTEN',
  RINKEBY = 'RINKEBY',
  TOMO_TESTNET = 'TOMO_TESTNET'
}

export interface IJob {
  id?: number;
  address?: string;
  callback?: string;
  network?: Network;
  contractAddress?: string;
  blockNumber?: number;
  errorDescription?: string;
}

export const defaultValue: Readonly<IJob> = {};
