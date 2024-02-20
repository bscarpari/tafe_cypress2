/* Atributos */
const { SELECTOR } = require("./elements/selector")
const {} = SELECTOR.historicoPedidos

/* Rotinas */
Cypress.Commands.add("visualizarHistorico", invalido => {
  cy.get(".icon-list-ol").click()
  cy.get(".first_item > .history_link").click()
  invalido ? cy.contains("You have not placed any orders.").should("be.visible") : ""
})
