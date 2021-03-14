import { Selector } from 'testcafe'

export class AuthSelectorPage {
    constructor() {
        this.hamburgerButton = Selector('#react-burger-menu-btn')
        this.logoutLink = Selector('#logout_sidebar_link')
        this.shoppingCartLink = Selector('#shopping_cart_container .shopping_cart_link')

    }
}
