describe("Wingify Assignment", () => {

    it("visit the page and Login with any value of username and password", () => {
        cy.visit('https://sachin1804.github.io/qawingify/');
        cy.get('#username').type('root');
        cy.get('#password').type('root');
        cy.get('#log-in').click();

    })


    it("visit the home page and check the amount is sorted", () => {
        cy.visit("https://sachin1804.github.io/qawingify/home.html");
        cy.get("#amount")
            .click()
            .trigger("sortTable(4)");
    })
})