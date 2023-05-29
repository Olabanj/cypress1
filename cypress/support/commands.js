// ***********************************************
import 'cypress-file-upload';
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />
Cypress.Commands.add('login', (email, password) => {
    cy.get("#email").type(email);
    cy.get("[data-test='loginPasswordInput']").type(password);
    cy.get("[data-test='signUpContinue']").click();
    cy.get('.otp-cont > :nth-child(1)').type("1");
    cy.get('.otp-cont > :nth-child(2)').type("3");
    cy.get('.otp-cont > :nth-child(3)').type("4");
    cy.get('.otp-cont > :nth-child(4)').type("5");
    cy.get('.otp-cont > :nth-child(5)').type("6");
    cy.get('[data-test=sendOtpBtn]').click();
  });
  Cypress.Commands.add('clickButton',()=>{
    CarPage.getCarLink().click()
  })