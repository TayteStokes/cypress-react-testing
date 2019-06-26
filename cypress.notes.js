// Cypress is a front end testing that will drives the browser the way a user would
// Cypress will test the what of our application rather than the how

// Get Started
// first, install cypress into the project by running npm install cypress -D or yarn add cypress -D
// second, hop into the package.json and add the script "cypress:open": "cypress open"
// in the terminal, run "npm run cypress:open" or "yarn run cypress:open"
// the first time we run this cypress will create a folder with it's config
// this will open cypress suite to see our tests

// create a 'sample_spec.js' file under cypress/integration
// cypress will pick this up immediately and update the suite
// thhe integration folder is where we can write our tests
// Lets start writing those tests

// The Syntax to Write this test looks very familiar to chai and mocha (or jest)
describe('my first test', () => {
    it('Does not do much', () => {
        expect(true).to.equal(true)
    })
});

// Tests generally follow a common structure using three phases
// Arrange - Setup the application state
    // visit a page
    // query an element
// Act - Take an action
    // take an action on the element (click)
// Assert - Make an assertion
    // make an assertion of what to expect

// We can access cypress commands through the global 'cy' object

// Cypress will use selectors to access the elements of the page
// Once we select a node we are able to perform actions and make assertions on the element
