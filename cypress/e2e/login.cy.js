/// <reference types="cypress" />

describe('Automação de Login no Site Automation Test Shop', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('TESTE 00 - Login com email e senha válidos', () => {
    const email = 'testeqa@gmail.com';
    const senha = '123456';

    cy.get('.login').click();

    cy.get('#email').type(email);
    cy.get('#passwd').type(senha);

    cy.get('#SubmitLogin').click();

    cy.contains('My account').should('be.visible');
  });

  it('TESTE 01 - Login com email inválido', () => {
    const emailInvalido = 'emailinvalido@example.com';
    const senha = '123456';

    cy.get('.login').click();

    cy.get('#email').type(emailInvalido);
    cy.get('#passwd').type(senha);

    cy.get('#SubmitLogin').click();

    cy.contains('Authentication failed').should('be.visible');
  });

  it('TESTE 02 - Login com senha inválida', () => {
    const email = 'testeqa@gmail.com';
    const senhaInvalida = 'senhainvalida';

    cy.get('.login').click();

    cy.get('#email').type(email);
    cy.get('#passwd').type(senhaInvalida);

    cy.get('#SubmitLogin').click();

    cy.contains('Authentication failed').should('be.visible');
  });

  it('TESTE 03 - Login com email e senha em branco', () => {

    cy.get('.login').click();

    cy.get('#email').clear();
    cy.get('#passwd').clear();

    cy.get('#SubmitLogin').click();

    cy.contains('An email address required').should('be.visible');
  });
});
