describe('Test to find a specific elment for filter Challenges', () => {

  it('start & end at homepage after several interactions', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    /*.then(() => {
        cy.url().should('include', '/index.html')
    })*/

    //test hompage is showing & then go to Our Challenges
    cy.url().should('include', '/index.html')
    cy.contains('On-site')
    cy.contains('Online')
    cy.get('[data-cy="allChallenges"]').click()

    //test Our Challenges page is showing & clicking for filter challenges
    cy.url().should('include', '/filter.htm')
    cy.get('[data-cy="filterChallenges"]').click()

    //test filter modal is showing & existence of a filter element
    cy.contains('By Rating')
    cy.get('[data-cy="ratingMax"]')
      .should('have.attr', 'aria-valuemax')

    //test close modal
    cy.get('[data-cy="filterExitBtn"]').click()
    cy.url().should('include', '/filter.htm')
    /////////cy.not('filter hidden')

    //test go back to home page
    cy.get('[data-cy="toHome"]').click()
    cy.url().should('include', '/index.html')
    cy.contains('On-site')
    cy.contains('Online')

    //test go to Book Online Challenges
    cy.get('[data-cy="onlineChallenges"]').click()
    cy.url().should('include', '/filter.htm?online')

    //test to book an online challenge
    cy.contains('Take challenge online').click({ multiple: true })

    //step 1
    cy.get('[data-cy="booking-date"]')
      .type('2024-12-10')
      .and('have.value', '2024-12-10')
      .should('have.attr', 'required')

    cy.contains('Search').click()

    //step 2
    cy.get('[data-cy="user-name"]')
      .type('your name')
      .and('have.value', 'your name')
      .should('have.attr', 'required')

    cy.get('[data-cy="e-mail"]')
      .type('email@.com')

    cy.get('[data-cy="time-slots"]')
      .select(['0'])
      .and('have.value', '0')
      .should('have.attr', 'required')

    cy.get('[data-cy="numb-participants"]')
      .select(1)
      .should('have.attr', 'required')

    //test no submitting when invalid email
    cy.contains('Submit').click()

    cy.get('[data-cy="e-mail"]').clear()
      .type('inter@space.com')
      .should('have.attr', 'required')

    cy.contains('Submit').click()

    //step 3
    cy.contains('Back to challenges').click()

    //test Our Challenges page showing & go to on-site Challenges
    cy.url().should('include', '/filter.htm')
    cy.get('[data-cy="onSiteChallenges"]').click()
    cy.url().should('include', '/filter.htm?onsite')

    //test to start booking an on-site challenge
    cy.contains('Book this room').click({ multiple: true })

     //step 1
     cy.get('[data-cy="booking-date"]')
     .type('2024-12-10')
     .and('have.value', '2024-12-10')
     .should('have.attr', 'required')
  })
})
