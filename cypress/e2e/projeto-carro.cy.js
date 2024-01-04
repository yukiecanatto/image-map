describe('Testes E2E para o Projeto Carro', () => {
  // conjunto de testes

  beforeEach(() => { // 'beforeEach', antes de cada 'it'
    
    cy.visit('http://127.0.0.1:5500/') // comando de teste
  
  });


  context('Testes para Desktop (padrão)', () => {

    beforeEach(() => {

      cy.viewport(1000, 660);

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
  
      cy.get('[data-test="divCard"]').should('have.class', 'oculto').and('not.be.visible');
      
      cy.get('[data-test="divCard"]').should('have.class', 'oculto').and('not.be.visible');
      
      cy.get('[data-test="divCard"]').should('have.class', 'oculto').and('not.be.visible');
  
        
    });
  
  
    it('Verifica se as imagens em destaque estão ocultas', () => {
  
      cy.get('[data-test="imagemSobreposicaoPNG"]').each(Imagem => {
        
        cy.wrap(Imagem).should('have.class', 'oculto').and('not.be.visible');
      
      });
  
    });
  
  
    it('Verifica a estrutura dos cards', () => {
  
  
      cy.get('[data-test="divCard"]').each(div => {
        
        cy.wrap(div).children('span.close').should('exist');
        cy.wrap(div).children('h3').should('exist');
        cy.wrap(div).children('p').should('exist');
        cy.wrap(div).children('span.caption').should('exist');
        
      
      });
  
  
    });
  
  
    it('Verifica a estrutura do rodapé', () => {
  
  
      cy.get('[data-test="rodape"]').each(rodape => {
        
        cy.wrap(rodape).children('p').children('a').should('exist');
        
        cy.get('[data-test="repo"]').invoke('attr', 'href').then(href => {
  
          cy.request(href).then(resposta => {
  
            expect(resposta.status).to.equal(200);
  
          });
  
        });
      
      });
  
    });
  
  
    it('Testa se a quantidade de cards é a mesma das imagens sobrepostas', () => {
  
      cy.get('[data-test="divCard"]').then(cards => {
        
        cy.get('[data-test="imagemSobreposicaoPNG"]').should('have.length', cards.length);
  
      });
  
  
    });


  });


  context('Testes para Mobile (380 X 660)', () => {

    beforeEach(() => {

      cy.viewport(380, 600);

    });


    // it('Testa se a altura do overlay é o mesmo da imagem base', () => {
  
    //   cy.get('[data-test="testImagemBase"]').should('have.prop', 'clientHeight').then(clientHeight => {
  
    //     cy.get('[data-test="testOverlay"]').invoke('height').then(height => {
  
    //       cy.wrap(Math.round(height)).should('equal', Math.round(clientHeight));
        
    //     })
  
    //   })
  
    // });
  
    it('Verifica se o overlay está oculto', () => {
  
      cy.get('[data-test="testOverlay"]').should('have.class', 'oculto').and('not.be.visible');
        
    });
  
  
    it('Verifica se a cor e a transparência do overlay esta correta', () => {
  
      cy.get('[data-test="testOverlay"]').should('have.css', 'background-color', 'rgba(0, 0, 0, 0.533)');
        
    });
  
  
    it('Verifica se os cards de informações estão oculto', () => {
  
      cy.get('[data-test="divCard"]').should('have.class', 'oculto').and('not.be.visible');
      
      cy.get('[data-test="divCard"]').should('have.class', 'oculto').and('not.be.visible');
      
      cy.get('[data-test="divCard"]').should('have.class', 'oculto').and('not.be.visible');
  
        
    });
  
  
    it('Verifica se as imagens em destaque estão ocultas', () => {
  
      cy.get('[data-test="imagemSobreposicaoPNG"]').each(Imagem => {
        
        cy.wrap(Imagem).should('have.class', 'oculto').and('not.be.visible');
      
      });
  
    });
  
  
    it('Verifica a estrutura dos cards', () => {
  
  
      cy.get('[data-test="divCard"]').each(div => {
        
        cy.wrap(div).children('span.close').should('exist');
        cy.wrap(div).children('h3').should('exist');
        cy.wrap(div).children('p').should('exist');
        cy.wrap(div).children('span.caption').should('exist');
        
      
      });
  
  
    });
  
  
    it('Verifica a estrutura do rodapé', () => {
  
  
      cy.get('[data-test="rodape"]').each(rodape => {
        
        cy.wrap(rodape).children('p').children('a').should('exist');
        
        cy.get('[data-test="repo"]').invoke('attr', 'href').then(href => {
  
          cy.request(href).then(resposta => {
  
            expect(resposta.status).to.equal(200);
  
          });
  
        });
      
      });
  
    });
  
  
    it('Testa se a quantidade de cards é a mesma das imagens sobrepostas', () => {
  
      cy.get('[data-test="divCard"]').then(cards => {
        
        cy.get('[data-test="imagemSobreposicaoPNG"]').should('have.length', cards.length);
  
      });
  
  
    });
    

  });

  
  
  
  
});