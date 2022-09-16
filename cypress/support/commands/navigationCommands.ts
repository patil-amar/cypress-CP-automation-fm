Cypress.Commands.add('navigateTo', (menuOption) => {
    const selector = `nav-${menuOption}`
    cy.findByTestId(selector)
        .should('exist')
        .click()

    if (menuOption === 'countries') {
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/countries')
        })
    }
})