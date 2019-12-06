/* tslint:disable no-unused-expression */
import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TransactionComponentsPage from './transaction.page-object';
import { TransactionDeleteDialog } from './transaction.page-object';
import TransactionUpdatePage from './transaction-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('Transaction e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let transactionUpdatePage: TransactionUpdatePage;
  let transactionComponentsPage: TransactionComponentsPage;
  let transactionDeleteDialog: TransactionDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();

    await signInPage.username.sendKeys('admin');
    await signInPage.password.sendKeys('admin');
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();

    await waitUntilDisplayed(navBarPage.entityMenu);
  });

  it('should load Transactions', async () => {
    await navBarPage.getEntityPage('transaction');
    transactionComponentsPage = new TransactionComponentsPage();
    expect(await transactionComponentsPage.getTitle().getText()).to.match(/Transactions/);
  });

  it('should load create Transaction page', async () => {
    await transactionComponentsPage.clickOnCreateButton();
    transactionUpdatePage = new TransactionUpdatePage();
    expect(await transactionUpdatePage.getPageTitle().getText()).to.match(/Create or edit a Transaction/);
  });

  it('should create and save Transactions', async () => {
    const nbButtonsBeforeCreate = await transactionComponentsPage.countDeleteButtons();

    await transactionUpdatePage.setHashInput('hash');
    expect(await transactionUpdatePage.getHashInput()).to.match(/hash/);
    await transactionUpdatePage.networkSelectLastOption();
    await transactionUpdatePage.setBlockNumberInput('5');
    expect(await transactionUpdatePage.getBlockNumberInput()).to.eq('5');
    await transactionUpdatePage.setFromAddressInput('fromAddress');
    expect(await transactionUpdatePage.getFromAddressInput()).to.match(/fromAddress/);
    await transactionUpdatePage.setToAddressInput('toAddress');
    expect(await transactionUpdatePage.getToAddressInput()).to.match(/toAddress/);
    await transactionUpdatePage.setValueInput('5');
    expect(await transactionUpdatePage.getValueInput()).to.eq('5');
    await transactionUpdatePage.setGasUsedInput('5');
    expect(await transactionUpdatePage.getGasUsedInput()).to.eq('5');
    await transactionUpdatePage.setGasPriceInput('5');
    expect(await transactionUpdatePage.getGasPriceInput()).to.eq('5');
    await transactionUpdatePage.transferEventSelectLastOption();
    await waitUntilDisplayed(transactionUpdatePage.getSaveButton());
    await transactionUpdatePage.save();
    await waitUntilHidden(transactionUpdatePage.getSaveButton());
    expect(await transactionUpdatePage.getSaveButton().isPresent()).to.be.false;

    await transactionComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await transactionComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last Transaction', async () => {
    await transactionComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await transactionComponentsPage.countDeleteButtons();
    await transactionComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    transactionDeleteDialog = new TransactionDeleteDialog();
    expect(await transactionDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/triipChainnetApp.transaction.delete.question/);
    await transactionDeleteDialog.clickOnConfirmButton();

    await transactionComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await transactionComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
