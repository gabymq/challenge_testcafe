import {Selector} from 'testcafe'  
class Error_Missing_Mail{     
     constructor(){         
        
        this.error_missing = Selector('#checkout_info_container > div > form > h3')   
         } 
        }

export default new Error_Missing_Mail()