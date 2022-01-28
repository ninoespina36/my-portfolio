import React, { Fragment } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { StaticImage } from "gatsby-plugin-image";

import { _XL, isScreenGreater } from '../../../Helpers';

export default function IntroSection(){

    return (
      <section>
        <div className="relative w-full xl:-mt-64 xl:-mb-36">
            <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration={600}
                    pin={!!isScreenGreater(_XL)}
                >
                {progress => (
                    <div className="w-full relative xl:h-screen overflow-hidden">
                        <Timeline 
                            totalProgress={isScreenGreater(_XL) ? progress : 1} 
                            paused
                            target={
                                <Fragment>
                                    <div className="w-full h-full xl:absolute flex items-center xl:justify-end justify-center right-1/4 top-0 text-right overflow-hidden">
                                        <div className="xl:text-left text-center sm:text-7xl text-5xl">
                                            <h1 className="font-semibold text-gray-800 dark:text-gray-200">Everything is</h1>
                                            <h1 className="font-semibold sm:mt-5 mt-2 dark:text-gray-200"><span className="text-green-700 dark:text-green-500">fast</span> and</h1>
                                            <h1 className="font-semibold sm:mt-5 mt-2 text-green-700 dark:text-green-500">responsive.</h1>
                                        </div>
                                    </div>
                                    <div className="w-full h-full xl:absolute left-1/2 z-30 flex items-center xl:justify-start justify-center mt-20 xl:mt-0 mb-20 xl:mb-0">
                                        <StaticImage 
                                            src="../../../images/mockup.png" 
                                            alt="Responsive" 
                                            placeholder="blurred"
                                            className="xl:w-5/12 w-3/4 transform xl:-translate-x-1/2 flex-shrink-0"
                                        />
                                    </div>
                                </Fragment>
                            }
                        >
                            <Tween
                                from={{ x: 0, opacity: 0 }}
                                to={{ x: isScreenGreater(_XL) && '-30%', opacity: 1 }}
                                target={0}
                                position={0}
                            />
                            <Tween
                                to={{ scale: 0.7 }}
                                target={1}
                                position={0}
                            />
                        </Timeline>
                    </div>
                )}
                </Scene>
            </Controller> 
        </div>
      </section>
    )
}