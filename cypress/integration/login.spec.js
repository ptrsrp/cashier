import LoginPage from "../pages/login.page.js"
import DashboardPage from "../pages/dashboard.page.js"

describe('Login Skenario', () => {

  before(function() {
    cy.fixture('login').then(function(data) {
      globalThis.data = data;
    })
  });

    it('Should succes login using valid credential', () => {
      LoginPage.open()
      LoginPage.fillform(data.validEmail, data.validPwd)
      LoginPage.submit()
      cy.url().should('eq', 'https://kasirdemo.vercel.app/dashboard', {setTimeout: 5000})
      DashboardPage.userLogedIn.should('be.visible')
    })
  
})