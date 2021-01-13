import React from 'react';
import Article from './Article' ;
import Article10 from './Article10';
import Article11 from './Article11';
import Article12 from './Article12';



const Phylosophy =(props)=> {
 

   return (

       <div > 
         <h1  >
             
            <p style={{color:"white"}}>"The owl of Minerva spreads its wings only with the falling of the dusk."</p> 
            <p style={{color:"white" }}> Hegel </p>

            </h1>

            
             <Article/>

             <div className="devicer"></div>
             <article className="Test" onClick={props.clicked}  >
              
             <Article10/>
                       
             </article>

 <article className="Test" onClick={props.clicked}  >
         <Article11/> 
               
</article>

<article className="Test" onClick={props.clicked}  >
         <Article12/> 
              
</article>





         </div>
    );
   
};

export default Phylosophy;