import {Selector} from 'testcafe'  
class Fill_Information{     
     constructor(){         
        
        this.user_information = Selector('#contents_wrapper > div.subheader')   
         } 
        }

export default new Fill_Information()