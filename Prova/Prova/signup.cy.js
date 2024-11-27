describe('Testes de Cadastro e Login - Demoblaze', () => {
  const username = 'victor123457';
  const password = 'senhateste1273';

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html');
  });

  it('Não deve permitir cadastro de usuário já existente', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username').should('be.visible').type('newuser');
    cy.get('#sign-password').type('newpassword');
    cy.get('#signInModal .btn-primary').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('User already exists');
    });
  });

  it('Deve permitir cadastro de novo usuário', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username').should('be.visible').type(username);
    cy.get('#sign-password').type(password);
    cy.get('#signInModal .btn-primary').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Sign up successful.');
    });
  });

  it('Deve permitir login com credenciais válidas', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);
    cy.get('#logInModal .btn-primary').click();

    cy.get('#nameofuser').should('contain', `Welcome ${username}`);
  });
});
