import React from 'react';
import Article4 from './Article4';
import Like from './Like';

const Soccer =(props)=> {

   return (
        
    <div >
        <h1 > 
            More than just a Game 
        </h1>
        
        <article className= "Test" onClick={props.clicked}  >
                    <Article4/>
             <div className="devicer"></div>
        </article>
   
    </div>


    );
   
};

export default Soccer;