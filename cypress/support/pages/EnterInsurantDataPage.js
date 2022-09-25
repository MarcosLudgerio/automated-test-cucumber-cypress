const LOCATORS_INSURANT_DATA = {
    first_name: "#firstname",
    last_name: "#lastname",
    birthdate: "#birthdate",
    gender_male: "#gendermale",
    gender_female: "#genderfemale",
    address: "#streetaddress",
    zip_code: "#zipcode",
    country: "#country",
    city: "#city",
    occupation: "#occupation",
    hobby_speding: "#speeding",
    hobby_bungee_jumping: "#bungeejumping",
    hobby_cliff_diving: "#cliffdiving",
    hobby_skydiving: "#skydiving",
    hobby_other: "#other",
    wbsite: "#website",
    picture: "#picturecontainer",
    nextButton: "nextenterproductdata"
};

Cypress.Commands.add('insertInsurantData', (dataInsurant) => {
    cy.insertValue(LOCATORS_INSURANT_DATA.first_name, dataInsurant.first_name);
    cy.insertValue(LOCATORS_INSURANT_DATA.last_name, dataInsurant.last_name);
    cy.insertValue(LOCATORS_INSURANT_DATA.birthdate, dataInsurant.birthdate);
    cy.get('[type="radio"]').check(dataInsurant.gender_male, { force: true });
    cy.insertValue(LOCATORS_INSURANT_DATA.address, dataInsurant.address);
    cy.selectValue(LOCATORS_INSURANT_DATA.country, dataInsurant.country);
    cy.insertValue(LOCATORS_INSURANT_DATA.zip_code, dataInsurant.zip_code);
    cy.insertValue(LOCATORS_INSURANT_DATA.city, dataInsurant.city);
    cy.selectValue(LOCATORS_INSURANT_DATA.occupation, dataInsurant.occupation);
    cy.get('[type="checkbox"]').check(dataInsurant.hobby_skydiving, { force: true });
    cy.insertValue(LOCATORS_INSURANT_DATA.wbsite, dataInsurant.wbsite);
    cy.addPictureInsurant(dataInsurant.picture);
});


Cypress.Commands.add("addPictureInsurant", (fileName) => {
    cy.get(LOCATORS_INSURANT_DATA.picture).selectFile(fileName, { force: true });

});
