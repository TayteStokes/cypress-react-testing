describe('todo app test', () => {
    // Visit the webpage
    it('Visits localhost 3000', () => {
        // Access cypress functions on the global 'cy' object
        cy.visit('http://localhost:3000')
    });

    it('Should remove the first item in our array of todos', () => {
        // first visit the page
        cy.visit('http://localhost:3000');
        // now use .get() to select an element then use .first to select the first elemenet inside todo-list-container then invoke .click() to remove it
        cy.get('.todo-list-container')
            .first()
            .contains('done')
            .click();
    });

    it('Should add a new todo', () => {
        // first visit the page
        cy.visit('http://localhost:3000');
        // get the container that holds the input for a new todo and type a new todo
        cy.get('.todo-input')
            .type('this is a new todo')
            .should('have.value', 'this is a new todo');
        // now click the button to add the todo
        cy.get('.new-todo-container')
            .contains('add')
            .click()
    });
});