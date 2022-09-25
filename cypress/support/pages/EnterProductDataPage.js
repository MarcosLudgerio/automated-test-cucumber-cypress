const LOCATORS_PRODUCTS = {
    start_date: "#startdate",
    insurance_sum: "#insurancesum",
    merit_rating: "#meritrating",
    damage_insurance: "#damageinsurance",
    courtesy_car: "#courtesycar"
}

Cypress.Commands.add('insertValuesAbaProductData', (productData) => {
    cy.insertValue(LOCATORS_PRODUCTS.start_date, productData.start_date);
    cy.selectValue(LOCATORS_PRODUCTS.insurance_sum, productData.insurance_sum);
    cy.selectValue(LOCATORS_PRODUCTS.merit_rating, productData.merit_rating);
    cy.selectValue(LOCATORS_PRODUCTS.damage_insurance, productData.damage_insurance);
    cy.get('[type="checkbox"]').check(productData.optional_products, { force: true });
    cy.selectValue(LOCATORS_PRODUCTS.courtesy_car, productData.courtesy_car);
});