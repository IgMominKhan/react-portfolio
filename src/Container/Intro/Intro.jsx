import React from 'react';
import Images from '../../Constant/Images';
import { FloatingDiv } from '../../Container';
import './Intro.scss';

const  Intro = ()=> {
  return (
    <div className='intro'>
       
      <div className="i_left">
        <div className="i_name">
          <span>Hy! I Am </span>
          <span> Ig Momin Khan</span>
          <span>Frontend Developer with high lavel of experience in web designing and development, producing the Quality work
         </span>
        </div>   
        <button className="button i_button">Hire me</button>

        <div className="i_icons">
                   <a href="https://github.com/IgMominKhan">
                        <img src={Images.github} alt="github" />
                   </a>
                   <a href="https://www.linkedin.com/in/mominur-ab9836228">
                        <img src={Images.linkedin} alt="linkedin" />
                       
                  </a>

                  <a href="#">
                        <img src={Images.instagram} alt="instagram" />
                  </a>
                 
        </div>

      </div>
      <div className="i_right">
        <img src={Images.vector1} alt="" /><img src={Images.vector2} alt="" /><img src={Images.boy} alt="" />

        <img src={Images.glassesimoji} alt="" />

        <div style={{top:'-4%',left:'68%',transform:'translateX(-50px)'}}>
          <FloatingDiv image={Images.crown} txt1='Web' txt2='Developer'/>
        </div>

        <div style={{top:'21rem',left:'3rem'}}>

          <FloatingDiv image={Images.thumbup} txt1='Best' txt2='Design'/>
 
        </div>

        <div className='blur' style={{background:'rgb(238 210 255)'}}></div>

        <div className="blur" style={{background:'#c1f5ff',
        top:'17rem',
        left:'-9rem',
        width:'21rem',
        height:'11rem'
      }}></div>

        
      </div>
    </div>
  )
}

export default Intro