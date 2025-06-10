context('Example Acceptance Tests', () => {
  describe('Visit a page', () => {
    beforeEach(() => {
      // Given a logged in editor
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
    });

    it('As editor I can add edit a Page', function () {Add commentMore actions
      cy.visit('/document');
      cy.wait(2000);
      cy.navigate('/document/edit');
      cy.wait(2000);
      cy.get('#toolbar-save').click();
    });
  });
});
