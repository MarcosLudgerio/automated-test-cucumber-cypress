import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LOCATORS_GENERICS } from '../../support/locators';
import productData from '../../fixtures/productDataExample.json';
import productDataPage from '../../support/pages/ProductDataPage';

Given("user is on aba enter product data", () => {
    cy.title().should('contain', 'Enter Product Data');
});

When("enter in the form valid values in aba product", () => {
    productDataPage.insertProductData(productData);
});

When("click on button next aba select price", () => {
    productDataPage.clickOnButton(LOCATORS_GENERICS.nextButtonProduct);
});

Then("the page title should be update to select price", () => {
    cy.title().should('contain', 'Select Price Option');
});