/// <reference types="cypress" />

describe("Carrinho de compras", () => {
  beforeEach(() => {
    cy.visit("index.php")
  })

  it("Test 01 - Verifique se é possível adicionar um produto ao carrinho a partir da página do produto", () => {
    cy.adicionarAoCarrinho()
  })

  it("Test 02 - Verifique se o produto adicionado é exibido corretamente no carrinho de compras", () => {
    cy.adicionarAoCarrinho()
    cy.get('[title="View my shopping cart"]').trigger("mouseover")
    cy.get(".cart_block_product_name").should("contain.text", "Faded Shor..")
    cy.get(".cart-info > .price").should("contain.text", "$16.51")
  })

  it.only("Test 03 - Verifique se o preço total é atualizado de acordo com a mudança na quantidade", () => {
    cy.adicionarAoCarrinho()
    cy.get('[title="View my shopping cart"]').trigger("mouseover")
    cy.get(".cart-info > .price").should("contain.text", "$16.51")
    cy.get(".cart_block_list").trigger("mouseout")
    cy.get(".exclusive > span").click()
    cy.get(".cart-info > .price").should("contain.text", "$33.02")
  })

  it("Test 04 - Verifique se é possível remover um produto do carrinho", () => {
    cy.adicionarAoCarrinho()
    cy.get('[title="View my shopping cart"]').trigger("mouseover")
    cy.get(".ajax_cart_block_remove_link").click()
    cy.get(".ajax_cart_no_product").should("contain.text", "empty")
  })
})
