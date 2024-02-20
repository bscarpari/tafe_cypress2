describe('Teste de Navegação entre Páginas', () => {
    it('Deve navegar entre diferentes páginas do site', () => {

        cy.visit('/');

        cy.title().should('eq', 'My Store');

        cy.contains('Women').click();

        cy.url().should('include', 'id_category=3');

        cy.go('back');

        cy.url().should('eq', 'https://automationtest.shop/index.php');

        cy.contains('Contact us').click();

        cy.url().should('include', 'controller=contact');

        cy.go('back');

        cy.url().should('eq', 'https://automationtest.shop/index.php');
    });
    it('Cenário Infeliz - Tentativa de acessar categoria inexistente', () => {
        cy.visit('/');

        cy.title().should('eq', 'My Store');

        // Verifica se a categoria inexistente não está presente na página
        cy.contains('Nonexistent Category').should('not.exist');
    });


});
