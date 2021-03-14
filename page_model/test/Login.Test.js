import LoginPage from '../pages/Login_Page'
import { ClientFunction } from 'testcafe'

fixture('Login testing')
    .page`https://www.saucedemo.com/`


test('Login valid credential', async t => {
    await t.typeText(LoginPage.usernameField, 'standard_user')
    await t.typeText(LoginPage.passwordField, 'secret_sauce')
    await t.click(LoginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")
})

test('Login Invalid credential', async t => {
    await t.typeText(LoginPage.usernameField, 'homework')
    await t.typeText(LoginPage.passwordField, 'not')
    await t.click(LoginPage.loginButton)

    await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})