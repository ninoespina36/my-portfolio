import React, { Fragment } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { StaticImage } from "gatsby-plugin-image";
import { useSelector } from 'react-redux';

import { _XL, isScreenGreater } from '../../../Helpers';
import FadeIn from '../../animations/FadeIn';
import Glare from '../../tilt/Glare';

export default function LibrariesSection(){

    const { isDarkMode } = useSelector(state => state.util);

    return (
        <>
        <section className="max-container text-center">
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
                                    <div className="lg:h-40 w-40">
                                        <Glare>
                                            <div className="intro-grid-img bg-gray-50 border dark:border-gray-500">
                                                <StaticImage 
                                                    src="../../../images/tailwind.png" 
                                                    alt="Tailwind.CSS" 
                                                    placeholder="blurred"
                                                />
                                            </div>
                                        </Glare>
                                    </div>
                                    <div className="lg:h-40 w-40">
                                        <Glare>
                                            <div className="intro-grid-img bg-gradient-to-b from-purple-500 to-purple-600">
                                                <StaticImage 
                                                    src="../../../images/bootstrap.png" 
                                                    alt="Bootstrap" 
                                                    placeholder="blurred"
                                                />
                                            </div>
                                        </Glare>
                                    </div>
                                    <div className="lg:h-40 w-40">
                                        <Glare>
                                            <div className="intro-grid-img bg-gradient-to-b from-gray-700 to-gray-800">
                                                <StaticImage 
                                                    src="../../../images/react.png" 
                                                    alt="React.JS" 
                                                    placeholder="blurred"
                                                />
                                            </div>
                                        </Glare>
                                    </div>
                                    <div className="lg:h-40 w-40">
                                        <Glare>
                                            <div className="intro-grid-img bg-gradient-to-br from-pink-300 to-pink-400 border dark:border-gray-500">
                                                <StaticImage 
                                                    src="../../../images/sass.png" 
                                                    alt="SASS" 
                                                    placeholder="blurred"
                                                />
                                            </div>
                                        </Glare>
                                    </div>
                                    <div className="lg:h-40 w-40">
                                        <Glare>
                                        <div className="intro-grid-img bg-gray-50 border dark:border-gray-500">
                                            <StaticImage 
                                                src="../../../images/redux.png" 
                                                alt="Redux" 
                                                placeholder="blurred"
                                            />
                                        </div>
                                        </Glare>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={isDarkMode ? "#111827" : "#e5e7eb"} fillOpacity="1" d="M0,96L120,133.3C240,171,480,245,720,240C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </>
    )
}