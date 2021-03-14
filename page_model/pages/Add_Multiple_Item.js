import {Selector} from 'testcafe'  
class Add_Multiple_Item{     
     constructor(){         
        
        this.multiple = Selector('#shopping_cart_container > a > span')         
        this.itemMultiple = Selector('#cart_contents_container > div > div.cart_list')

         } 
        }

export default new Add_Multiple_Item()