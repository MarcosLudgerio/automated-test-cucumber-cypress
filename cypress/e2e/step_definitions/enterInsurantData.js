import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS_GENERICS } from '../../support/locators';
import dataInsurant from '../../fixtures/insurantExample.json';

Given("user is on aba enter insurant data", () => {
    cy.acessHomePage();
    cy.clickOnTheButton(LOCATORS_GENERICS.nextButtonInsurant);
});

When('enter in the form valid values in aba insurant', () => {
    cy.insertInsurantData(dataInsurant);
});

When("click on button next aba product", () => {
    cy.clickOnTheButton(LOCATORS_GENERICS.nextButtonProduct);
});

Then("the page title should be update to product", () => {
    cy.title().should('contain', 'Enter Product Data')
});