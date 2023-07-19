module.exports = (on, config) => {
    // Iniciar propiedades
    // ...
  
    // Iniciar Google Chrome (driver)
    on('before:browser:launch', (browser, launchOptions) => {
      if (browser.name === 'chrome') {
        // Configuraciones específicas de Chrome
        // ...
      }
  
      return launchOptions;
    });
  
    // Retornar la configuración
    return config;
  };
  