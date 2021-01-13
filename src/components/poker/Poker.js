import React from 'react';
import classes from './Poker.css';
import ReactPlayer from 'react-player';


const Poker = () => {

   return (
      
    <div className={classes}> 
      <h1 style={{color:"white"}}> Fold and live to fold again !</h1>
        <h2 style={{color:"white"}}> Stu Ungar</h2>
     <article> <ReactPlayer
    url="https://www.youtube.com/watch?v=4KOc7zgS4i8"
    />
    </article>
    <p> </p>

    <article>
     <ReactPlayer
   url="https://www.youtube.com/watch?v=pIm0akt3S3Q"
    />
    </article>
    <p> </p>
    <article>
   <ReactPlayer
    url="https://www.youtube.com/watch?v=yg1GWWTNtA0"
    />
    </article>
    
    
    
    </div>
    );
   
};

export default Poker;