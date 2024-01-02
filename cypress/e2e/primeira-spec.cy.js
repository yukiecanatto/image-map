describe('Meu primeiro conjunto de testes', () => {
  // conjunto de testes

  it('Visita uma URL', () => { // caso de teste
    
    cy.visit('http://127.0.0.1:5500/') // comando de teste
  
  });



  it('Verifica o para-brisa', function() {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('map > [data-target="parabrisa"]').click({force: true});
    cy.get('[src="./img/parabrisa.png"]').should('have.class', 'sobreposicao');
    cy.get('[src="./img/parabrisa.png"]').should('have.attr', 'data-target', 'parabrisa');
    cy.get('[src="./img/parabrisa.png"]').should('be.visible');

    cy.get('#parabrisa > .close').should('have.text', '✖');
    cy.get('#parabrisa > .close').should('have.class', 'close');
    cy.get('#parabrisa > .close').should('be.visible');
    cy.get('#parabrisa').should('have.text', '\n        ✖\n        Pára-brisa\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, placeat suscipit tempore, maxime assumenda amet cupiditate id ex error omnis ea, excepturi minima iure aliquid laboriosam dicta libero! Consequuntur, similique?\n        pressione ESC para fechar\n    ');
    cy.get('#parabrisa').should('have.id', 'parabrisa');
    cy.get('#parabrisa').should('have.class', 'data');
    cy.get('#parabrisa').should('be.visible');
    
  });


  
  it('Verifica espelho retrovisor', function() {
    
    cy.visit('http://127.0.0.1:5500/');
    cy.get('#overlay').should('be.hidden');
    cy.get('map > [data-target="retrovisor-dir"]').click({force: true});
    cy.get('#overlay').should('have.id', 'overlay');
    cy.get('#overlay').should('be.visible');
    cy.get('[src="./img/retrovisor-dir.png"]').should('have.class', 'sobreposicao');
    cy.get('[src="./img/retrovisor-dir.png"]').should('have.attr', 'data-target', 'retrovisor-dir');
    cy.get('[src="./img/retrovisor-dir.png"]').should('be.visible');
    cy.get('#retrovisor-dir').should('have.text', '\n        ✖\n        Retrovisor Direito\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil consequuntur ab rerum non blanditiis laborum molestias, officiis tenetur deserunt.\n        pressione ESC para fechar\n    ');
    cy.get('#retrovisor-dir').should('have.id', 'retrovisor-dir');
    cy.get('#retrovisor-dir').should('have.class', 'data');
    cy.get('#retrovisor-dir').should('be.visible');
    cy.get('#retrovisor-dir > .close').should('have.text', '✖');
    cy.get('#retrovisor-dir > .close').should('have.class', 'close');
    cy.get('#retrovisor-dir > .close').should('be.visible');
    
  });
});