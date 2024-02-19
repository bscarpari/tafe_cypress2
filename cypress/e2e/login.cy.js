/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/index.php?controller=authentication")
  })

  it("Test 01 - Verifique se é possível fazer login com um usuário existente fornecendo o email e senha corretos", () => {})

  it("Test 02 - Verifique se a página redireciona corretamente após o login bem-sucedido", () => {})
})
