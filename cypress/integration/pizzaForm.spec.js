

describe('Pizza Order Form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('sanity checks', () => {

    })

    it('check the element exists', () => {
        cy.get('input[id="name-input"]').type('Kyle')
    })

    it('check for toppings input', () => {
        cy.get('[type="checkbox"]').check()
    })

    it('submit form', () => {
        cy.get('button[id="order-button"]').should('exist').should('not.be.disabled')
    })
})