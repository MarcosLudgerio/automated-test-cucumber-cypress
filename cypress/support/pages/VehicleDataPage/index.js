import { LOCATORS_VEHICLE_DATA } from './elements';
import BasePage from '../BasePage';
class VehicleData extends BasePage {

    insertVehicleDatas(dataCar) {
        cy.selectValue(LOCATORS_VEHICLE_DATA.make, dataCar.make);
        cy.selectValue(LOCATORS_VEHICLE_DATA.model, dataCar.model);
        cy.insertValue(LOCATORS_VEHICLE_DATA.cylinder, dataCar.cylinder);
        cy.insertValue(LOCATORS_VEHICLE_DATA.engine, dataCar.engine);
        cy.insertValue(LOCATORS_VEHICLE_DATA.dateManufacture, dataCar.dateManufacture);
        cy.selectValue(LOCATORS_VEHICLE_DATA.numberSeats, dataCar.numberSeats);
        cy.get(LOCATORS_VEHICLE_DATA.handDrive).check(dataCar.handDrive, { force: true });
        cy.selectValue(LOCATORS_VEHICLE_DATA.numberSeatsMotocycle, dataCar.numberSeatsMotocycle);
        cy.selectValue(LOCATORS_VEHICLE_DATA.fuel, dataCar.fuel);
        cy.insertValue(LOCATORS_VEHICLE_DATA.payload, dataCar.payload);
        cy.insertValue(LOCATORS_VEHICLE_DATA.totalWeight, dataCar.totalWeight);
        cy.insertValue(LOCATORS_VEHICLE_DATA.listPrice, dataCar.listPrice);
        cy.insertValue(LOCATORS_VEHICLE_DATA.plateNumber, dataCar.plateNumber);
        cy.insertValue(LOCATORS_VEHICLE_DATA.annualMileage, dataCar.annualMileage);
    }

    verifyVehicleData(dataCar) {
        cy.verifyValue(LOCATORS_VEHICLE_DATA.make, dataCar.make);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.model, dataCar.model);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.cylinder, dataCar.cylinder);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.engine, dataCar.engine);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.dateManufacture, dataCar.dateManufacture);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.numberSeats, dataCar.numberSeats);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.numberSeatsMotocycle, dataCar.numberSeatsMotocycle);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.fuel, dataCar.fuel);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.payload, dataCar.payload);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.totalWeight, dataCar.totalWeight);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.listPrice, dataCar.listPrice);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.plateNumber, dataCar.plateNumber);
        cy.verifyValue(LOCATORS_VEHICLE_DATA.annualMileage, dataCar.annualMileage);
    }
}

export default new VehicleData();