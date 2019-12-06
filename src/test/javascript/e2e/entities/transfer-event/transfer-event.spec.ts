/* tslint:disable no-unused-expression */
import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TransferEventComponentsPage from './transfer-event.page-object';
import { TransferEventDeleteDialog } from './transfer-event.page-object';
import TransferEventUpdatePage from './transfer-event-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TransferEvent e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let transferEventUpdatePage: TransferEventUpdatePage;
  let transferEventComponentsPage: TransferEventComponentsPage;
  let transferEventDeleteDialog: TransferEventDeleteDialog;

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

  it('should load TransferEvents', async () => {
    await navBarPage.getEntityPage('transfer-event');
    transferEventComponentsPage = new TransferEventComponentsPage();
    expect(await transferEventComponentsPage.getTitle().getText()).to.match(/Transfer Events/);
  });

  it('should load create TransferEvent page', async () => {
    await transferEventComponentsPage.clickOnCreateButton();
    transferEventUpdatePage = new TransferEventUpdatePage();
    expect(await transferEventUpdatePage.getPageTitle().getText()).to.match(/Create or edit a TransferEvent/);
  });

  it('should create and save TransferEvents', async () => {
    const nbButtonsBeforeCreate = await transferEventComponentsPage.countDeleteButtons();

    await transferEventUpdatePage.setFromAddressInput('fromAddress');
    expect(await transferEventUpdatePage.getFromAddressInput()).to.match(/fromAddress/);
    await transferEventUpdatePage.setToAddressInput('toAddress');
    expect(await transferEventUpdatePage.getToAddressInput()).to.match(/toAddress/);
    await transferEventUpdatePage.setValueInput('5');
    expect(await transferEventUpdatePage.getValueInput()).to.eq('5');
    await transferEventUpdatePage.transactionSelectLastOption();
    await waitUntilDisplayed(transferEventUpdatePage.getSaveButton());
    await transferEventUpdatePage.save();
    await waitUntilHidden(transferEventUpdatePage.getSaveButton());
    expect(await transferEventUpdatePage.getSaveButton().isPresent()).to.be.false;

    await transferEventComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await transferEventComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last TransferEvent', async () => {
    await transferEventComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await transferEventComponentsPage.countDeleteButtons();
    await transferEventComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    transferEventDeleteDialog = new TransferEventDeleteDialog();
    expect(await transferEventDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/triipChainnetApp.transferEvent.delete.question/);
    await transferEventDeleteDialog.clickOnConfirmButton();

    await transferEventComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await transferEventComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
