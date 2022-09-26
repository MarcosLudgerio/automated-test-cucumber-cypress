import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS_GENERICS } from '../../support/locators';
import priceOptionPage from '../../support/pages/PriceOptionPage';

Given("user is on aba select a price option", () => {
    cy.title().should('contain', 'Select Price Option');
});

When("select a option {string}", (option) => {
    priceOptionPage.selectOption(option);
});

Then("the option should be selected", () => {
    priceOptionPage.verifyOptionSelected();
});

When("click on button next send quote", () => {
    priceOptionPage.clickOnButton(LOCATORS_GENERICS.nextButtonProduct);
});

Then("the page title should be update to send quote", () => {
    cy.title().should('contain', 'Send Quote');
});