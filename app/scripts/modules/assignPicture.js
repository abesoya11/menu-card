import menu from './menuList';
import PicDisplay from './pic-display';


const counter = 0;
class AssignPictures{
    constructor(){
        this.object=[];
        this.closeModal = document.querySelector(".close-modal");

        this.executeAssignment();
    }


    executeAssignment(){
        for(const prop in menu){
        
               
            for (const items in menu[prop]){
               
               
    
                if(menu[prop][items].image !='no'){
                    let imageName = menu[prop][items].image;
                     
                    let obj = new PicDisplay(imageName)
                    this.object.push(obj);

                   

                    
                    

                    
                    

                    
                }
            }
         
    }
    
    }
}

export default AssignPictures;