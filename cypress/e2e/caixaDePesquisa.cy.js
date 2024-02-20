/// <reference types="cypress" />


describe('Testes de Pesquisa', () => {
  beforeEach(() => {
    // Visitar a página onde está a caixa de pesquisa
    cy.visit('/pagina-com-caixa-de-pesquisa');
  });

  // Cenários Positivos
  it('TESTE 00 - Deve retornar resultados ao pesquisar por um produto existente e adicioná-lo ao carrinho', () => {

    cy.get('.search_query').clear().type('Blouse');

    cy.get('.button-search').click();

    cy.get('.search', { timeout: 10000 }).should('exist');

    cy.contains('.product-name', 'Blouse').should('exist').click();

    cy.url().should('include', 'product');

    cy.get('#add_to_cart button').should('be.visible').click();

    cy.contains('.title', 'Product successfully added to your shopping cart').should('exist');
  });

  // Cenários Negativos
  it('TESTE 01 - Deve mostrar mensagem de nenhum resultado ao pesquisar por um produto inexistente', () => {

    cy.get('.search_query').clear().type('Produto Inexistente');

    cy.get('.button-search').click();

    cy.get('.alert.alert-warning').should('exist').and('contain.text', 'No results were found');
  });

  it('TESTE 02 - Deve mostrar mensagem de nenhum resultado ao pesquisar com a caixa de pesquisa vazia', () => {

    cy.get('.search_query').clear();

    cy.get('.button-search').click();

    cy.get('.alert.alert-warning').should('exist').and('contain', 'Please enter a search keyword');
  });
});
