// Step 1: Visit a page
describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
    })
})

// Step 2: Query for an element
describe('My Second Test', () => {
    it('finds the content "type"', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type')
    })
})

// Step 3: Click on element
describe('My Third Test', () => {
    it('clicks the link "type"', () =>{
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
    })
})

// Step 4: Make an assertion - to check if the URL is correct on click
describe('My Forth Test', () => {
    it('clicking "type" navigates to a new URL', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    })
})

// Step 5: Adding more commands and assertions
describe('My Fith Test', () => {
    it('Gets, types and asserts', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it
        cy.get('.action-email').type('fake@email.com')

        // Verify that the value has been updated
        cy.get('.action-email').should('have.value', 'fake@email.com')
    })
})