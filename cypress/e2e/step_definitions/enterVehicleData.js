import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS_GENERICS } from '../../support/locators';
import vehicleDataExample from '../../fixtures/vehicleDataExample.json';
import vehicleDataPage from '../../support/pages/VehicleDataPage';


Given("user is on the aba enter vehicle data", () => {
  vehicleDataPage.acessHomepage();
});

When("enter in the form valid values in aba vehicle", () => {
  vehicleDataPage.insertVehicleDatas(vehicleDataExample);
});

Then("fields vehicle should be filled", () => {
  vehicleDataPage.verifyVehicleData(vehicleDataExample);
})

When("click on button next insurant", () => {
  vehicleDataPage.clickOnButton(LOCATORS_GENERICS.nextButtonProduct);
});

Then("the page title should be update to insurant", () => {
  cy.title().should('contain', 'Enter Insurant Data')
});