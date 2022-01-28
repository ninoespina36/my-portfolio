import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useSelector } from 'react-redux';

import FadeIn from "../animations/FadeIn";

export default function AboutSection(){

  const { isDarkMode } = useSelector(state => state.util);

  return (
    <div className="xl:min-h-screen xl:py-36 py-16" id="about">
      <div className="max-container  text-gray-800 dark:text-gray-200">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h5 className="text-center sm:text-5xl text-3xl font-medium">A professional with years of experience.</h5>
          </FadeIn>
        </div>
        <div className="flex items-center justify-center flex-wrap xl:mt-24 mt-10">
          <div className="md:w-1/2 w-full md:pr-10 xl:py-20 pt-10">
            <FadeIn>
              <div>
                {isDarkMode ? 
                  <StaticImage 
                    src={'../../images/icons/graphic-dark.png'} 
                    alt="Responsive" 
                    placeholder="blurred"
                    className="w-12"
                  /> : 
                  <StaticImage 
                    src={'../../images/icons/graphic.png'} 
                    alt="Responsive" 
                    placeholder="blurred"
                    className="w-12"
                  />
                }
              </div>
            </FadeIn>
            <FadeIn>
              <h6 className="text-2xl font-medium mt-5">Graphic Designer</h6>
            </FadeIn>
            <FadeIn>
              <p className="font-light mt-5">I design beautiful yet affordable graphic ideas. It can be websites, brochures, social media banners, business cards and more. My experience in Graphic Designing don't have limitations.</p>
            </FadeIn>
          </div>
          <div className="md:w-1/2 w-full md:pl-10 xl:py-20 pt-10">
            <FadeIn>
              <div>
              {isDarkMode ? 
                  <StaticImage 
                    src={'../../images/icons/frontend-dark.png'} 
                    alt="Responsive" 
                    placeholder="blurred"
                    className="w-12"
                  /> : 
                  <StaticImage 
                    src={'../../images/icons/frontend.png'} 
                    alt="Responsive" 
                    placeholder="blurred"
                    className="w-12"
                  />
                }
              </div>
            </FadeIn>
            <FadeIn>
              <h6 className="text-2xl font-medium mt-5">Frontend Developer</h6>
            </FadeIn>
            <FadeIn>
              <p className="font-light mt-5">I spend most of my time working as a Frontend Developer. I am proficient in JavaScript particularly in ReactJS. I also have a ton knowledge in libraries such as TailwindCSS, Bootstrap and more.</p>
            </FadeIn>
          </div>
          <div className="md:w-1/2 w-full md:pr-10  xl:py-20 pt-10">
            <FadeIn>
              <div>
                {isDarkMode ? 
                  <StaticImage 
                    src={'../../images/icons/solution-dark.png'} 
                    alt="Responsive" 
                    placeholder="blurred"
                    className="w-12"
                  /> : 
                  <StaticImage 
                    src={'../../images/icons/solution.png'} 
                    alt="Responsive" 
                    placeholder="blurred"
                    className="w-12"
                  />
                }
              </div>
            </FadeIn>
            <FadeIn>
              <h6 className="text-2xl font-medium mt-5">Solutions Developer</h6>
            </FadeIn>
            <FadeIn>
              <p className="font-light mt-5">Aside from working as a freelancer, I can also work as a team member. Being a Solutions Developer has a big role in providing a transparent delivery and successful solutions through Scrum Methodology. </p>
            </FadeIn>
          </div>
          <div className="md:w-1/2 w-full md:pl-10 xl:py-20 pt-10">
            <FadeIn>
              <div>
                {isDarkMode ? 
                  <StaticImage 
                    src={'../../images/icons/backend-dark.png'} 
                    alt="Responsive" 
                    placeholder="blurred"
                    className="w-12"
                  /> : 
                  <StaticImage 
                    src={'../../images/icons/backend.png'} 
                    alt="Responsive" 
                    placeholder="blurred"
                    className="w-12"
                  />
                }
              </div>
            </FadeIn>
            <FadeIn>
              <h6 className="text-2xl font-medium mt-5">Fullstack Developer</h6>
            </FadeIn>
            <FadeIn>
              <p className="font-light mt-5">My capability is not only limited to Graphic Designing and Web Developing. I also incorporate these two skills in an instance. I also have knowledge of Backend Development particularly in Laravel API Resource.</p>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
