describe('rendering the About page of the application', () => {
  it('have content', () => {
    cy.visit('/about');

    cy.get('h2.main__title').should('have.text', 'About page');
  });
});
