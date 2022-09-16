declare namespace Cypress {
    interface Chainable {

        //Navigation commands
        navigateTo(menuOption: string): void

        //Home page commands
        homepageDashboardIsDisplayed(): void
        countryVisitedCountShouldBe(visitedCount: number): void
        wantToGoCountShouldBe(wantToVisit: number): void

        //countries Commands
        markCountryVisited(countryName: string): void
        searchByCountryName(countryName: string): void
        unmarkCountryVisited(countryName: string): void
        markCountryWantToGo(countryName: string): void
        unmarkCountryWantToGo(countryName: string): void
        countryListShouldIncludeName(countryName: string): void
        clearSearch(): void
        selectCountryAction(action: string): Chainable<Element>
        getCountryCode(index?: number): Chainable<Element>

        assertLocalStorage(key: string, value: string, option?: { exists: boolean }): void

    }
}