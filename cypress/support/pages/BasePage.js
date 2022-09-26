class BasePage {
    acessHomepage() {
        cy.acessHomePage();
    }
    clickOnButton(locator) {
        cy.clickOnTheButton(locator);
    }
}

export default BasePage;