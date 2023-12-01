// This was more of a test for me to try and use cypress using my current build. 
// It's a bit behind and shouldn't reflect the quality of the final work

describe('testing', () => {
    it('Go to site', () => {
        cy.visit('http://127.0.0.1:5501')
    })
})

describe('Clicking on a tags', () => {
    it('Clicks all the a tags', () => {
        for (let i = 0; i < 4; i++) {
            cy.visit('http://127.0.0.1:5501');
            cy.get('ul a').eq(i).click();
            cy.get('ul').should('exist');
        }
    });
});

describe('Book a room', () => {
    it('Books a room', () => {
        cy.visit('http://127.0.0.1:5501');
        cy.contains('Take challenge online').click();
        cy.get('.modal1__inputDate').type('2023-12-10')
        cy.contains('Search available times').click();
        cy.get('.modal2__inputName ').type('Test Name');
        cy.get('.modal2__inputEmail').type('test@email.com')
        cy.get('.modal2__selectSlot').select('0');
        cy.get('.modal2__selectPlayer').select('3 participants');
        cy.contains('Submit booking').click();
        cy.contains('Back to challenges').click();
    });
});