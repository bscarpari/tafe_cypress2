/// <reference types="cypress" />

describe("Cadastro", () => {
  beforeEach(() => {
    cy.visit("/index.php?controller=authentication&back=my-account")
  })

  it("Test 01 - Verificar se é possível realizar um cadastro de usuário válido com tudo selecionado", () => {
    cy.fazerCadastro(true)
  })

  it("Test 02 - Verificar se é possível realizar um cadastro de usuário com email já existente", () => {
    cy.fazerCadastroInvalido()
  })
})
