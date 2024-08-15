describe('My First Test Suite', function(){
    it('My FirstTest case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // Select search bar & type 'ca'
        cy.get('.search-keyword').type('ca')

        // Wait for 2 sec & check if only 4 elements are present
        cy.wait(1000)
        // Selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)

        // Parent child chaining
        cy.get('.products').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('.product-name').text()

            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
    })
})