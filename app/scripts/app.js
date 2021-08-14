

import '../styles/style.css';
 
import createhtml from './modules/createhtml'
import AssignPictures from './modules/assignPicture';


if(module.hot){
    module.hot.accept();
}

let menuContainer = document.querySelector(".menu-container");
let createpage = new createhtml(menuContainer);

 
let AP = new AssignPictures();

 
  