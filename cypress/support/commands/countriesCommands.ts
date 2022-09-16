Cypress.Commands.add('searchByCountryName', (countryName) => {
    cy.findByPlaceholderText('Filter by country name').should('exist')
        .clear()
        .type(countryName)

    cy.findByPlaceholderText('Filter by country name')
        .should('have.value', countryName)
})

Cypress.Commands.add('clearSearch', () => {
    cy.findByPlaceholderText('Filter by country name').should('exist')
        .clear()
})

Cypress.Commands.add('markCountryVisited', (countryName) => {
    cy.searchByCountryName(countryName)
    cy.contains('td', new RegExp("^" + countryName + "$", "g")).parent().findByTestId('visited-checkbox').click({ force: true })
})

Cypress.Commands.add('assertLocalStorage', (key, value, options = { exists: true }) => {
    cy.fixture('countries').then((countriesData) => {
        const countryCode = countriesData[value].code
        if (options.exists) {
            cy.getLocalStorage(key).should('include', countryCode)
        } else {
            cy.getLocalStorage(key).should('not.include', countryCode)
        }
    })
})

Cypress.Commands.add('unmarkCountryVisited', (countryName) => {
    cy.searchByCountryName(countryName)
    cy.contains('td', new RegExp("^" + countryName + "$", "g")).parent().findByTestId('visited-checkbox').click({ force: true })
})

Cypress.Commands.add('markCountryWantToGo', (countryName) => {
    cy.searchByCountryName(countryName)
    cy.contains('td', new RegExp("^" + countryName + "$", "g")).parent().findByTestId('want-to-go-checkbox').check({ force: true })

})

Cypress.Commands.add('unmarkCountryWantToGo', (countryName) => {
    cy.searchByCountryName(countryName)
    cy.contains('td', new RegExp("^" + countryName + "$", "g")).parent().findByTestId('want-to-go-checkbox').uncheck({ force: true })
})

Cypress.Commands.add('countryListShouldIncludeName', (countryName) => {
    cy.findAllByTestId('country-row').should('exist')
    cy.get('tbody td').filter(`:contains(${countryName})`).its('length').should((length) => {
        expect(length).eql(Cypress.$('tbody tr').length)
    })
})

Cypress.Commands.add('selectCountryAction', (action) => {
    cy.findByTestId('country-actions').select(action)
})

Cypress.Commands.add('getCountryCode', (index) => {
    cy.findAllByTestId('country-code').as('countryCode')
    if (index === undefined) {
        cy.get('@countryCode').first().invoke('text')
    } else {
        cy.get('@countryCode').eq(index).invoke('text')
    }
})