import { element, by, ElementFinder } from 'protractor';

export default class JobUpdatePage {
  pageTitle: ElementFinder = element(by.id('triipChainnetApp.job.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  addressInput: ElementFinder = element(by.css('input#job-address'));
  callbackInput: ElementFinder = element(by.css('input#job-callback'));
  networkSelect: ElementFinder = element(by.css('select#job-network'));
  contractAddressInput: ElementFinder = element(by.css('input#job-contractAddress'));
  blockNumberInput: ElementFinder = element(by.css('input#job-blockNumber'));
  errorDescriptionInput: ElementFinder = element(by.css('input#job-errorDescription'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setAddressInput(address) {
    await this.addressInput.sendKeys(address);
  }

  async getAddressInput() {
    return this.addressInput.getAttribute('value');
  }

  async setCallbackInput(callback) {
    await this.callbackInput.sendKeys(callback);
  }

  async getCallbackInput() {
    return this.callbackInput.getAttribute('value');
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
  async setContractAddressInput(contractAddress) {
    await this.contractAddressInput.sendKeys(contractAddress);
  }

  async getContractAddressInput() {
    return this.contractAddressInput.getAttribute('value');
  }

  async setBlockNumberInput(blockNumber) {
    await this.blockNumberInput.sendKeys(blockNumber);
  }

  async getBlockNumberInput() {
    return this.blockNumberInput.getAttribute('value');
  }

  async setErrorDescriptionInput(errorDescription) {
    await this.errorDescriptionInput.sendKeys(errorDescription);
  }

  async getErrorDescriptionInput() {
    return this.errorDescriptionInput.getAttribute('value');
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
