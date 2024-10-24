class LoginPage{

    get emailField() { return cy.get('#email') }
    get pwdField() { return cy.get('#password') }
    get register() { return cy.xpath('//a[@href="/register"]') }
    get loginBtn() { return cy.xpath('//button[@type="submit"]') }

    open(){
        return cy.visit('https://kasirdemo.vercel.app/login')
    }

    fillform(email, password){
        this.emailField.type(email)
        this.pwdField.type(password)
    }

    goToRegister(){
        return this.goToRegister.click()
    }

    submit(){
        return this.loginBtn.click()
    }


}

export default new LoginPage()