const LOCATORS_VEHICLE_DATA = {
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

Cypress.Commands.add('insertValuesAbaVehicleData', (dataCar) => {
    cy.selectValue(LOCATORS_VEHICLE_DATA.make, dataCar.make);
    cy.selectValue(LOCATORS_VEHICLE_DATA.model, dataCar.model);
    cy.insertValue(LOCATORS_VEHICLE_DATA.cylinder, dataCar.cylinder);
    cy.insertValue(LOCATORS_VEHICLE_DATA.engine, dataCar.engine);
    cy.insertValue(LOCATORS_VEHICLE_DATA.dateManufacture, dataCar.dateManufacture);
    cy.selectValue(LOCATORS_VEHICLE_DATA.numberSeats, dataCar.numberSeats);
    cy.get('[type="radio"]').check(dataCar.handDrive, { force: true });
    cy.selectValue(LOCATORS_VEHICLE_DATA.numberSeatsMotocycle, dataCar.numberSeatsMotocycle);
    cy.selectValue(LOCATORS_VEHICLE_DATA.fuel, dataCar.fuel);
    cy.insertValue(LOCATORS_VEHICLE_DATA.payload, dataCar.payload);
    cy.insertValue(LOCATORS_VEHICLE_DATA.totalWeight, dataCar.totalWeight);
    cy.insertValue(LOCATORS_VEHICLE_DATA.listPrice, dataCar.listPrice);
    cy.insertValue(LOCATORS_VEHICLE_DATA.plateNumber, dataCar.plateNumber);
    cy.insertValue(LOCATORS_VEHICLE_DATA.annualMileage, dataCar.annualMileage);
});



