import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS_GENERICS } from '../../support/locators';
import productData from '../../fixtures/productDataExample.json';

Given("user is on aba enter product data", () => {
    // cy.title().should('contain', 'Enter Product Data');
    cy.acessHomePage();
    cy.clickOnTheButton(LOCATORS_GENERICS.nextButtonInsurant);
    cy.clickOnTheButton(LOCATORS_GENERICS.nextButtonProduct);
});

When("enter in the form valid values in aba product", () => {
    cy.insertValuesAbaProductData(productData);

});

When("click on button next aba select price", () => {
    cy.clickOnTheButton(LOCATORS_GENERICS.nextButtonPrice);
});

Then("the page title should be update to select price", () => {
    cy.title().should('contain', 'Select Price Option');
});