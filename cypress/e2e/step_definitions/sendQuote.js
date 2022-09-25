import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS_GENERICS } from '../../support/locators';
import sendQuote from '../../fixtures/sendQuoteExample.json';

Given("user is on aba send quote", () => {
    cy.title().should('contain', 'Send Quote');
});

When("filling in the submission form with valid data", () => {
    cy.enterFormSendQuote(sendQuote);
});

When("click on button next send email", async () => {
    await cy.clickOnTheButton(LOCATORS_GENERICS.buttonSendEmail);
});

Then("the page message 'send sucessful' shold be visible", () => {
    cy.get(LOCATORS_GENERICS.sendingEmailSuccess).as("successMessage")
    // cy.get(LOCATORS_GENERICS.sendingEmailSuccess).should('contain', 'Sending e-mail success!');
    cy.wait('@successMessage').should('contain', 'Sending e-mail success!');
});