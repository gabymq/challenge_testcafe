import { Selector } from 'testcafe'
import { AuthSelectorPage } from './Auth_Selector_Page'

export class CheckoutStepTwo extends AuthSelectorPage{
    constructor() { 
        
    super()

        this.inventoryItemsCartList = Selector('.cart_list').find('.cart_item')
}
    async getTextItem(cartItem){
        const parentSelector = `.cart_list .cart_item:nth-child(${cartItem+2})`;

        return {
            name: await Selector(`${parentSelector} .inventory_item_name`).innerText,
            description: await Selector(`${parentSelector} .inventory_item_desc`).innerText,
            price: await Selector(`${parentSelector} .inventory_item_price`).innerText,
        }
    }
}