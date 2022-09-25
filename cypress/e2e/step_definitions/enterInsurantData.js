import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS_GENERICS } from '../../support/locators';
import insurantData from '../../fixtures/insurantDataExample.json';

Given("user is on aba enter insurant data", () => {
    cy.title().should('contain', 'Enter Insurant Data');
});

When('enter in the form valid values in aba insurant', () => {
    cy.insertInsurantData(insurantData);
});

When("click on button next aba product", () => {
    cy.clickOnTheButton(LOCATORS_GENERICS.nextButtonProduct);
});

Then("the page title should be update to product", () => {
    cy.title().should('contain', 'Enter Product Data');
});