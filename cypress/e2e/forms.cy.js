describe('Form Submissions', () => {
    beforeEach(() => {
        // Intercept API calls to mock responses so we don't spam real emails
        cy.intercept('POST', '/api/contact', {
            statusCode: 200,
            body: { message: "Contact email sent successfully", sheetSaved: true }
        }).as('contactSubmit');

        cy.intercept('POST', '/api/register-event', {
            statusCode: 200,
            body: { message: "Event registration email sent successfully", sheetSaved: true }
        }).as('eventSubmit');

        cy.intercept('POST', '/api/register-schedule', {
            statusCode: 200,
            body: { message: "Schedule registration email sent successfully", sheetSaved: true }
        }).as('scheduleSubmit');
    });

    it('Contact Form - Validation Check', () => {
        cy.visit('/contact');
        
        // 1. Submit empty form
        cy.get('button[type="submit"]').click();
        // Browser validation usually catches this first if 'required' attribute is present.
        // Cypress can check ':invalid' pseudo-class or valid states.
        cy.get('input[name="name"]').should('match', ':invalid');

        // 2. Fill form but skip ReCAPTCHA
        cy.get('input[name="name"]').type('Cypress Test User');
        cy.get('input[name="email"]').type('cypress@test.com');
        cy.get('input[name="phone"]').type('1234567890');
        cy.get('textarea[name="message"]').type('This is a test message from Cypress.');
        
        cy.get('button[type="submit"]').click();

        // 3. Verify ReCAPTCHA Error Snackbar appears
        cy.contains('Please complete the reCAPTCHA verification.').should('be.visible');
    });
});
