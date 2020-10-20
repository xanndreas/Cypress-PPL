describe('Open Site',()=>{
    it('Open Datepicker', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
    });

    it('Do form datepicker', () => {
        cy.get('[placeholder="Form Picker"]').type('Jun 15,2000')
        cy.get('[placeholder="Range Picker"]').type('Jan 1,2000')
        cy.get('[placeholder="Min Max Picker"]').type('Oct 2,2000')
    });
    

})