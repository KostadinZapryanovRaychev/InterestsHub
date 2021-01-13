import React from 'react';
import classes from './Article.css';
import { Image } from 'react-bootstrap';
import DisplayAllPosts from '../quantummechanics/DisplayAllPosts';
import Like from '../soccer/Like';
import { arraySoc } from '../Articles';



const Article10 = () => {

 
  const isItTrue=true;
   return (
  
  <>
  <container style={{width: 10, height:10 }}>
   <div className={classes} style={{color:"rgb(188, 202, 165)"}}>

       <h2>{arraySoc[0].title}</h2>
       <Image
  resizeMode={'contain'}  width={"550px"}  height={"400px"}  
  src={'https://bucket.mg.co.za/thoughtleader/40ab88f0-og-socrates.ngsversion.1558373552160.adapt_.1900.1.jpg'}
  
        />
     <p>{arraySoc[0].description} </p>
    
             <Like/>
          <div className="devicer"></div>
     <DisplayAllPosts isQuantumPhysicsOn={isItTrue} ></DisplayAllPosts>
  
    </div>
  </container> 
  </>  
);
}


export default Article10;