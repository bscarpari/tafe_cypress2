/// <reference types="cypress" />

// TODO: finalizar em conjunto com checkout (testes completos)
describe("Histórico de pedidos", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Verifique se é possível visualizar o histórico de pedidos de um usuário logado", () => {
    cy.fazerLogin("onurb@gmail.com", "123456")
    cy.visualizarHistorico()
  })

  it("Test 02 - Verifique se os detalhes do pedido são exibidos corretamente", () => {
    cy.fazerLogin("onurb@gmail.com", "123456")
    cy.visualizarHistorico(true)
  })
})
