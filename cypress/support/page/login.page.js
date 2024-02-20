/* Atributos */
const { SELECTOR } = require("./elements/selector")
const { linkIrParaLogin, email, senha, btnFazerLogin } = SELECTOR.login

/* Rotinas */
Cypress.Commands.add("fazerLogin", (email, senha) => {
  // TODO: debugar o motivo de usando selector não funcionar
  cy.get(".login").click()
  cy.get("#email").type(email)
  cy.get("#passwd").type(senha)
  cy.get("#SubmitLogin").click()
})

Cypress.Commands.add("fazerLoginVazio", () => {
  cy.get(linkIrParaLogin).click()
  cy.get(email).clear()
  cy.get(senha).clear()
  cy.get(btnFazerLogin).click()
})

Cypress.Commands.add("fazerLogout", () => {})
