import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS_GENERICS } from '../../support/locators';
import sendQuote from '../../fixtures/sendQuoteExample.json';

Given("user is on aba send quote", () => {
    cy.title().should('contain', 'Send Quote');
});

When("filling in the submission form with valid data", () => {
    cy.enterFormSendQuote(sendQuote);
});

When("click on button next send email", () => {
    cy.clickOnTheButton(LOCATORS_GENERICS.buttonSendEmail);
});

Then("the page message {string} shold be visible", (message) => {
    cy.get(LOCATORS_GENERICS.sendingEmailSuccess, { timeout: 20000 }).then($toast => {
        expect($toast.text()).to.contain(message);
    });
});