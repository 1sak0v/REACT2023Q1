describe('rendering the Error page of the application', () => {
  it('have content', () => {
    cy.visit('/doesnotexist');

    cy.get('a.error__link').should('have.text', 'Back to home');
  });
});
