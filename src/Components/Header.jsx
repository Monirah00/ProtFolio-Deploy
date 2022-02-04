import React,{useState} from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';

const Header = () => {
    const [state] = useState({
        Heading:'I am Monir Hossen',
        Para:'I am Monir Hossen, professional web developer with long time \
        experience in this field​'
    })
  return (
    <div>
        <header>
        <div className="container">
            <ul className='ulIcon'>
                <li className='Header-Icons'><FaFacebook /></li>
                <li className='Header-Icons'><FaTwitter /></li>
                <li className='Header-Icons'><FaInstagramSquare /></li>
                <li className='Header-Icons'><FaMobile /></li>
            </ul>
           <div className="Header-content">
               <h4>{state.Heading}</h4>
               <p>{state.Para}</p>
           </div>

            </div>
        </header>
    </div>
  )
};

export default Header;
