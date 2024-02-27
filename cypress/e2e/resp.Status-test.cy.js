describe('Test resp status code when no content in Body for POST req', () => {

    it('invalid POST request', () => {
        cy.request({
            method: 'POST',
            url: 'https://lernia-sjj-assignments.vercel.app/api/booking/reservations',
            headers: { 'Content-Type': 'application/json' },
            body: '',
            failOnStatusCode: false
        }).then((resp) => {
            expect(resp.status).to.eq(400)
        })
        //alternative code
        /* as('booking')
         cy.get('@booking').its('status')
         .should('equal', 400)*/
    })
})
