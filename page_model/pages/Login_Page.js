import { Selector } from 'testcafe'

class LoginPage {
    constructor() {
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('h3[data-test="error"]')
        this.labelProduct = Selector('.product_label')
    }
}

export default new LoginPage()