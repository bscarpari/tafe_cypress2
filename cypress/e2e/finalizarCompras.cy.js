/// <reference types="cypress" />

describe('Teste de Finalização de Compra', () => {
    beforeEach(() => {
        // Visitar a página inicial
        cy.visit('/');
    });

    // Login
    it('TESTE 00 - Deve fazer login, adicionar um produto ao carrinho e finalizar a compra', () => {
        // Fazer login
        cy.contains('Sign in').click();
        cy.get('#email').type('testeqa@gmail.com');
        cy.get('#passwd').type('123456');
        cy.get('#SubmitLogin').click();

        cy.contains('Welcome to your account').should('exist');

        cy.get('.search_query').clear().type('Blouse');
        cy.get('.button-search').click();
        cy.get('.search', { timeout: 10000 }).should('exist');
        cy.contains('.product-name', 'Blouse').should('exist').click();
        cy.url().should('include', 'product');
        cy.get('#add_to_cart button', { timeout: 10000 }).should('be.visible').click();
        cy.contains('.title', 'Product successfully added to your shopping cart').should('exist');

        cy.get('#layer_cart', { timeout: 10000 }).should('be.visible');

        cy.get('#layer_cart a[title="Proceed to checkout"]', { timeout: 10000 }).should('be.visible').click({ force: true });

        cy.get('a.button.btn.btn-default.standard-checkout.button-medium', { timeout: 10000 }).should('be.visible').click({ force: true });

        cy.get('button[name="processAddress"].button.btn.btn-default.button-medium', { timeout: 10000 }).should('be.visible').click({ force: true });

        cy.get('#cgv').check({ force: true });

        cy.get('button[name="processCarrier"].button.btn.btn-default.standard-checkout.button-medium', { timeout: 10000 }).should('be.visible').click({ force: true });

        cy.contains('a.bankwire', 'Pay by bank wire').click();

        cy.get('button.button.btn.btn-default.button-medium[type="submit"]').click();

        cy.contains('Your order on My Store is complete.').should('exist');

    });
    it('TESTE 01 - Deve mostrar mensagem de nenhum resultado ao pesquisar por um produto inexistente', () => {

        cy.contains('Sign in').click();
        cy.get('#email').type('testeqa@gmail.com');
        cy.get('#passwd').type('123456');
        cy.get('#SubmitLogin').click();

        cy.contains('Welcome to your account').should('exist');

        cy.get('.search_query').clear().type('Produto Inexistente');

        cy.get('.button-search').click();

        cy.get('.alert.alert-warning').should('exist').and('contain.text', 'No results were found');
    });

    it.only('TESTE 02 - Deve mostrar mensagem de nenhum resultado ao pesquisar com a caixa de pesquisa vazia', () => {

        cy.contains('Sign in').click();
        cy.get('#email').type('testeqa@gmail.com');
        cy.get('#passwd').type('123456');
        cy.get('#SubmitLogin').click();

        cy.contains('Welcome to your account').should('exist');

        cy.get('.search_query').clear();

        cy.get('.button-search').click();

        cy.get('.alert.alert-warning').should('exist').and('contain', 'Please enter a search keyword');
    });

});
