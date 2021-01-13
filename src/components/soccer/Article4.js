import React from 'react';
import Like from './Like';
import { arraySoc } from '../Articles';


const Article4 = ()=> {
  

  return (
  <>
    <div >
       <h2>{arraySoc[7].title}</h2>
          <p>{arraySoc[7].description}</p>
              <Like/>      
    </div> 
 </>  
)};

export default Article4;