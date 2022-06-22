import React from 'react';
import gitHubIcon from "../../assets/icons/gitHubIcon.png";
import gmail from "../../assets/icons/gmail.png";
import linkedin from "../../assets/icons/linkedin.png";

function Footer () {

    return (
        <div className='footer' style={{textAlign: 'center'}}>
           <div> 
           <a href="https://github.com/ek33450505">
          <img
            src={gitHubIcon}
            alt="GitHub"
            className="icon"
          />
        </a>
        <a href="mailto:ek33450505@gmail.io">
          <img
            src={gmail}
            alt="Gmail Link"
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/edward-kubiak-048526193/">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="icon"
          />
        </a>
           </div>
         </div>
       );
     }

export default Footer;