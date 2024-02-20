/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 00 - Login com email e senha válidos", () => {
    const email = "testeqa@gmail.com"
    const senha = "123456"

    cy.fazerLogin(email, senha)

    cy.contains("My account").should("be.visible")
  })
  it("Test 01 - Login com email inválido", () => {
    const emailInvalido = "emailinvalido@example.com"
    const senha = "123456"

    cy.fazerLogin(emailInvalido, senha)

    cy.contains("Authentication failed").should("be.visible")
  })

  it("Test 02 - Login com senha inválida", () => {
    const email = "testeqa@gmail.com"
    const senhaInvalida = "senhainvalida"

    cy.fazerLogin(email, senhaInvalida)

    cy.contains("Authentication failed").should("be.visible")
  })

  it("Test 03 - Login com email e senha em branco", () => {
    cy.fazerLoginVazio()
    cy.contains("An email address required").should("be.visible")
  })
})
