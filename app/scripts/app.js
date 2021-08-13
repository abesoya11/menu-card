

import '../styles/style.css';
import menu from './modules/menuList'
import createhtml from './modules/createhtml'


if(module.hot){
    module.hot.accept();
}

let menuContainer = document.querySelector(".menu-container");
let createpage = new createhtml();
 


for(const prop in menu){
        
        createpage.printSectionHeader(menuContainer,prop);
          
        for (const items in menu[prop]){
            let name = menu[prop][items].name;
            let price = menu[prop][items].price;
            

            if(menu[prop][items].image =='no'){

            createpage.printSectionMenu(menuContainer,name , price);
            }

            if(menu[prop][items].image !='no'){
                let imageName = menu[prop][items].image;
                createpage.printSectionMenuWithImageIcon(menuContainer,name,price,imageName)
            }
        }
      //  createpage.printSectionMenu(menuContainer,,item)
}
 
