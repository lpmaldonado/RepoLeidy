# Repositorio para N5 - Leidy Pineda

Challenge:
Diseñar un set que permita navegar por la página de Netflix, maximizar la pantalla.

Este proyecto contiene pruebas automatizadas utilizando Cypress y Allure para realizar pruebas en la página de Netflix.

## Tabla de contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Créditos](#créditos)

## Instalación

1. Clona este repositorio en tu máquina local.

git clone https://github.com/lpmaldonado/RepoLeidy.git

2. Instala las dependencias utilizando npm:
npm install

## Uso 

1. Con la interfaz de usuario de Cypress
Para ejecutar las pruebas de interfaz de usuario, sigue estos pasos:

Abre Cypress en la interfaz gráfica:
npm run cypress:open

Selecciona los casos de prueba que deseas ejecutar y haz clic en ellos para que se ejecuten en el navegador.

2. Pruebas con reporte Allure
Para ejecutar las pruebas y generar un reporte utilizando Allure, sigue estos pasos:

Ejecuta las pruebas con el siguiente comando:
npm run ui-regression-allure

Espera a que se ejecuten todas las pruebas.

Una vez finalizada la ejecución, se generará un reporte en formato Allure.

Limpieza de resultados:
npm run allure:clear

Generar el reporte Allure nuevamente:
npm run allure:report

Mover el historial del reporte Allure a los resultados:
npm run allure:history

Para abrir el reporte de Allure, puedes ejecutar el siguiente comando:
npm run allure:report

## Créditos

Leidy Pineda Maldonado
QA Automation Engineer



