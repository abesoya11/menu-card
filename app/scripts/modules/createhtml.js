import menu from './menuList';
import PicDisplay from './pic-display';

class CreateHtml{
    constructor(obj){
         
        this.menuContainer = obj;


        this.executehtml();

        }

        executehtml()
            {
                    
                for(const prop in menu){
            
                    this.printSectionHeader(this.menuContainer,prop);
                    
                    for (const items in menu[prop]){
                       
                        let name = menu[prop][items].name;
                        let price = menu[prop][items].price;
                        
            
                        if(menu[prop][items].image =='no'){
            
                        this.printSectionMenu(this.menuContainer,name , price);
                        }
            
                        if(menu[prop][items].image !='no'){
                            let imageName = menu[prop][items].image;
                            this.printSectionMenuWithImageIcon(this.menuContainer,name,price,imageName);




                        }
                    }
                 
            }

            }
        

      /* this function print html for section header like Starters
      obj = div elemeent it will attach to */
    printSectionHeader(obj,sectionName){
        obj.insertAdjacentHTML('beforeend',`
        <div class= "section">
        <h2 class="section-name">${sectionName}</h2>
    </div>
        `)

    }
        /* this function print html for item name and price 
        obj = div elemeent it will attach to*/
   printSectionMenu(obj,name,price){
    obj.insertAdjacentHTML('beforeend',`
    <div class="menu-item">
    <p class ="item-name">${name}</p>
    <p class="item-price">${price}</p>
</div>     
    `)

   }

   printSectionMenuWithImageIcon(obj,name,price,imageName){
    obj.insertAdjacentHTML('beforeend',`
     
    <div class="menu-item">
        <p class ="item-name">${name}<i class="far fa-image ${imageName+"-icon"}"></i></p>
         
            <img class ="item-image   ${imageName}"src="" alt="">
            
             
        <p class="item-price">${price}</p>
    </div>  <div class="modal-background ${imageName}-modal">
    <span class="close-modal ${imageName}-close-modal ">X</span></div>
    `)
   }
}


export default CreateHtml;