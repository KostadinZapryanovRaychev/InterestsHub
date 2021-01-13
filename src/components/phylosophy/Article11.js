import React from 'react';
import classes from './Article.css';
import { Image } from 'react-bootstrap';
import DisplayAllPosts from '../quantummechanics/DisplayAllPosts';
import Like from '../soccer/Like';
import { arraySoc } from '../Articles';




const Article11 = () => {
  const isItTrue=true;
   return (
  
  <>
  
   <div className={classes} style={{color:"rgb(188, 202, 165)"}}>

   <h2>{arraySoc[1].title}</h2>
       <Image
  resizeMode={'contain'}  width={"550px"}  height={"400px"} 
  
  src={'https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_large_1x/public/images/contributor/plato_360x450.jpg?itok=fX4Ut_Ld&timestamp=1414179137'}
  
  />
  <p>{arraySoc[1].description} </p>
  
  <Like/>
  <div className="devicer"></div>
  <DisplayAllPosts isQuantumPhysicsOn={isItTrue} ></DisplayAllPosts>
  
  </div>
  </>  
) ;
}


export default Article11;