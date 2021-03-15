import { Selector } from 'testcafe'
import { AppCommon } from './AppCommon'

export class LoginPage extends AppCommon {
    constructor() {
        super()
        
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.labelProduct = Selector('.product_label')
    }
}
