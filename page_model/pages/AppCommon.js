import {Selector} from 'testcafe'

export class AppCommon{
    constructor(){
        
        this.errorMessage = Selector('h3[data-test="error"]')
    }

}