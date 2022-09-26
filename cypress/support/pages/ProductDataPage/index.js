import { LOCATORS_PRODUCTS } from './elements';
import BasePage from '../BasePage';
class ProductDataPage extends BasePage {

    insertProductData(productData) {
        cy.insertValue(LOCATORS_PRODUCTS.start_date, productData.start_date);
        cy.selectValue(LOCATORS_PRODUCTS.insurance_sum, productData.insurance_sum);
        cy.selectValue(LOCATORS_PRODUCTS.merit_rating, productData.merit_rating);
        cy.selectValue(LOCATORS_PRODUCTS.damage_insurance, productData.damage_insurance);
        cy.get(LOCATORS_PRODUCTS.optional_product).check(productData.optional_products, { force: true });
        cy.selectValue(LOCATORS_PRODUCTS.courtesy_car, productData.courtesy_car);
    }

    verifyProductData(productData) {
        cy.verifyValue(LOCATORS_PRODUCTS.start_date, productData.start_date);
        cy.verifyValue(LOCATORS_PRODUCTS.insurance_sum, productData.insurance_sum);
        cy.verifyValue(LOCATORS_PRODUCTS.merit_rating, productData.merit_rating);
        cy.verifyValue(LOCATORS_PRODUCTS.damage_insurance, productData.damage_insurance);
        cy.verifyValue(LOCATORS_PRODUCTS.courtesy_car, productData.courtesy_car);
    }
}

export default new ProductDataPage();