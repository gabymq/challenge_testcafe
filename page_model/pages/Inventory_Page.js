import { Selector } from 'testcafe'
import { AuthSelectorPage } from './Auth_Selector_Page'

export class InventoryPage extends AuthSelectorPage {

    constructor(){
        super()
        
        this.inventoryItems = Selector('.inventory_list').find('.inventory_item')
    }

    getInventoryButton(listItem){
        return `.inventory_item:nth-child(${listItem }) button`    }
}