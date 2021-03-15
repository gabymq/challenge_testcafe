import { Selector } from 'testcafe'
import { AppCommon } from './AppCommon'

export class CheckOutStepOne extends AppCommon {
    constructor() {
        super()
        
        this.continuoButton = Selector('.btn_primary.cart_button')

    }
}
