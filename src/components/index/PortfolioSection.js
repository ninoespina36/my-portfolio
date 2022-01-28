import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import FadeIn from "../animations/FadeIn";
import Glare from '../tilt/Glare';

export default function PortfolioSection(){
  return (
    <div className="min-h-screen xl:py-28 py-16 bg-white dark:bg-gray-700" id="portfolio">
      <div className="max-container  text-gray-800">
        <div className="grid grid-cols-12">
            <div className="lg:col-span-8 col-span-12 lg:pr-3 pb-6">
              <FadeIn>
                <div className="md:p-20 p-10 rounded-corner bg-gray-100 dark:bg-gray-600 dark:border-gray-700 border portfolio-box relative overflow-hidden">
                    <div className="text-gradient">
                      <h1 className="md:text-7xl text-4xl font-semibold">Portfolio.</h1>
                  </div>
                  <p className="text-gray-400 mt-2">Here are some of my works.</p>
                  <StaticImage 
                    src="../../images/portfolio.png" 
                    alt="Portfolio" 
                    placeholder="blurred"
                    className="absolute bottom-0 right-0 w-1/3"
                    objectFit="contain"
                  />
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 lg:pl-3 pb-6 lg:pr-0 md:pr-3">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-gray-600 to-gray-700 border dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/faagency.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12 lg:pr-3 pb-6 md:pl-3 lg:pl-0">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-blue-50  to-blue-100 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/aventis.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-5 md:col-span-6 col-span-12 lg:px-3 md:pr-3 pb-6">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-pink-50 to-yellow-50 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/metro.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 md:pl-3 pb-6">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-purple-100 to-blue-100 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/bq.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 md:pr-3 pb-6">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-gray-50 to-blue-50 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/core1.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-5 md:col-span-6 col-span-12 lg:px-3 md:pl-3 pb-6">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-red-100 to-gray-100 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/tour.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12 lg:pl-3 lg:pr-0 md:pr-3 pb-6">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-green-900 to-gray-700 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/wedding.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 lg:pr-3 lg:pl-0 md:pl-3 pb-6">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-yellow-100 to-purple-200 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/debut.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 lg:px-3 md:pr-3 pb-6">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-green-100 to-yellow-50 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/cleanairattics.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 md:pl-3 pb-6">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-gray-100 to-green-50 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/portfolio.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 md:pr-3 pb-6">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-gray-50 to-blue-50 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/core2.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12 lg:px-3 md:pl-3 pb-6">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner  bg-gradient-to-br from-blue-100 to-yellow-100 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                        src="../../images/works/affiliatesaas.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-5 md:col-span-6 col-span-12 lg:pl-3 md:pr-3 lg:pr-0 pb-6">
              <FadeIn>
                <div>
                  <Glare>
                    <div className="p-20 rounded-corner bg-gradient-to-br from-red-50 to-blue-50 border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                        <StaticImage 
                          src="../../images/works/chasdei.png" 
                          alt="Portfolio" 
                          placeholder="blurred"
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Glare>
                </div>
              </FadeIn>
            </div>
        </div>
      </div>
    </div>
  )
}
