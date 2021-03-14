import {Selector} from 'testcafe'  
class Add_Simple_Item{     
     constructor(){         
        
        this.cart = Selector('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_quantity')   
         } 
        }

export default new Add_Simple_item()
