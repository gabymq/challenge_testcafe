import {LoginPage} from '../pages/Login_Page'
import { ClientFunction } from 'testcafe'
import { InventoryPage } from '../pages/Inventory_Page'
import { CartPage } from '../pages/Cart_Page';
import { CheckOutStepOne } from '../pages/Checkout_StepOne';
import { inventoryItems } from '../data/Inventory_Items';

let inventoryPage = null;
let loginPage = null;
let cartPage = null;
let checkOutStepOne = null;

fixture('Login testing')
    .page`https://www.saucedemo.com/`
    .beforeEach(()=>{
        inventoryPage = new InventoryPage()
        loginPage = new LoginPage()
        cartPage = new CartPage()
        checkOutStepOne = new CheckOutStepOne()
    })
/*
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


test('Add a single item to the shopping cart', async t => {
    await t.typeText(loginPage.usernameField, 'standard_user')
    await t.typeText(loginPage.passwordField, 'secret_sauce')
    await t.click(loginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")
    
    await t.click(inventoryPage.getInventoryButton(1))

    await t.expect(inventoryPage.shoppingCartLink.find(".shopping_cart_badge").innerText).eql("1")
})

test('Add a multiple items to the shopping cart', async t => {
    await t.typeText(loginPage.usernameField, 'standard_user')
    await t.typeText(loginPage.passwordField, 'secret_sauce')
    await t.click(loginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")
    
    await t.click(inventoryPage.getInventoryButton(1))
    await t.click(inventoryPage.getInventoryButton(3))
    await t.click(inventoryPage.getInventoryButton(5))

    await t.expect(inventoryPage.shoppingCartLink.find(".shopping_cart_badge").innerText).eql("3")
})

test('Continuo with missing mail information', async t => {
    await t.typeText(loginPage.usernameField, 'standard_user')
    await t.typeText(loginPage.passwordField, 'secret_sauce')
    await t.click(loginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")
    
    await t.click(inventoryPage.shoppingCartLink)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/cart.html")

    await t.click(cartPage.checkoutButton)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/checkout-step-one.html")


    await t.click(checkOutStepOne.continuoButton)


    await t.expect(checkOutStepOne.errorMessage.innerText).eql('Error: First Name is required')
    
})

test('Fill user\'s information', async t => {
    await t.typeText(loginPage.usernameField, 'standard_user')
    await t.typeText(loginPage.passwordField, 'secret_sauce')
    await t.click(loginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")
    
    await t.click(inventoryPage.shoppingCartLink)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/cart.html")

    await t.click(cartPage.checkoutButton)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/checkout-step-one.html")

    await t.typeText(checkOutStepOne.firstNameField, 'Sauceda')
    await t.typeText(checkOutStepOne.lastNameField, 'Vargas')
    await t.typeText(checkOutStepOne.postalCodeField, '90210')


    await t.click(checkOutStepOne.continuoButton)


    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/checkout-step-two.html")
    
})
*/
test('Final order items', async t => {
    await t.typeText(loginPage.usernameField, 'standard_user')
    await t.typeText(loginPage.passwordField, 'secret_sauce')
    await t.click(loginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")

    inventoryItems.forEach(async item => {
        await t.click(inventoryPage.getInventoryButton(item.id))
    })

    await t.expect(inventoryPage.shoppingCartLink.find(".shopping_cart_badge").innerText).eql(`${inventoryItems.length}`)

    
    await t.click(inventoryPage.shoppingCartLink)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/cart.html")

    await t.click(cartPage.checkoutButton)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/checkout-step-one.html")

    await t.typeText(checkOutStepOne.firstNameField, 'Sauceda')
    await t.typeText(checkOutStepOne.lastNameField, 'Vargas')
    await t.typeText(checkOutStepOne.postalCodeField, '90210')


    await t.click(checkOutStepOne.continuoButton)


    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/checkout-step-two.html")
    
})