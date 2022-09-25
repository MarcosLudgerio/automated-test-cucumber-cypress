import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS_GENERICS } from '../../support/locators';
import vehicleDataExample from '../../fixtures/vehicleDataExample.json';

Given("user is on the aba enter vehicle data", () => {
  cy.acessHomePage();
});

When('enter in the form valid values in aba vehicle', () => {
  cy.insertValuesAbaVehicleData(vehicleDataExample);
});

When("click on button next insurant", () => {
  cy.clickOnTheButton(LOCATORS_GENERICS.nextButtonInsurant);
});

Then("the page title should be update to insurant", () => {
  cy.title().should('contain', 'Enter Insurant Data')
});