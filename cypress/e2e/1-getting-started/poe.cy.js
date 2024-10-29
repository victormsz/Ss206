context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://poe.ninja') // Visitando a URL completa
    })
    
    it('Deve carregar a página inicial com sucesso', () => {
        cy.get('header').should('be.visible') // Verifica se o cabeçalho está visível
        cy.contains('Path of Exile').should('exist') // Confirma a presença de algum texto-chave
    })
    
    it('Deve buscar um item específico', () => {
        cy.get('#downshift-0-input').type('Exalted Orb') // Digita o item na barra de busca
        cy.get('#downshift-0-input').click() // Clica no botão de busca
        cy.contains('Exalted Orb').should('exist') // Verifica se o item está nos resultados
    })
    
    it('Deve exibir erro em uma rota inválida', () => {
        cy.visit('https://poe.ninja/invalid-route') // Visita uma rota que não existe
        cy.contains('Page Not Found').should('be.visible') // Verifica se uma mensagem de erro é exibida
    })
})
