import React from 'react';
import classes from './Article.css';
import { Image } from 'react-bootstrap';
import DisplayAllPosts from '../quantummechanics/DisplayAllPosts';
import Like from '../soccer/Like';
import { arraySoc } from '../Articles';



const Article12 = () => {
    
  const isItTrue=true;
   return (
    
  <>
  
   <div className={classes} style={{color:"rgb(188, 202, 165)"}}>

   <h2>{arraySoc[2].title}</h2>
       <Image
  resizeMode={'contain'}  width={"550px"}  height={"400px"} 
  
  src={'https://miro.medium.com/max/700/1*Y3PM4RYy3IVzLyzsVnw3BQ.jpeg'}
  
  />
  <p>{arraySoc[2].description}</p>
  <Like/>
  <div className="devicer"></div>
  <DisplayAllPosts isQuantumPhysicsOn={isItTrue} ></DisplayAllPosts>
  </div>
  </>  
) ;
}


export default Article12;