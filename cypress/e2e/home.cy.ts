describe('Home page tests', () => {
    beforeEach(() => {
        cy.visit('/')       
        cy.clearLocalStorage()
    })

    it('I should see dashboard details on homepage', () => {
        cy.homepageDashboardIsDisplayed()
    })

    describe('Dashboard visited and want to visit counts', () => {
        beforeEach(() => {
            cy.navigateTo('countries')
        })

        describe('Countries visited count', () => {
            beforeEach(() => {       
                cy.markCountryVisited('India')
                cy.assertLocalStorage('visited', 'India')
                cy.navigateTo('home')
            })

            it('Count should increase when I mark country as visited', () => {
                cy.countryVisitedCountShouldBe(1)
            })

            it('Count should decrease when I mark country as not visited', () => {
                cy.navigateTo('countries')
                cy.unmarkCountryVisited('India')
                cy.assertLocalStorage('visited', 'India', { exists: false })
                cy.navigateTo('home')
                cy.countryVisitedCountShouldBe(0)
            })

        })

        describe('Countries to visit count', () => {
            beforeEach(() => {
                cy.markCountryWantToGo('India')
                cy.assertLocalStorage('wanted', 'India')
                cy.navigateTo('home')
                cy.wantToGoCountShouldBe(1)
            })

            it('count should increase when I mark country as I want to visit', () => {
                cy.wantToGoCountShouldBe(1)
            })

            it('Count should decrease when I mark country as I do not want to visit', () => {
                cy.navigateTo('countries')
                cy.unmarkCountryWantToGo('India')
                cy.assertLocalStorage('wanted', 'India', { exists: false })
                cy.navigateTo('home')
                cy.wantToGoCountShouldBe(0)
            })
        })

    })

    describe('Resetting count', () => {
        beforeEach(() => {
            cy.navigateTo('countries')
        })

        it('Country visited reset button should set count to zero', () => {
            cy.markCountryVisited('India')
            cy.assertLocalStorage('visited', 'India')
            cy.markCountryVisited('United Kingdom')
            cy.assertLocalStorage('visited', 'United Kingdom')
            cy.navigateTo('home')
            cy.countryVisitedCountShouldBe(2)
            cy.findByTestId('countries-visited').findByRole('button', { name: 'Reset' }).click()
            cy.assertLocalStorage('visited', 'India', { exists: false })
            cy.assertLocalStorage('visited', 'United Kingdom', { exists: false })
            cy.countryVisitedCountShouldBe(0)
        })

        it('Countries I want to visit reset button should set count to zero', () => {
            cy.markCountryWantToGo('India')
            cy.assertLocalStorage('wanted', 'India')
            cy.markCountryWantToGo('United Kingdom')
            cy.assertLocalStorage('wanted', 'United Kingdom')
            cy.navigateTo('home')
            cy.wantToGoCountShouldBe(2)
            cy.findByTestId('countries-wanted').findByRole('button', { name: 'Reset' }).click()
            cy.assertLocalStorage('wanted', 'India', { exists: false })
            cy.assertLocalStorage('wanted', 'United Kingdom', { exists: false })
            cy.wantToGoCountShouldBe(0)
        })
    })

})

describe('When country api is not available', () => {
    beforeEach(() => {
        cy.intercept('POST', 'https://countries.trevorblades.com/', {
            statusCode: 401,
            body: {
                "message": "Not Authorised"
            }
        })
        cy.visit('/')
    })

    it('I should see zero country count', () => {
        cy.findByTestId('countries-available-count').should('have.text', 0)
        cy.findByTestId('countries-visited-count').should('have.text', 0)
        cy.findByTestId('countries-wanted-count').should('have.text', 0)
    })
})



