describe('rendering the Main page of the application', () => {
  it('The presence of cards on the page in the amount of 20 pieces', () => {
    cy.visit('/');

    cy.get('li.card-item').should('have.length', 20);
  });

  it('search engine check', () => {
    cy.visit('/');

    cy.get('input[type="search"]').should('have.value', '');

    cy.get('input[type="search"]').type('Zeus');
    cy.get('input[type="search"]').should('have.value', 'Zeus');

    cy.get('form').submit();

    cy.get('li.card-item').should('have.length', 1);
  });

  it('open modal view', () => {
    cy.visit('/');

    cy.get('li.card-item:first-child').click();

    cy.get('.modal__overlay').should('have.class', 'modal__overlay');

    cy.get('.modal-card').contains('Comics:').should('be.visible');

    cy.get('.modal-card__close').click();
  });
});
