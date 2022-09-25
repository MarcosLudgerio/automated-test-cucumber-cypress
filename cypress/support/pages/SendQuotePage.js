const LOCATORS_SEND = {
    email: "#email",
    phone: "#phone",
    username: "#username",
    password: "#password",
    confirmpassword: "#confirmpassword",
    comments: "#Comments"
}

Cypress.Commands.add('enterFormSendQuote', (sendQuote) => {
    cy.insertValue(LOCATORS_SEND.email, sendQuote.email);
    cy.insertValue(LOCATORS_SEND.phone, sendQuote.phone);
    cy.insertValue(LOCATORS_SEND.username, sendQuote.username);
    cy.insertValue(LOCATORS_SEND.password, sendQuote.password);
    cy.insertValue(LOCATORS_SEND.confirmpassword, sendQuote.confirmpassword);
    cy.insertValue(LOCATORS_SEND.comments, sendQuote.comments);
});