import menu from './menuList'

class CreateHtml{
    constructor(){

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
         
            <img class ="item image"src="./app/assets/images/${imageName}" alt="">
            
             
        <p class="item-price">${price}</p>
    </div> 
    `)
   }
}


export default CreateHtml;