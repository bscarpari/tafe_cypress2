/// <reference types="cypress" />

describe("Botão de Pesquisa", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Deve permitir a pesquisa de um produto válido", () => {})

  it("Test 02 - Deve exibir mensagem de erro para pesquisa com termo inválido", () => {})

  it("Test 03 - Deve exibir mensagem de erro para pesquisa com caracteres especiais", () => {})
})
