import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS_GENERICS } from '../../support/locators';
import dataInsurant from '../../fixtures/insurantExample.json';

Given("user is on aba enter insurant data", () => {
    cy.acessHomePage();
    cy.clickOnTheButton(LOCATORS_GENERICS.enterVehicleData.nextButton);
});

When('enter in the form valid values', () => {
    cy.insertValuesAbaVehicleData(dataInsurant);
});

When("click on next button", () => {
    cy.clickOnTheButton(LOCATORS_GENERICS.enterVehicleData.nextButton);
});

Then("the page title should be update", () => {
    cy.title().should('contain', 'Enter Insurant Data')
});