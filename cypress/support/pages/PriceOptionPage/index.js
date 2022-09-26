import { LOCATORS_PRICE_OPTION } from './elements';
import BasePage from '../BasePage';
class PriceOptionPage extends BasePage {
    selectOption(option) {
        cy.get(LOCATORS_PRICE_OPTION.option_price).check(option, { force: true });
    }
}

export default new PriceOptionPage();