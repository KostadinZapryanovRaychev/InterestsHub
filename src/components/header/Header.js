import React from 'react';
import classes from './Header.css';
import { Link } from 'react-router-dom';



const Header = () => {
     
        return ( 
            <div className={classes}>
              
              <ul>
  <Link to="/home"> <li><a class="active" href="/home">Home</a></li> </Link>
  <Link to="/about"><li><a href="#about">About Me</a></li> </Link>
  <Link to="/FAQ"><li><a href="#faq">FAQ</a></li></Link> 
  <Link to="/contact"> <li><a href="/contact">Contact</a></li></Link> 
  

</ul>
            
            </div>
        );
};

export default Header;
