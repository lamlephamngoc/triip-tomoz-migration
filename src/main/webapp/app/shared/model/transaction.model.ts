export const enum Network {
  MAINNET = 'MAINNET',
  ROPSTEN = 'ROPSTEN',
  RINKEBY = 'RINKEBY',
  TOMO_TESTNET = 'TOMO_TESTNET'
}

export interface ITransaction {
  id?: number;
  hash?: string;
  network?: Network;
  blockNumber?: number;
  fromAddress?: string;
  toAddress?: string;
  value?: number;
  gasUsed?: number;
  gasPrice?: number;
  transferEventId?: number;
}

export const defaultValue: Readonly<ITransaction> = {};
