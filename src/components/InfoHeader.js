import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaTelegramPlane,FaSkype } from "react-icons/fa";
import { BiPhoneCall } from 'react-icons/bi';
import { Tween } from 'react-gsap';
import { toast } from 'react-toastify';

export default function InfoHeader(){

  const copyToClipboard = (text, type) =>{
    navigator.clipboard.writeText(text);
    toast.info(`${type} copied!`);
  }

  return (
     <Tween
        from={{ opacity: 0, y: '-2.5rem' }}
        to={{ opacity: 1 , y: '0' }}
        duration={1}
        delay={2.5}
      >
        <div className="bg-gray-800 dark:bg-gray-200" id="home">
          <div className="max-container text-white h-10 flex items-center justify-between">
            <p className="text-xs dark:text-gray-800">Email: ninoespina36@gmail.com</p>
            <ul className="flex items-center gap-x-5 text-gray-200 dark:text-gray-800">
              <li><button onClick={()=>copyToClipboard('ninoespina36@gmail.com', 'Email')}><BsEnvelope size={15}/> </button></li>
              <li><button onClick={()=>copyToClipboard('live:.cid.99dace99bae26cc1', 'Skype Id')}><FaSkype size={15}/> </button></li>
              <li><button onClick={()=>copyToClipboard('@ninoespina', 'Telegram Id')}><FaTelegramPlane size={15}/> </button></li>
              <li><button onClick={()=>copyToClipboard('+63 909278 6294', 'Mobile Number')}><BiPhoneCall size={18}/> </button></li>
            </ul>
          </div>
        </div>
      </Tween>
  )
}