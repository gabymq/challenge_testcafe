import {Selector} from 'testcafe'  
class Navigate_Cart{     
     constructor(){         
        
        this.cart = Selector('#contents_wrapper > div.subheader')   
         } 
        }

export default new Navigate_Cart()
