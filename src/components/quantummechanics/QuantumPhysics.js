import React from 'react';
import Article2 from './Article2';
import Article3 from './Article3';
import classes from './QuantumPhysics.css';


const   QuantumPhysics =(props)=> {

return (
     
        <div>
        <h1 className= {classes} >
             
            <p style={{color:"white"}}>"We are both spectators and actors in the great drama of existance."</p> 
            <p style={{color:"white" }}> Niels Bohr </p>
            
             
         </h1>

         
        
     <article className="Test" onClick={props.clicked}  >
       
              <Article2/>
                <div className="devicer"></div>
      </article>

      <article className="Test" onClick={props.clicked}  >
       
              <Article3/>
                <div className="devicer"></div>
      </article>
         
       
        </div>
     
    );
   
};

export default QuantumPhysics;