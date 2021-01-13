import React from 'react';
import FunctionsIcon from '@material-ui/icons/Functions';
import SchoolIcon from '@material-ui/icons/School';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';

export const SidebarData = [
   {
        title:"Quantum Physics" ,
        icon: <SchoolIcon/> ,
        link: "/quantumphysics" ,
        cName:'nav-text' 

   }, // first object
   {
    title: "Math" ,
    icon: <FunctionsIcon/> ,
    link: "/math",
    cName:'nav-text' 


    },
    {
      title: "Soccer" ,
      icon: <SportsSoccerIcon/> ,
      link: "/soccer",
      cName:'nav-text' 

     },

     {
      
      title: "Philosophy" ,
      icon: <MenuBookIcon/> ,
      link: "/philosophy",
      cName:'nav-text' 

     },

     {
      
          title: "Poker" ,
          icon: <FontDownloadIcon/> ,
          link: "/poker",
          cName:'nav-text' 
    
         },

         
      
//  {    title: "...something more" ,
     //      icon: <EmojiNatureIcon/> ,
     //      link: "/somethingmore"
    
     //     },


] // array of objects