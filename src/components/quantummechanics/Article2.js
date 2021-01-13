import React from 'react';
import DisplayAllPosts from './DisplayAllPosts';
import { arraySoc } from '../Articles';


const Article2 = ()=> {
  
 const isItTrue= true;

  
  return (
    <>
      <div style={{color:"rgb(188, 202, 165)"}}>
           <h2>{arraySoc[5].title}</h2>
             <p>{arraySoc[5].description}</p>
      </div> 
    <DisplayAllPosts isQuantumPhysicsOn={isItTrue}></DisplayAllPosts>
  </>  
)};

export default Article2;