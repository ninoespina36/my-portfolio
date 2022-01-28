import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { FaTelegramPlane,FaSkype } from "react-icons/fa";
import { Tween } from 'react-gsap';


export default function InfoHeader(){

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
              <li><a href=""><BsEnvelope size={15}/> </a></li>
              <li><a href=""><FaSkype size={15}/> </a></li>
              <li><a href=""><FaTelegramPlane size={15}/> </a></li>
              <li><a href=""><RiMessengerLine size={18}/> </a></li>
            </ul>
          </div>
        </div>
      </Tween>
  )
}