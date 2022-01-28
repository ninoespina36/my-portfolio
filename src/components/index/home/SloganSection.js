import React, { Fragment } from 'react';
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { StaticImage } from "gatsby-plugin-image";

import { _XL, _MD, isScreenGreater } from '../../../Helpers';

export default function SloganSection(){

    return (
        <section className="bg-gray-200 dark:bg-gray-900 md:pb-40 pb-36 -mb-24">
            <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration={600}
                    pin={!!isScreenGreater(_XL)}
                >
                {progress => (
                    <div className="max-container relative xl:h-screen flex items-center justify-center">
                        <Timeline 
                            totalProgress={isScreenGreater(_XL) ? progress : 1} 
                            paused
                            target={
                                <Fragment>
                                    <div className="h-full w-full absolute xl:top-10 top-5 left-0 right-0 mx-auto md:block hidden">
                                        <StaticImage 
                                            src="../../../images/screen.png" 
                                            alt="Monitor" 
                                            placeholder="blurred" 
                                            className="w-full h-full"
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <h1 className="lg:text-8xl md:text-5xl text-3xl lg:p-0 md:p-20 sm:p-10 md:pt-0 pt-10 font-semibold text-gray-700 dark:text-gray-200">
                                            <span className="block md:mb-5 mb-2">Not just </span>
                                            <span className="block md:mb-5 mb-2">the <span className="text-green-400"> Appearance, </span></span>
                                            <span className="block md:mb-5 mb-2">but also the </span>
                                            <span className="block mb-5 text-green-400">Functionality.</span>
                                        </h1>
                                        <h2 className="font-semibold md:text-4xl text-2xl text-right text-gray-700 dark:text-gray-200 flex items-center justify-end">
                                            <span className="mr-2">- Yours Truly</span> 
                                            <HiOutlineEmojiHappy size={60} className="text-green-400"/>
                                        </h2>
                                    </div>
                                </Fragment>
                            }
                        >
                            <Tween
                                from={{ scale: 3, opacity: 0, visibility: 'hidden' }}
                                to={{ scale: 0.8, opacity: 1, visibility: 'visible' }}
                                target={0}
                                position={0}
                                ease="sine.out"
                            />
                            <Tween
                                from={{ scale: 1 }}
                                to={{ scale: isScreenGreater(_MD) ? 0.4 : 1 }}
                                target={1}
                                position={0}
                                ease="sine.out"
                            />
                        </Timeline>
                    </div>
                )}
                </Scene>
            </Controller> 
        </section>
    )
}