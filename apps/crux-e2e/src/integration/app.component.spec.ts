describe('crux', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('ombmstudios-root').should('exist');
  });
});
