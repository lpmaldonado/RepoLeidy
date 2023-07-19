class NetflixPage {
  visit() {
    cy.visit('/');
  }

  waitForPageLoad() {
    cy.intercept('GET', '/ar/').as('pageLoaded');
    //cy.wait(10000);
  }


  verifyElementExists(selector) {
    cy.get(selector).should('exist');
  }

  maximizeScreen() {
    cy.viewport(1440, 900);
  }

  getTitle() {
    return cy.title();
  }

  getUrl() {
    return cy.url();
  }

  clearCache() {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  }

}

export default new NetflixPage();
  