import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS } from '../../support/locators'
import dataCar from '../../fixtures/carExample.json'

Given("user is on the aba enter vehicle data", () => {
  cy.acessHomePage();
});

When('enter in the form valid values', () => {
  cy.insertValuesAbaVehicle(dataCar);
});

When("click on next button", () => {
  cy.clickOnTheButton(LOCATORS.enterVehicleData.nextButton);
});

Then("the page title should be update", () => {
  cy.title().should('contain', 'Enter Insurant Data')
});