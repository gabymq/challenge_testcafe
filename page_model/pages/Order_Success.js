import {Selector} from 'testcafe'  
class Order_Success{     
     constructor(){         
        
        this.finish = Selector('#checkout_complete_container > img')   
         } 
        }

export default new Order_Success()
