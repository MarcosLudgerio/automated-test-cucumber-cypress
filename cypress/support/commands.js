// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("clickOnTheButton", (locator) => {
    cy.get(locator).click();
});

Cypress.Commands.add('acessHomePage', () => {
    cy.visit("app.php");
});

Cypress.Commands.add('selectValue', (field, value) => {
    cy.get(field).select(value);
});

Cypress.Commands.add('insertValue', (field, value) => {
    cy.get(field).type(value);
});

Cypress.Commands.add('verifyValue', (field, value) => {
    cy.get(field).should('have.value', value);
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})