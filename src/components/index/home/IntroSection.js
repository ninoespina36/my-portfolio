import React, { Fragment } from "react";
import { Tween, Timeline } from 'react-gsap';
import { Link } from 'react-scroll';
import { StaticImage } from "gatsby-plugin-image";
import { BsThreeDots, BsEnvelope } from "react-icons/bs";
import { FaTelegramPlane,FaSkype } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BiPhoneCall } from 'react-icons/bi';
import { toast } from 'react-toastify';
import Glare from "../../tilt/Glare";

export default function IntroSection(){

    const copyToClipboard = (text, type) =>{
      navigator.clipboard.writeText(text);
      toast.info(`${type} copied!`);
    }

    return (
      <section>
        <div className="h-screen relative w-full xl:block flex items-center">
          <Timeline
            target={
              <div className="absolute w-full h-full bg-gray-100 flex items-center justify-center">
                <h2 className="absolute text-5xl">Hi, Welcome</h2>
              </div>
            }
          >
          <Tween
            from={{ opacity: 0,y: '0' }}
            to={{ opacity: 1,y: '-3%' }}
            duration={1}
            ease="elastic.out(1,1)"
            delay={0.5}
          />
          <Tween duration={0.5}/>
          <Tween
            to={{ opacity: 0, y: '-5%', display: 'none' }}
            duration={0.5}
          />
        </Timeline>
        <div className="max-container relative 3xl:pt-36 py-20 content z-50">
          <Tween 
            from={{ opacity: 0, y: '20%' }}
            to={{ opacity: 1, y: '0' }}
            duration={1}
            delay={2.5}
            ease="expo"
          >
            <div className="xl:text-left text-center">
              <h1 className="font-semibold text-gray-800 dark:text-gray-200">
                <span className="block sm:mb-5 mb-2 sm:text-8xl text-4xl">I'm <span className="text-gradient hovered">Niño Espina</span></span>
                <span className="block mb-5 sm:text-7xl text-3xl">Web Developer.</span>
              </h1>
              <h5 className="sm:text-xl text-base font-medium subtitle text-gray-400 mt-10">I love building websites, systems and apps with React JS <div className="sm:block hidden w-full h-1">&nbsp;</div> and other powerful technology along with the innovative CSS libraries.</h5>
              <div className="flex items-center gap-x-6 mt-10 text-gray-400 xl:justify-start justify-center">
                <button type="button" aria-label="Contact" onClick={()=>copyToClipboard('ninoespina36@gmail.com', 'Email')} className="hover:text-gray-600"><BsEnvelope size={25}/></button>
                <button type="button" aria-label="Contact" onClick={()=>copyToClipboard('live:.cid.99dace99bae26cc1', 'Skype Id')} className="hover:text-gray-600"><FaSkype size={25}/></button>
                <button type="button" aria-label="Contact" onClick={()=>copyToClipboard('@ninoespina', 'Telegram Id')} className="hover:text-gray-600"><FaTelegramPlane size={25}/></button>
                <button type="button" aria-label="Contact" onClick={()=>copyToClipboard('+63 909278 6294', 'Mobile Number')} className="hover:text-gray-600"><BiPhoneCall size={25}/></button>
              </div>
              <Link 
                  to="about" 
                  smooth={true} 
                  spy={true} 
                  duration={800}
              >
                <div className="btn btn-outline btn-primary mt-10">Learn More <MdOutlineArrowForwardIos className="ml-2"/></div>
              </Link>
            </div>
          </Tween>
          <div className="intro-text-img xl:absolute 3xl:right-0 right-5 3xl:-top-0 -top-36 transform xl:translate-y-3/4 flex flex-wrap 3xl:scale-100 scale-75 xl:w-112 w-full xl:h-112 h-full">
            <Timeline
              target={
                <Fragment>
                  <div className="xl:w-1/2 w-1/4 p-4">
                    <Glare>
                      <div className="h-full w-full intro-grid-img bg-gray-50 dark:bg-gray-700 dark:border-gray-700 border">
                        <StaticImage 
                          src="../../../images/react.png" 
                          alt="React.JS" 
                          placeholder="blurred" 
                          className="react animate-spin-slow"
                        />
                      </div>
                    </Glare>
                  </div>
                  <div className="xl:w-1/2 w-1/4 p-4">
                    <Glare>
                      <div className="h-full w-full intro-grid-img bg-gray-50 dark:bg-gray-700 dark:border-gray-700 border">
                        <StaticImage 
                          src="../../../images/tailwind.png" 
                          alt="Tailwind.CSS" 
                          placeholder="blurred"
                        />
                      </div>
                    </Glare>
                  </div>
                  <div className="xl:w-1/2 w-1/4 p-4">
                    <Glare>
                      <div className="h-full w-full intro-grid-img bg-gray-50 dark:bg-gray-700 dark:border-gray-700 border">
                        <StaticImage 
                          src="../../../images/node.png" 
                          alt="Node.JS" 
                          placeholder="blurred"
                        />
                      </div>
                    </Glare>
                  </div>
                  <div className="xl:w-1/2 w-1/4 p-4 flex items-center justify-center">
                    <BsThreeDots size={60} className="text-gray-400"/>
                  </div>
                </Fragment>
              }
            >
              <Tween 
                from={{ opacity: 0, y: '100%', x: 1000, scale: 5 }}
                to={{ opacity: 1, y: '0', x: 0, scale: 1 }}
                duration={1}
                delay={2.5}
                position={0}
                ease="expo.out"
                target={0}
              />
              <Tween 
                from={{ opacity: 0, y: '100%', x: 1000, scale: 5 }}
                to={{ opacity: 1, y: '0', x: 0, scale: 1 }}
                duration={1}
                delay={2.7}
                position={0}
                ease="expo.out"
                target={1}
              />
              <Tween 
                from={{ opacity: 0, y: '100%', x: 1000, scale: 5 }}
                to={{ opacity: 1, y: '0', x: 0, scale: 1 }}
                duration={1}
                delay={2.5}
                position={0}
                ease="expo.out"
                target={2}
              />
              <Tween 
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                duration={1}
                delay={4}
                position={0}
                ease="expo"
                target={3}
              />
            </Timeline>    
          </div>
        </div>
      </div>
    </section>
    )
}