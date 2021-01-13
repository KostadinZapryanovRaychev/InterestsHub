import React from 'react';
import Article6 from './Article6';
import Like from '../soccer/Like';
import Article20 from './Article20';


const Math =(props)=> {
 
    
   
   
    return (

            <>
               
           <h1 style={{fontFamily:"cursive"}}>  
            <p style={{color:"white"}}>"Not everything that be counted, counts and not everything that counts can be counted."</p> 
            <p style={{color:"white" }}> Albert Einstein </p>
            </h1>

        <article className="Test" onClick={props.clicked}  >
             < Article6/>
             <div className="devicer"></div>
                   <Like></Like>
        </article>

             
             <article className="Test" onClick={props.clicked}  >
             < Article20/>
             <div className="devicer"></div>
                   <Like></Like>
        </article>

            
          </>
    )

   
};

export default Math;



