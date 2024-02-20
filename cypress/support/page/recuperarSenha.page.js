/* Atributos */
const { faker } = require("@faker-js/faker")
const { SELECTOR } = require("./elements/selector")
const { email, btnRecuperarSenha, msgmDeErro, alert } = SELECTOR.recuperarSenha

/* Rotinas */
Cypress.Commands.add("recuperarSenha", invalido => {
  cy.get(email).type(invalido ? faker.internet.email() : "onurb@gmail.com")
  cy.get(btnRecuperarSenha).click()
  invalido && cy.get(msgmDeErro).should("contain.text", "There is no account registered for this email address.")
  !invalido &&
    cy.get(alert).should("contain.text", "A confirmation email has been sent to your address: onurb@gmail.com")
})
