describe('Testes de Compras - Demoblaze', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html');
  });

  function adicionar_carrinho() {
    // Configura captura do alerta antes do loop
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Product added');
    });

    // Loop para adicionar os produtos
    for (let i = 1; i <= 9; i++) {
      cy.get(`:nth-child(${i}) > .card > .card-block > .card-title > .hrefch`).click(); // Seleciona o produto
      cy.get('.col-sm-12 > .btn').click();
      cy.get('.active > .nav-link').click(); // Volta para a página inicial

    }
  }

  it('Deve permitir adicionar produtos ao carrinho', () => {
    adicionar_carrinho(); // Adiciona os produtos
    cy.get('#cartur').click(); // Navega para o carrinho
    cy.get('tbody .success').should('have.length.greaterThan', 0); // Verifica se há itens no carrinho
  });

  it("Falha ao tentar comprar por informaçoes faltantes", () => {
    cy.get('#cartur').click(); // Navega para o carrinho
    cy.get('.col-lg-1 > .btn').click(); // Clica no botão de compra
    //cy.get('#name').type('Victor');
    cy.get('#country').type('Brasil');
    //cy.get('#city').type('São Paulo');
    cy.get('#card').type('1234567890');
    //cy.get('#month').type('12');
    cy.get('#year').type('2023');
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); // Finaliza a compra

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Please fill out Name and Creditcard.');
    }); 
  });

  it("deve comprar tudo", () => {
    cy.get('#cartur').click(); // Navega para o carrinho
    cy.get('.col-lg-1 > .btn').click(); // Clica no botão de compra
    cy.get('#name').type('Victor');
    cy.get('#country').type('Brasil');
    cy.get('#city').type('São Paulo');
    cy.get('#card').type('1234567890');
    cy.get('#month').type('12');
    cy.get('#year').type('2023');
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); // Finaliza a compra

    cy.get('.sweet-alert > h2').should('contain', 'Thank you for your purchase!'); // Verifica se a compra foi realizada com sucesso
  });

});