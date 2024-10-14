describe('Teste da criação, registro e login de um novo usuário', () => {
  it('teste de criacao com sucesso', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('.btn-link').click()
      cy.get('#firstName').type('Victor')
      cy.get('#Text1').type('Victor')
      cy.get('#username').type('Victor')
      cy.get('#password').type('Victor')
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should('contain.text', 'Registration successful')
      
  })
  it('teste de criacao com falha sem senha', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Victor')
    cy.get('#Text1').type('Victor')
    cy.get('#username').type('Victor')
    cy.get('.btn-primary').should("be.disabled")
})
  it ('teste de login com sucesso', () => {
    let infos = create_user()
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', 'infos[0]')



})
function create_user(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundo = new Date().getSeconds().toString()
  let ID = hora + minuto + segundo + "ID"
  let Senha = hora + minuto + segundo + "Senha"
  let infos = [ID, Senha]
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type(ID)
    cy.get('#Text1').type(ID)
    cy.get('#username').type(ID)
    cy.get('#password').type(Senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  }
})
