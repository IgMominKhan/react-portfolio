import React from 'react';
import './Navbar.scss';


const  Navbar = ()=> {
  return (
    <div className='n-wrapper'> 
     <div className="n_left">
         <div className="n_name">Ig Momin Khan</div>
         <span>toggle</span>
     </div>
     <div className="n_right">
          <div className="n_list">
              <ul style={{listStyleType:'none'}}>
                 
                {['Home','Services','Experience','Portfolio','Testimonials'].map((item,index)=>{
                  return <li key={index}>{item}</li>    
                })}
                
              </ul>
          </div>
          <button className="button n_button">Contact</button>
     </div>
  </div>
  )}

export default Navbar