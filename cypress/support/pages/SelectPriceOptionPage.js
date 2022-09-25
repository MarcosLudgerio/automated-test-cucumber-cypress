Cypress.Commands.add('selectOption', (option) => {
    cy.get('[type="radio"]').check(option, { force: true });
});
