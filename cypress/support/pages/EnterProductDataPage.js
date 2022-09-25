const LOCATORS_PRODUCTS = {
    start_date: "#startdate",
    insurance_sum: "#insurancesum",
    merit_rating: "#meritrating",
    damage_insurance: "#damageinsurance",
    optional_Euro_Protection: "#EuroProtection",
    optional_Lega_lDefenseInsurance: "#LegalDefenseInsurance",
    courtesy_car: "#courtesycar"
}

Cypress.Commands.add('insertValuesAbaProductData', (dataCar) => {
    cy.insertValue(LOCATORS_PRODUCTS.start_date, dataCar.make);
    cy.selectValue(LOCATORS_PRODUCTS.insurance_sum, dataCar.model);
    cy.selectValue(LOCATORS_PRODUCTS.merit_rating, dataCar.numberSeats);
    cy.selectValue(LOCATORS_PRODUCTS.optional_Euro_Protection, dataCar.fuel);
    cy.selectValue(LOCATORS_PRODUCTS.optional_Lega_lDefenseInsurance, dataCar.fuel);
    cy.selectValue(LOCATORS_PRODUCTS.courtesy_car, dataCar.fuel);
});