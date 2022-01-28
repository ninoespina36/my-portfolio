import React, { Fragment } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { StaticImage } from "gatsby-plugin-image";

import { _XL, isScreenGreater } from '../../../Helpers';
import FadeIn from '../../animations/FadeIn';

export default function LibrariesSection(){

    return (
        <section className="xl:pb-40 pb-20 max-container text-center">
            <FadeIn>
            <h1 className="xl:text-3xl lg:text-2xl text-lg font-semibold text-gray-800 dark:text-gray-200 xl:mb-20 mb-10 xl:mt-10 mt-5">With these technology.</h1>
            </FadeIn>
            <Controller>
                <Scene
                    triggerHook="onEnter"
                    duration={600}
                >
                {progress => (
                    <div className="flex justify-center lg:gap-x-10 gap-x-4 items-center">
                        <Timeline 
                            paused
                            totalProgress={isScreenGreater(_XL) ? progress : 1} 
                            target={
                                <Fragment>
                                    <div className="lg:h-40 w-40 intro-grid-img bg-gray-50 border dark:border-gray-500">
                                        <StaticImage 
                                            src="../../../images/tailwind.png" 
                                            alt="Tailwind.CSS" 
                                            placeholder="blurred"
                                        />
                                    </div>
                                    <div className="lg:h-40 w-40 intro-grid-img bg-gradient-to-b from-purple-500 to-purple-600">
                                        <StaticImage 
                                            src="../../../images/bootstrap.png" 
                                            alt="Bootstrap" 
                                            placeholder="blurred"
                                        />
                                    </div>
                                    <div className="lg:h-40 w-40 intro-grid-img bg-gradient-to-b from-gray-700 to-gray-800">
                                        <StaticImage 
                                            src="../../../images/react.png" 
                                            alt="React.JS" 
                                            placeholder="blurred"
                                        />
                                    </div>
                                    <div className="lg:h-40 w-40 intro-grid-img bg-gradient-to-br from-pink-300 to-pink-400 border dark:border-gray-500">
                                        <StaticImage 
                                            src="../../../images/sass.png" 
                                            alt="SASS" 
                                            placeholder="blurred"
                                        />
                                    </div>
                                    <div className="lg:h-40 w-40 intro-grid-img bg-gray-50 border dark:border-gray-500">
                                        <StaticImage 
                                            src="../../../images/redux.png" 
                                            alt="Redux" 
                                            placeholder="blurred"
                                        />
                                    </div>
                                </Fragment>
                            }
                        >
                            <Tween
                                from={{ scale: 0.5, opacity: 0, x: -100, }}
                                to={{ scale: 1, opacity: 1, x: 0 }}
                                target={0}
                                position={0}
                            />
                            <Tween
                                from={{ scale: 0.5, opacity: 0, x: -50 }}
                                to={{ scale: 1, opacity: 1, x: 0 }}
                                target={1}
                                position={0}
                            />
                            <Tween
                                from={{ scale: 0.5, opacity: 0 }}
                                to={{ scale: 1, opacity: 1 }}
                                target={2}
                                position={0}
                            />
                            <Tween
                                from={{ scale: 0.5, opacity: 0, x: 50, }}
                                to={{ scale: 1, opacity: 1, x: 0 }}
                                target={3}
                                position={0}
                            />
                            <Tween
                                from={{ scale: 0.5, opacity: 0, x: 100 }}
                                to={{ scale: 1, opacity: 1, x: 0 }}
                                target={4}
                                position={0}
                            />
                        </Timeline>
                    </div>
                )}
                </Scene>
            </Controller> 
        </section>
    )
}