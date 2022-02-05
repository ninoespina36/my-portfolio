import React, { useState, useRef  } from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaTelegramPlane,FaSkype } from "react-icons/fa";
import { BiPhoneCall } from 'react-icons/bi';
import { Tween, SplitWords } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import FadeIn from "../animations/FadeIn";

export default function ContactSection(){

  const [ isSubmitting, setSubmitting ] = useState(false);
  const contactForm = useRef();

  const submitMessage = e =>{
    setSubmitting(true);
    e.preventDefault();

    emailjs.sendForm('service_7ejr58f', 'template_06jvm1t', contactForm.current, 'user_paCtMuFY0C5aeMyBHH3hW')
    .then(() => {
        contactForm.current.reset();
        toast.info(`Inquiry successfully sent!`);
        setSubmitting(false);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className="lg:py-28 py-16 bg-gray-100 dark:bg-gray-800" id="contact">
      <Controller>
          <Scene
              triggerHook="onEnter"
              duration={600}
          >
          {progress => (
            <div className="max-container  text-gray-800">
              <div className="grid grid-cols-12">
                  <div className="md:col-span-6 col-span-12 lg:pr-10 pr-5">
                      <form ref={contactForm} onSubmit={submitMessage}>
                        <div className="form-control mb-2">
                          <input 
                            required 
                            type="text" 
                            placeholder="Name" 
                            className="input input-bordered dark:border-gray-700 bg-transparent focus:bg-white" 
                            name="user_name"
                          />
                        </div>
                        <div className="form-control mb-2">
                          <input 
                            required 
                            type="text" 
                            placeholder="Email Address" 
                            className="input input-bordered dark:border-gray-700 bg-transparent focus:bg-white" 
                            name="user_email"
                          />
                        </div>
                        <div className="form-control mb-2">
                          <select 
                            required 
                            className="select select-bordered dark:border-gray-700 w-full bg-transparent focus:bg-white text-gray-400 focus:text-gray-600 font-normal" 
                            defaultValue="Nothing"
                            name="inquiry"
                          >
                            <option disabled="disabled" value="Nothing">Choose your inquiry</option> 
                            <option value="Project Request">Project Request</option> 
                            <option value="Others">Others</option> 
                          </select>
                        </div>
                        <div className="form-control mb-2">
                          <textarea 
                            required 
                            className="textarea textarea-bordered dark:border-gray-700 pt-2 bg-transparent focus:bg-white" 
                            rows="5" 
                            placeholder="Message"
                            name="message"
                          ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2 w-40" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Message'}</button>
                      </form>
                  </div>
                  <div className="md:col-span-6 col-span-12 lg:pr-10 pr-5 md:pt-0 pt-10">
                    <h1 className="lg:text-6xl text-4xl font-semibold mb-10 dark:text-gray-200">
                        <Tween
                          from={{ x: 50, opacity: 0, rotate: 25 }}
                          to={{ x: 0, opacity: 1, rotate: 0 }}
                          stagger={0.2}
                          ease="elastic.out(0.1, 0.1)"
                          totalProgress={progress}
                          paused
                        >
                          <SplitWords
                            delimiter=""
                            wrapper={<div className="inline-block" />}
                          >
                            Reach&nbsp;Me&nbsp;Out.
                          </SplitWords>
                        </Tween>
                      </h1>
                      <FadeIn>
                        <h5 className="text-xl font-medium subtitle text-gray-400 mb-5">If you like my work, don't hesitate to contact me via this information below or send it through the input form.</h5>
                      </FadeIn>
                      <FadeIn>
                      <div className="flex items-center gap-x-4 mb-4 text-gray-700 dark:text-gray-200">
                        <BsEnvelope size={20}/>
                        <a href="mailto:ninoespina36@gmail.com" className="ml-1">ninoespina36@gmail.com</a>
                      </div>
                      </FadeIn>
                      <FadeIn>
                      <div className="flex items-center gap-x-4 mb-4 text-gray-700 dark:text-gray-200">
                        <FaSkype size={23} />
                        <span>live:.cid.99dace99bae26cc1</span>
                      </div>
                      </FadeIn>
                      <FadeIn>
                      <div className="flex items-center gap-x-4 mb-4 text-gray-700 dark:text-gray-200">
                        <FaTelegramPlane size={23} />
                        <span>@ninoespina</span>
                      </div>
                      </FadeIn>
                      <FadeIn>
                      <div className="flex items-center gap-x-4 mb-4 text-gray-700 dark:text-gray-200">
                        <BiPhoneCall size={23} />
                        <span>+63 909278 6294</span>
                      </div>
                      </FadeIn>
                  </div>
              </div>
            </div>    
          )}
          </Scene>
      </Controller> 
    </div>
  )
}
