Cypress.Commands.add('homepageDashboardIsDisplayed', () => {
    // check menu options are displayed
    ['home', 'countries'].forEach((menu) => {
        cy.findByTestId(`nav-${menu}`).should('exist')
    })

    //check dashboard cards are displayed
    cy.findByTestId('countries-available-count')
        .should('exist')
        .and('have.text', '250')
    cy.countryVisitedCountShouldBe(0)
    cy.wantToGoCountShouldBe(0)
})

Cypress.Commands.add('countryVisitedCountShouldBe', (VisistedCount) => {
    cy.findByTestId('countries-visited-count').should('have.text', VisistedCount)
})

Cypress.Commands.add('wantToGoCountShouldBe', (wantToVisit) => {
    cy.findByTestId('countries-wanted-count').should('have.text', wantToVisit)
})