import {LoginPage} from '../pages/Login_Page'
import { ClientFunction } from 'testcafe'
import { InventoryPage } from '../pages/Inventory_Page'

let inventoryPage = null;
let loginPage = null;

fixture('Login testing')
    .page`https://www.saucedemo.com/`
    .beforeEach(()=>{
        inventoryPage = new InventoryPage()
        loginPage = new LoginPage()
    })


test('Login with a valid user', async t => {
    await t.typeText(loginPage.usernameField, 'standard_user')
    await t.typeText(loginPage.passwordField, 'secret_sauce')
    await t.click(loginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")
})

test('Login with an Invalid User', async t => {
    await t.typeText(loginPage.usernameField, 'homework')
    await t.typeText(loginPage.passwordField, 'not')
    await t.click(loginPage.loginButton)

    await t.expect(loginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})

test('Logout from product page', async t => {
    await t.typeText(loginPage.usernameField, 'standard_user')
    await t.typeText(loginPage.passwordField, 'secret_sauce')
    await t.click(loginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")

    await t.click(inventoryPage.hamburgerButton)
    await t.click(inventoryPage.logoutLink)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/")


})

test('Navigate to the shopping cart', async t => {
    await t.typeText(loginPage.usernameField, 'standard_user')
    await t.typeText(loginPage.passwordField, 'secret_sauce')
    await t.click(loginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")

    await t.click(inventoryPage.shoppingCartLink)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/cart.html")


})

