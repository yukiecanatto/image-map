describe('Testes E2E para o Projeto Carro', () => {
  // conjunto de testes

  beforeEach(() => { // 'beforeEach', antes de cada 'it'
    
    cy.visit('http://127.0.0.1:5500/') // comando de teste
  
  });

  it('Testa se a altura do overlay é o mesmo da imagem base', () => {

    cy.get('[data-test="testImagemBase"]').should('have.prop', 'clientHeight').then(clientHeight => {

      cy.get('[data-test="testOverlay"]').invoke('height').then(height => {

        cy.wrap(Math.round(height)).should('equal', Math.round(clientHeight));
      
      })

    })

  });

  it('Verifica se o overlay está oculto', () => {

    cy.get('[data-test="testOverlay"]').should('have.class', 'oculto').and('not.be.visible');
      
  });


  it('Verifica se a cor e a transparência do overlay esta correta', () => {

    cy.get('[data-test="testOverlay"]').should('have.css', 'background-color', 'rgba(0, 0, 0, 0.533)');
      
  });


  it('Verifica se os cards de informações estão oculto', () => {

    cy.get('[data-test="divParabrisa"]').should('have.class', 'oculto').and('not.be.visible');
    
    cy.get('[data-test="divRetrovisorDir"]').should('have.class', 'oculto').and('not.be.visible');
    
    cy.get('[data-test="divEspelhoRetrovisor"]').should('have.class', 'oculto').and('not.be.visible');

      
  });


  it('Verifica se as imagens em destaque estão ocultas', () => {

    cy.get('[data-test="imagemSobreposicaoPNG"]').each(Imagem => {
      
      cy.wrap(Imagem).should('have.class', 'oculto').and('not.be.visible');
    
    });

  });


  it('Verifica a estrutura dos cards', () => {


    cy.get('[data-test="divCard"]').each(div => {
      
      cy.wrap(div).children('span.close').should('exist');
      
    
    });

    cy.get('[data-test="divParabrisa"]').children('span.close').should('exist');
    cy.get('[data-test="divParabrisa"]').children('h3').should('exist');
    cy.get('[data-test="divParabrisa"]').children('p').should('exist');
    cy.get('[data-test="divParabrisa"]').children('span.caption').should('exist');

  });
  

  
  
});