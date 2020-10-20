describe('Open Site', () => {
    it('Visit', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('Fill inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('Oskar Pra ')
        cy.get('[type="text"][placeholder="Email"]')
            .type('oskarpra18@gmail.com')
        cy.contains('Remember me').first().click()
    });

    it('Fill the Grid', () => {
        cy.get('[data-cy="imputEmail1"]').type('oskarpra18@gmail.com')
        cy.get('#inputPassword2').type('tespassword')
        cy.contains('Option 1').click()

    });
    
    it('Do Basic Form', () => {
        cy.get('#exampleInputEmail1').type('oskarpra18@gmail.com')
        cy.get('#exampleInputPassword1').type('tespassword')
        cy.contains('Check me out').click()
    });

    it('Do form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Oskar ')
        cy.get('[placeholder="Subject"]').type('Hello world')
        cy.get('[placeholder="Message"]').type('Lores ipsum dolor')
    });

    it('Do block Form', () => {
        cy.get('#inputFirstName').type('Oskar')
        cy.get('#inputLastName').type('Andreas')
        cy.get('#inputEmail').type('oskarpra18@gmail.com')
        cy.contains('Website').type('hndr91.github.io/demo-ui/')
    });

    it('Do horizontal Form', () => {
        cy.get('#inputEmail3').type('oskarpra18@gmail.com')
        cy.get('#inputPassword3').type('tespassword')
        cy.get('.custom-checkbox').last().click()
    });
})