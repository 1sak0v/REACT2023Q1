describe('rendering the Form page of the application', () => {
  it('having a form on the page with initial values', () => {
    cy.visit('/form');

    cy.get('input[type="text"]#name').should('have.value', '');
    cy.get('input[type="date"]#birthday').should('have.value', '');
    cy.get('select#continent').should('have.value', '');
    cy.get('input[type="checkbox"]#html').should('not.have.checked', '');
    cy.get('input[type="checkbox"]#css').should('not.have.checked', '');
    cy.get('input[type="checkbox"]#js').should('not.have.checked', '');
    cy.get('input[type="radio"]#male').should('not.have.checked', '');
    cy.get('input[type="radio"]#female').should('not.have.checked', '');
    cy.get('input[type="file"]#picture').should('have.value', '');
  });

  it('submit incorrect form', () => {
    cy.visit('/form');

    cy.get('form.form').submit();
    cy.contains('This field is required').should('be.visible');

    cy.get('input[type="text"]#name').type('anton');
    cy.get('input[type="date"]#birthday').type('2024-04-27');
    cy.get('select#continent').select('');

    cy.get('form.form').submit();

    cy.contains('The name must start with a capital letter').should('be.visible');
    cy.contains('Date of birth no later than today').should('be.visible');
    cy.contains('This field is required').should('be.visible');
  });

  it('submit correct form', () => {
    cy.visit('/form');

    cy.get('input[type="text"]#name').type('Anton');
    cy.get('input[type="date"]#birthday').type('2001-08-08');
    cy.get('select#continent').select('Europe');
    cy.get('input[type="checkbox"]#html').check();
    cy.get('input[type="radio"]').first().check();
    cy.get('input[type="file"]#picture').selectFile(
      {
        fileName: 'picture.png',
        contents: ['its a picture'],
      },
      { force: true }
    );

    cy.get('form.form').submit();

    cy.contains('Successfuly').should('be.visible');

    cy.get('input[type="text"]#name').should('have.value', '');
    cy.get('input[type="date"]#birthday').should('have.value', '');
    cy.get('select#continent').should('have.value', '');
    cy.get('input[type="checkbox"]#html').should('not.have.checked', '');
    cy.get('input[type="checkbox"]#css').should('not.have.checked', '');
    cy.get('input[type="checkbox"]#js').should('not.have.checked', '');
    cy.get('input[type="radio"]#male').should('not.have.checked', '');
    cy.get('input[type="radio"]#female').should('not.have.checked', '');
    cy.get('input[type="file"]#picture').should('have.value', '');

    cy.get('li.profile-item').should('have.length', 1);
  });
});
