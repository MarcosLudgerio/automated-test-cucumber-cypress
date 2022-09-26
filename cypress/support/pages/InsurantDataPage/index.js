import { LOCATORS_INSURANT_DATA } from './elements';
import BasePage from '../BasePage';
class InsurantDataPage extends BasePage {

    enterInsurantData(insurantData) {
        cy.insertValue(LOCATORS_INSURANT_DATA.first_name, insurantData.first_name);
        cy.insertValue(LOCATORS_INSURANT_DATA.last_name, insurantData.last_name);
        cy.insertValue(LOCATORS_INSURANT_DATA.birthdate, insurantData.birthdate);
        cy.get(LOCATORS_INSURANT_DATA.gender_male).check(insurantData.gender_male, { force: true });
        cy.insertValue(LOCATORS_INSURANT_DATA.address, insurantData.address);
        cy.selectValue(LOCATORS_INSURANT_DATA.country, insurantData.country);
        cy.insertValue(LOCATORS_INSURANT_DATA.zip_code, insurantData.zip_code);
        cy.insertValue(LOCATORS_INSURANT_DATA.city, insurantData.city);
        cy.selectValue(LOCATORS_INSURANT_DATA.occupation, insurantData.occupation);
        cy.get(LOCATORS_INSURANT_DATA.hobbies).check(insurantData.hobby_skydiving, { force: true });
        cy.insertValue(LOCATORS_INSURANT_DATA.wbsite, insurantData.wbsite);
        cy.get(LOCATORS_INSURANT_DATA.picture).selectFile(insurantData.picture, { force: true });
    }

    verifyInsuranceData(insurantData) {
        cy.verifyValue(LOCATORS_INSURANT_DATA.first_name, insurantData.first_name);
        cy.verifyValue(LOCATORS_INSURANT_DATA.last_name, insurantData.last_name);
        cy.verifyValue(LOCATORS_INSURANT_DATA.birthdate, insurantData.birthdate);
        cy.verifyValue(LOCATORS_INSURANT_DATA.address, insurantData.address);
        cy.verifyValue(LOCATORS_INSURANT_DATA.country, insurantData.country);
        cy.verifyValue(LOCATORS_INSURANT_DATA.zip_code, insurantData.zip_code);
        cy.verifyValue(LOCATORS_INSURANT_DATA.city, insurantData.city);
        cy.verifyValue(LOCATORS_INSURANT_DATA.occupation, insurantData.occupation);
        cy.verifyValue(LOCATORS_INSURANT_DATA.wbsite, insurantData.wbsite);
    }
}

export default new InsurantDataPage();