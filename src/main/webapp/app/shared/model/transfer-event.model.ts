export interface ITransferEvent {
  id?: number;
  fromAddress?: string;
  toAddress?: string;
  value?: number;
  transactionId?: number;
}

export const defaultValue: Readonly<ITransferEvent> = {};
