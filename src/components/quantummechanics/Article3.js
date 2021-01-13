import React from 'react';
import DisplayAllPosts from './DisplayAllPosts';
import { arraySoc } from '../Articles';





const Article3 = (props) =>  {
   
  const isItTrue=true;
  
  

  return (
    <>
      <div style={{color:"rgb(188, 202, 165)"}}>
             <h1>{arraySoc[6].title}</h1>
                <p>{arraySoc[6].description}</p>
      </div> 
  <DisplayAllPosts isQuantumPhysicsOn={isItTrue} ></DisplayAllPosts>
  </>  
)} ;

export default Article3;