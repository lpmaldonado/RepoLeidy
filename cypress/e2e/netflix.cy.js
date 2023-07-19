import NetflixPage from '../support/pages/NetflixPage';

describe('Netflix Navigation', () => {
  // Distintos valores para verificar que se maximicé la pantalla
  const viewports = [
    { width: 1280, height: 720 },
    { width: 1920, height: 1080 },
    { width: 1440, height: 900 }
  ];

  beforeEach(() => {
    // Antes de la prueba se hace una espera de carga de la página
    NetflixPage.visit();
    NetflixPage.waitForPageLoad();
  });

  viewports.forEach((viewport) => {
    it(`Should navigate to Netflix and maximize the screen with viewport ${viewport.width}x${viewport.height}`, () => {
      // Código de navegación y maximización de pantalla para los escenarios descritos
      cy.viewport(viewport.width, viewport.height);
      NetflixPage.maximizeScreen();
      // Código de navegación y maximización de pantalla

      NetflixPage.getTitle().then((title) => {
        // Se obtiene el titulo y se imprime
        expect(title).to.be.a('string').and.not.empty;
        cy.log(`Título: ${title}`);
      });

      NetflixPage.getUrl().then((url) => {
        // Validación de la URL de Netflix
        expect(url).to.be.a('string').and.not.empty;
        cy.log(`URL: ${url}`);
      });
    });
  });
});

  afterEach(() => {
    // Se limpia cache luego de finalizar el test
    NetflixPage.clearCache();
  });
