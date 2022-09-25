import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS_GENERICS } from '../../support/locators';

Given("user is on aba select a price option", () => {
    cy.title().should('contain', 'Select Price Option');
});

When("select a option {string}", (option) => {
    cy.selectOption(option);
});

When("click on button next send quote", () => {
    cy.clickOnTheButton(LOCATORS_GENERICS.nextButtonSendQuote);
});

Then("the page title should be update to send quote", () => {
    cy.title().should('contain', 'Send Quote');
});