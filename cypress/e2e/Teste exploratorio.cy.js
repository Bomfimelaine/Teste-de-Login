describe('Login', () => {
  it.only('Login com sucesso', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('lanealmeida_bomfim@hotmail.com')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
    cy.get('#swal2-title').should('be.visible')
    cy.get('#swal2-title').should('have.text', 'Login realizado')
  })

  it.only('E-mail invalido', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('lanealmeida_bomfim,hotmail.com')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

  it.only('Senha invalida', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('lanealmeida_bomfim@hotmail.com')
    cy.get('#password').type('123')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

  it.only('E-mail vazio', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

  it.only('Senha vazia', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('lanealmeida_bomfim@hotmail.com')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

  it.only('E-mail e Senha vazios', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })
})