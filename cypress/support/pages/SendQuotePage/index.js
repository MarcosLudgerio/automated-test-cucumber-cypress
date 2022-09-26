import { LOCATORS_SEND } from './elements';
import BasePage from '../BasePage';
class SendQuotePage extends BasePage {

    enterFormSendQuote(sendQuote) {
        cy.insertValue(LOCATORS_SEND.email, sendQuote.email);
        cy.insertValue(LOCATORS_SEND.phone, sendQuote.phone);
        cy.insertValue(LOCATORS_SEND.username, sendQuote.username);
        cy.insertValue(LOCATORS_SEND.password, sendQuote.password);
        cy.insertValue(LOCATORS_SEND.confirmpassword, sendQuote.confirmpassword);
        cy.insertValue(LOCATORS_SEND.comments, sendQuote.comments);
    }

    verifySendData(sendQuote) {
        cy.verifyValue(LOCATORS_SEND.email, sendQuote.email);
        cy.verifyValue(LOCATORS_SEND.phone, sendQuote.phone);
        cy.verifyValue(LOCATORS_SEND.username, sendQuote.username);
        cy.verifyValue(LOCATORS_SEND.password, sendQuote.password);
        cy.verifyValue(LOCATORS_SEND.confirmpassword, sendQuote.confirmpassword);
        cy.verifyValue(LOCATORS_SEND.comments, sendQuote.comments);
    }
}

export default new SendQuotePage();