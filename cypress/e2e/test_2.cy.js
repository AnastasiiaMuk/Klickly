/// <reference types="Cypress" />

describe("Klickly", function () {

	it("Search text 'test'", function () {
        testSearch("test")
    })

	it("Search text 'iPhone'", function () {
        testSearch("iPhone")
    })

    function testSearch(textSearch) {
		const search = textSearch.toLowerCase()
        cy.visit("https://giftly.klickly-dev.com/marketplace")
        cy.get('input.sc-iIUQWv.jpNogh').type(textSearch)
        cy.get('button').contains('Search').click()
        cy.get('h3').then((els) => {
            const texts = Array.from(els, el => el.innerText)
            let starts = false
            let ends = false
            for (let i = 0; i < texts.length; i++) {
                const elem = texts[i].toLowerCase()
                if (elem.startsWith(search)) {
                    starts = true
                } else if (elem.endsWith(search)) {
                    ends = true
                }
                if (starts && ends) {
                    return
                }
            }
            throw new Error('The result does not contain 2 products containing the word "iPhone"')

        })
    }
});
