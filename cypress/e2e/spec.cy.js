describe('Login Skenario', () => {
  it('Should succes login using valid credential', () => {
    cy.visit('https://kasirdemo.vercel.app/login')
  })

  it('Should get Error Message when login using invalid credential', () => {
    cy.visit('https://kasirdemo.vercel.app/login')
  })
})