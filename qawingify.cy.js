describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://sachin1804.github.io/qawingify/')
    })

    it('should display the login form', () => {
        cy.get('form').should('be.visible')
    })

    it('should allow successful login', () => {
        cy.get('#username').type('anyusername')
        cy.get('#password').type('anypassword')
        cy.get('#log-in').click()
        cy.url().should('include', '/home.html')
    })

    it('should display an error message for invalid login when both fields are empty', () => {
        // cy.get('#username').type()
        // cy.get('#password').type()
        cy.get('#log-in').click()
        cy.get('.alert-warning').contains("Both Username and Password must be present")
    })

    it('should display an error message for invalid login when password is empty', () => {
        cy.get('#username').type('username')
        // cy.get('#password').type()
        cy.get('#log-in').click()
        cy.get('.alert-warning').contains("Password must be present")
    })

    it('should display an error message for invalid login when username is empty', () => {
        // cy.get('#username').type('')
        cy.get('#password').type('password')
        cy.get('#log-in').click()
        cy.get('.alert-warning').contains("Username must be present")
    })


})

describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('https://sachin1804.github.io/qawingify/')
        cy.get('#username').type('anyusername')
        cy.get('#password').type('anypassword')
        cy.get('#log-in').click()
        cy.url().should('include', '/home.html')
    })

    it('should sort the values in the transaction table', () => {
        cy.get('#amount').click()
        cy.get('table tbody tr').then(rows => {
            const amounts = Array.from(rows).map(row =>
                parseFloat(row.querySelector('td:nth-child(5)').textContent.replace(/[^0-9.-]+/g, ''))
            )
            const sortedAmounts = [...amounts].sort((a, b) => a - b)
            expect(amounts).to.deep.equal(sortedAmounts)
        })
    })
})
