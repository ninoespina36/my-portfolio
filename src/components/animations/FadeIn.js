import React from 'react';
import { Reveal, Tween } from 'react-gsap';

export default function FadeIn({ children }){
    return (
        <Reveal repeat>
            <Tween 
                from={{ opacity: 0, y: 50 }} 
                to={{ opacity: 1, y: 0 }} 
                ease="elastic.out(1,1)"
            >
              {children}
            </Tween>
        </Reveal>
    )
}