import { element, by, ElementFinder } from 'protractor';

export default class TransferEventUpdatePage {
  pageTitle: ElementFinder = element(by.id('triipChainnetApp.transferEvent.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  fromAddressInput: ElementFinder = element(by.css('input#transfer-event-fromAddress'));
  toAddressInput: ElementFinder = element(by.css('input#transfer-event-toAddress'));
  valueInput: ElementFinder = element(by.css('input#transfer-event-value'));
  transactionSelect: ElementFinder = element(by.css('select#transfer-event-transaction'));

  getPageTitle() {
    return this.pageTitle;
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

  async transactionSelectLastOption() {
    await this.transactionSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async transactionSelectOption(option) {
    await this.transactionSelect.sendKeys(option);
  }

  getTransactionSelect() {
    return this.transactionSelect;
  }

  async getTransactionSelectedOption() {
    return this.transactionSelect.element(by.css('option:checked')).getText();
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
