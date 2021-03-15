import { Selector } from 'testcafe'

export class CartPage {
    constructor() {
        this.checkoutButton = Selector('.cart_footer > .checkout_button')

    }
}
