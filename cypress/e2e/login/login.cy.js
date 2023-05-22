describe("login test ", () => {
    let genData;
  
    before(() => {
      cy.fixture("genData.json").then((data) => {
        genData = data;
      });
    });
  
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it("verify user login to the system", () => {
     cy.visit(Cypress.env('url'))
      cy.login(genData.email, genData.Password);
    });
  });