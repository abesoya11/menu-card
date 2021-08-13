import menu from './menuList';

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
    <div class="menu-content">
    <div class="menu-item">
        <p class ="item-name">${name}<i class="far fa-image"></i></p>
         
            <img class ="item-image"src="./app/assets/images/${imageName}" alt="">
            
             
        <p class="item-price">${price}</p>
    </div> 
    `)
   }
}


export default CreateHtml;