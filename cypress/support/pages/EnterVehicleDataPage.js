const LOCATORS = {
    make: "#make",
    model: "#model",
    cylinder: "#cylindercapacity",
    engine: "#engineperformance",
    dateManufacture: "#dateofmanufacture",
    numberSeats: "#numberofseats",
    handDrive: "#righthanddriveyes",
    numberSeatsMotocycle: "#numberofseatsmotorcycle",
    fuel: "#fuel",
    payload: "#payload",
    totalWeight: "#totalweight",
    listPrice: "#listprice",
    plateNumber: "#licenseplatenumber",
    annualMileage: "#annualmileage",
    nextButton: "#nextenterinsurantdata"
}

Cypress.Commands.add('selectValue', (field, value) => {
    cy.get(field).select(value);
});

Cypress.Commands.add('insertValue', (field, value) => {
    cy.get(field).type(value);
});

Cypress.Commands.add('verifyValue', (field, value) => {
    cy.get(field).should('have.value', value);
});

Cypress.Commands.add('insertValuesAbaVehicle', (dataCar) => {
    cy.selectValue(LOCATORS.make, dataCar.make);
    cy.selectValue(LOCATORS.model, dataCar.model);
    cy.insertValue(LOCATORS.cylinder, dataCar.cylinder);
    cy.insertValue(LOCATORS.engine, dataCar.engine);
    cy.insertValue(LOCATORS.dateManufacture, dataCar.dateManufacture);
    cy.selectValue(LOCATORS.numberSeats, dataCar.numberSeats);
    cy.get('[type="radio"]').check(dataCar.handDrive, { force: true });
    cy.selectValue(LOCATORS.numberSeatsMotocycle, dataCar.numberSeatsMotocycle);
    cy.selectValue(LOCATORS.fuel, dataCar.fuel);
    cy.insertValue(LOCATORS.payload, dataCar.payload);
    cy.insertValue(LOCATORS.totalWeight, dataCar.totalWeight);
    cy.insertValue(LOCATORS.listPrice, dataCar.listPrice);
    cy.insertValue(LOCATORS.plateNumber, dataCar.plateNumber);
    cy.insertValue(LOCATORS.annualMileage, dataCar.annualMileage);
});



