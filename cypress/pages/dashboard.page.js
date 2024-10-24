class DashboardPage{

    get userLogedIn() { return cy.xpath('//button[@aria-haspopup="menu"]') }
    get logoutBtn() { return cy.xpath('//button[text()="logout"]') }
}

export default new DashboardPage()