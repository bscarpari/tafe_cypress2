/// <reference types="cypress" />

describe('Automação de Login no Site Automation Test Shop', () => {
  beforeEach(() => {
    // Visitar a página inicial antes de cada teste
    cy.visit('/');
  });

  it('TESTE 00 - Login com email e senha válidos', () => {
    const email = 'testeqa@gmail.com';
    const senha = '123456';

    // Clicar no link para acessar a página de login
    cy.get('.login').click();

    // Preencher o formulário de login com o email e senha fornecidos
    cy.get('#email').type(email);
    cy.get('#passwd').type(senha);

    // Clicar no botão de login
    cy.get('#SubmitLogin').click();

    // Verificar se o login foi bem-sucedido redirecionando para a página de conta
    cy.contains('My account').should('be.visible');
  });
  it('TESTE 01 - Login com email inválido', () => {
    const emailInvalido = 'emailinvalido@example.com';
    const senha = '123456';

    // Clicar no link para acessar a página de login
    cy.get('.login').click();

    // Preencher o formulário de login com um email inválido
    cy.get('#email').type(emailInvalido);
    cy.get('#passwd').type(senha);

    // Clicar no botão de login
    cy.get('#SubmitLogin').click();

    // Verificar se a mensagem de erro é exibida
    cy.contains('Authentication failed').should('be.visible');
  });

  it('TESTE 02 - Login com senha inválida', () => {
    const email = 'testeqa@gmail.com';
    const senhaInvalida = 'senhainvalida';

    // Clicar no link para acessar a página de login
    cy.get('.login').click();

    // Preencher o formulário de login com uma senha inválida
    cy.get('#email').type(email);
    cy.get('#passwd').type(senhaInvalida);

    // Clicar no botão de login
    cy.get('#SubmitLogin').click();

    // Verificar se a mensagem de erro é exibida
    cy.contains('Authentication failed').should('be.visible');
  });

  it('TESTE 03 - Login com email e senha em branco', () => {
    // Clicar no link para acessar a página de login
    cy.get('.login').click();

    // Preencher o formulário de login com email e senha em branco
    cy.get('#email').clear();
    cy.get('#passwd').clear();

    // Clicar no botão de login
    cy.get('#SubmitLogin').click();

    // Verificar se a mensagem de erro é exibida
    cy.contains('An email address required').should('be.visible');
  });
});
