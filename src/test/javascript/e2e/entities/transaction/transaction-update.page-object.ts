import { element, by, ElementFinder } from 'protractor';

export default class TransactionUpdatePage {
  pageTitle: ElementFinder = element(by.id('triipChainnetApp.transaction.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  hashInput: ElementFinder = element(by.css('input#transaction-hash'));
  networkSelect: ElementFinder = element(by.css('select#transaction-network'));
  blockNumberInput: ElementFinder = element(by.css('input#transaction-blockNumber'));
  fromAddressInput: ElementFinder = element(by.css('input#transaction-fromAddress'));
  toAddressInput: ElementFinder = element(by.css('input#transaction-toAddress'));
  valueInput: ElementFinder = element(by.css('input#transaction-value'));
  gasUsedInput: ElementFinder = element(by.css('input#transaction-gasUsed'));
  gasPriceInput: ElementFinder = element(by.css('input#transaction-gasPrice'));
  transferEventSelect: ElementFinder = element(by.css('select#transaction-transferEvent'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setHashInput(hash) {
    await this.hashInput.sendKeys(hash);
  }

  async getHashInput() {
    return this.hashInput.getAttribute('value');
  }

  async setNetworkSelect(network) {
    await this.networkSelect.sendKeys(network);
  }

  async getNetworkSelect() {
    return this.networkSelect.element(by.css('option:checked')).getText();
  }

  async networkSelectLastOption() {
    await this.networkSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setBlockNumberInput(blockNumber) {
    await this.blockNumberInput.sendKeys(blockNumber);
  }

  async getBlockNumberInput() {
    return this.blockNumberInput.getAttribute('value');
  }

  async setFromAddressInput(fromAddress) {
    await this.fromAddressInput.sendKeys(fromAddress);
  }

  async getFromAddressInput() {
    return this.fromAddressInput.getAttribute('value');
  }

  async setToAddressInput(toAddress) {
    await this.toAddressInput.sendKeys(toAddress);
  }

  async getToAddressInput() {
    return this.toAddressInput.getAttribute('value');
  }

  async setValueInput(value) {
    await this.valueInput.sendKeys(value);
  }

  async getValueInput() {
    return this.valueInput.getAttribute('value');
  }

  async setGasUsedInput(gasUsed) {
    await this.gasUsedInput.sendKeys(gasUsed);
  }

  async getGasUsedInput() {
    return this.gasUsedInput.getAttribute('value');
  }

  async setGasPriceInput(gasPrice) {
    await this.gasPriceInput.sendKeys(gasPrice);
  }

  async getGasPriceInput() {
    return this.gasPriceInput.getAttribute('value');
  }

  async transferEventSelectLastOption() {
    await this.transferEventSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async transferEventSelectOption(option) {
    await this.transferEventSelect.sendKeys(option);
  }

  getTransferEventSelect() {
    return this.transferEventSelect;
  }

  async getTransferEventSelectedOption() {
    return this.transferEventSelect.element(by.css('option:checked')).getText();
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
