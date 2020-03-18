
// constante de url sendo importada do arquivo cypress.json (arquivo de configuração do Cypress)
const url = Cypress.config("baseUrl")


//Função criada para capturar o valor do elemento e retornar o mesmo

function getValue(elementText) {

  //Promisse criada para que o código aguarde o retorno do request antes de tentar captar o valor do elemento 
  return new Promise((resolve, reject) => {
    cy.get(elementText).invoke('text')
          .then(conteudo => {
              cy.log('conteudo', conteudo);
              resolve(conteudo);
          });
  });
}

// o Cypress utiliza o Mocha  como Frameworks de testes

//Grupo de teste (describe)
describe ('Teste API', function(){

    // (it) é o teste em si 
    it ('Validando cotação de Venda do dia anterior ', function()
    {
        //mapeamento do elemento com o valor da cotação de venda
        let venda = "body > div > table > tbody > tr > td:nth-child(2)"
        let elementText1 = venda
        cy.request(url)
        cy.request("/CotacaoDolarDia(dataCotacao='03-13-2020')")
        cy.visit("/CotacaoDolarDia(dataCotacao='03-13-2020')")

        return getValue(elementText1).then(elementText => {
          cy.log('campaign', elementText);
 
          if (expect(parseFloat(elementText)).to.below(10)) {
              expect(elementText).to.match(/.{6}/);
          } else {
              expect(elementText).to.match(/.{7}/);
          }

          expect(elementText).to.not.contain('-');
          expect(elementText).to.not.contain('.');

      });  
    })   


    it ('Validando cotação de Compra do dia anterior ', function()
    {
        //mapeamento do elemento com o valor da cotação de compra
        let compra = "body > div > table > tbody > tr > td:nth-child(1)"
        let elementText2 = compra
        cy.request(url)
        cy.request("/CotacaoDolarDia(dataCotacao='03-13-2020')")
        cy.visit("/CotacaoDolarDia(dataCotacao='03-13-2020')")

        return getValue(elementText2).then(elementText => {
          cy.log('campaign', elementText);
 
          if (expect(parseFloat(elementText)).to.below(10)) {
              expect(elementText).to.match(/.{6}/);
          } else {
              expect(elementText).to.match(/.{7}/);
          }

          expect(elementText).to.not.contain('-');
          expect(elementText).to.not.contain('.');

      });  
    })

    it ('Comparando preço entre as cotações de compra e venda', function()
        {
            let compra = "body > div > table > tbody > tr > td:nth-child(1)"
            let venda = "body > div > table > tbody > tr > td:nth-child(2)"
            cy.request(url)
            cy.request("/CotacaoDolarDia(dataCotacao='03-13-2020')")
            cy.visit("/CotacaoDolarDia(dataCotacao='03-13-2020')")
  
                    
              if ( getValue(venda) >= getValue(compra) ) {
                    cy.log("Preço de Venda não pode ser menor que o preço de Compra ", getValue(venda))
              } else{
                cy.log("[Error] Preço de comprar maior que o de venda", getValue(compra))
              }     

        }
    
    )
})


  