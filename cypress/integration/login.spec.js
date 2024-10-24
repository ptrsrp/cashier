import LoginPage from "../pages/login.page.js"
import DashboardPage from "../pages/dashboard.page.js"

describe('Login Skenario', () => {
    it('Should succes login using valid credential', () => {
      LoginPage.open()
      LoginPage.fillform('srituemail@test.com', 'Test123')
      LoginPage.submit()
      cy.url().should('eq', 'https://kasirdemo.vercel.app/dashboard')
      DashboardPage.userLogedIn.should('be.visible')
    })
  
})