import menu from './menuList';

var flag = 0;

    class PicDisplay{
        constructor(imageName ){
            this.imageName = imageName;
       /*      this.imagePreview = document.querySelector(`.${imagePreviewClass}`);
            this.imageIcon = document.querySelector(`.${imageIconClass}`);
            this.imageAddress = `./assets/images/${imageName}`;
            this.closeModal= document.querySelector(".close-modal");
       */   this.modalBackground = document.querySelector(".modal-background");
            this.closeModal = document.querySelector(".close-modal");
          
            
             
            this.event();



        }

     

        event( ){
            console.log("event function fired");
            let imageIcon= document.querySelector(`.${this.imageName}-icon`);
            
            imageIcon.addEventListener('click', ()=>this.imageDisplay(this.imageName));   
                
           
               
            
        }

        imageDisplay( ){

     
           
            this.closeModal.addEventListener('click', ()=> this.imageHide(this.imageName));
            
             
           
            
          
            
            let imagePreview = document.querySelector(`.${this.imageName}`);
            imagePreview.src =`./assets/images/${this.imageName}.jpg`;
         
            imagePreview.classList.add('image-preview');
            imagePreview.classList.remove('image-dormant');
            this.modalBackground.style.display = "block";

            

        }

        imageHide(){
            
            let imagePreview = document.querySelector(`.${this.imageName}`);
          
            this.modalBackground.style.display = "none";
            imagePreview.classList.add('image-dormant');
            imagePreview.classList.remove('image-preview');

          

       
          
        }
    }


export default PicDisplay;
