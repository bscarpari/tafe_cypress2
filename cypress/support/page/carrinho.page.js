/* Atributos */
const { SELECTOR } = require("./elements/selector")
const { produtos, btnAdicionarAoCarrinho, mensagemDeSucesso, mensagemDeQuantia, btnContinuar } = SELECTOR.produto
const { carrinhoDeCompras, quantidade } = SELECTOR.carrinho

/* Rotinas */
Cypress.Commands.add("adicionarAoCarrinho", () => {
  cy.get(produtos).first().click()
  cy.get(btnAdicionarAoCarrinho).click()
  cy.get(mensagemDeSucesso).should("contain.text", "Product successfully added to your shopping cart")
  cy.get(mensagemDeQuantia).should("contain.text", "There is 1 item in your cart.")
  cy.get(btnContinuar).click()
  cy.get(carrinhoDeCompras).click()
  cy.get(quantidade).should("contain.text", "1")
})
