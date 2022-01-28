import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function Glare({ children }){
    return (
        <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="#fff" glarePosition="all" glareBorderRadius="40px">
            <div>
                {children}
            </div>
        </Tilt>
    )
}