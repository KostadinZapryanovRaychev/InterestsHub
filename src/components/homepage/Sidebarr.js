import React from 'react' ;
import '../../App.css';
import {SidebarData} from './SidebarData' ; // indicating with curly brackets that this is an array
import { Link} from 'react-router-dom';



const Sidebarr = () => 

{
  return (

    
         <div className="Sidebarr" > 

         <ul className="SidebarrList">

         {SidebarData.map((val,key) => {

             return (
             
             <li key={key} className='row' id={window.location.pathname == val.link ? "active" : ""} 
             onClick={()=>{ window.location.pathname=val.link; }} >
             
             <Link to={val.link}>
             
             {" "}
             <div id="icon">{val.icon} </div>  { " " }
             <div id="title">{val.title}</div> 
             
             </Link>
             
             
             </li> 
             ) ; 

         })}

         </ul>
             
        </div>
      
     

       
    );
    


};

export default Sidebarr


