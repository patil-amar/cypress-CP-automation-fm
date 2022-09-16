## How to run tests

1. Clone this repo and cd into the project

```
git clone https://github.com/patil-amar/cypress-CP-automation-fm.git
```

2. Install dependencies

```
yarn
```

3. Run Tests

To run on Chrome browser
```
yarn ci:test:chrome
```
To run on firefox browser
```
yarn ci:test:firefox
```

# To run cypress test runner
```
yarn start
```
```
yarn cypress open
```
Select spec files to run

# Notes
1. Tests use react testing liberary(https://testing-library.com/docs/react-testing-library/intro/) to query dom elements
2. All the custom commands are defined in support/commands folder, these custom commands help reduce repetation and keep tests clean and readable.
3. Test data used in the test are stored in fixtuers
4. cypress/e2e folder contains all the test files
