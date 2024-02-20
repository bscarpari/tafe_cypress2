/// <reference types="cypress" />

describe("Recuperar senha", () => {
  beforeEach(() => {
    cy.visit("index.php?controller=password")
  })

  it("Test 01 - Verifique se é possível recuperar a senha fornecendo o email registrado", () => {
    cy.recuperarSenha()
  })

  it("Test 02 - Verifique se uma mensagem de sucesso é exibida após a solicitação de recuperação de senha", () => {
    cy.recuperarSenha(true)
  })
})
