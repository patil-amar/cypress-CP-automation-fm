describe('Country page tests', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.visit('/')
        cy.navigateTo('countries')
        cy.clearSearch()
    })

    describe('Filter by country name', () => {
        it('I can search for country using full name ', () => {
            cy.searchByCountryName('India')
            cy.countryListShouldIncludeName('India')
        })

        it('I can search for country using partial name', () => {
            cy.searchByCountryName('United')
            cy.countryListShouldIncludeName('United')
        })

        it('Country List should be empty for invalid search', () => {
            cy.searchByCountryName('Invalid Country Name')
            cy.findAllByTestId('country-row').should('not.exist')
        })
    })

    describe('Country Actions', () => {

        it('I should see country list', () => {
            cy.findAllByTestId('country-row').should('exist')
                .its('length')
                .should('eql', 250)
        })

        describe('Adding country to visited/not visited list', () => {
            
            beforeEach(() => {
                cy.searchByCountryName('India')
                cy.findAllByTestId('country-row').should('exist').its('length').should('eql', 1)
                cy.findAllByTestId('select-country-row-checkbox').first().click().should('be.checked')
            })

            it('I can mark country as visited', () => {
                cy.selectCountryAction('Visited')
                cy.assertLocalStorage('visited', 'India')
                cy.assertLocalStorage('wanted', 'India', { exists: false })
            })

            it('I can mark country as not visited', () => {
                cy.selectCountryAction('Not visited')
                cy.assertLocalStorage('visited', 'India', { exists: false })
                cy.assertLocalStorage('wanted', 'India', { exists: false })
            })
        })

       describe('Adding country to want go and not want to go list', () => {

            beforeEach(() => {
                cy.searchByCountryName('India')
                cy.findAllByTestId('country-row').should('exist').its('length').should('eql', 1)
                cy.findAllByTestId('select-country-row-checkbox').first().click().should('be.checked')
            })

            it('I can add country to my want to go list', () => {
                cy.selectCountryAction('Want to go')
                cy.assertLocalStorage('wanted', 'India')
                cy.assertLocalStorage('visited', 'India', { exists: false })
            })

            it('I can add country to not want to go list', () => {
                cy.selectCountryAction('Do not want to go')
                cy.assertLocalStorage('visited', 'India', { exists: false })
                cy.assertLocalStorage('wanted', 'India', { exists: false })
            })

       })

    })
})

describe('When country data api is not available', () => {
    beforeEach(() => {
        cy.intercept('POST', 'https://countries.trevorblades.com/', {
            statusCode: 401,
            body: {
                "message": "Not Authorised"
            }
        })
        cy.visit('/')
        cy.navigateTo('countries')
    })

    it('I should not see countries rows but show the column heading', () => {
        cy.findAllByTestId('country-row').should('not.exist')
        cy.get('thead').findByText('Flag').should('be.visible')
        cy.get('thead').findByText('Code').should('be.visible')
        cy.get('thead').findByText('Name').should('be.visible')
        cy.get('thead').findByText('Continent').should('be.visible')
        cy.get('thead').findByText('Capital').should('be.visible')
        cy.get('thead').findByText('Currency').should('be.visible')
        cy.get('thead').findByText('Language').should('be.visible')
        cy.get('thead').findByText('Visited').should('be.visible')
        cy.get('thead').findByText('Want to go').should('be.visible')
    })
    
})