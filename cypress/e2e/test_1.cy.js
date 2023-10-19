/// <reference types="Cypress" />

describe("Klickly", function () {

	it("Search product", function () {
		cy.visit("https://giftly.klickly-dev.com/marketplace")
        cy.viewport(1920, 1080)
        cy.get('input.sc-iIUQWv.jpNogh').type("iPhone Test")
        cy.get('button').contains('Search').click()
        cy.get('h3').contains('iPhone Test').click()

        cy.url().should('not.equal', 'https://giftly.klickly-dev.com/marketplace?q=iPhone%20Test')
        cy.get('.StyledCartButton-sc-11mgkmo-0').should('have.text', 'Add to cart')
        cy.get('.sc-uojGG').should('have.text', 'Buy now')
	})
});



