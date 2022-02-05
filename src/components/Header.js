import React from 'react';
import { Link } from 'react-scroll';
import { Tween } from 'react-gsap';
import { useSelector, useDispatch } from 'react-redux';

import { toggleDarkMode } from '../store/reducers/utilReducer';

export default function Header(){

    const menu =  [
        { name: 'About', path: 'about' },
        { name: 'Portfolio', path: 'portfolio' },
        { name: 'Contact', path: 'contact' },
    ];
    const { isDarkMode } = useSelector(state => state.util);
    const dispatch = useDispatch();

    return (
        <Tween
            from={{ opacity: 0, y: '-2.5rem' }}
            to={{ opacity: 1 , y: '0' }}
            duration={1}
            delay={2.5}
        > 
        <nav className="h-14 sticky top-0 w-full z-50 border-b dark:border-gray-700 primary-navbar">
            <div className="max-container h-full">
               
                <div className="flex items-center justify-between h-full">
                    <Link 
                        to="home" 
                        smooth={true} 
                        spy={true} 
                        duration={800}
                        className="cursor-pointer hover:text-ninz-500 transition-all duration-200 dark:text-gray-200"
                    >
                        <h5 className="font-bold">Niño Espina</h5>
                    </Link>
                    
                    <ul className="flex items-center justify-center h-full gap-x-12">
                        {menu.map((item, index)=>(
                            <li className="h-full sm:block hidden" key={index}>
                                <Link 
                                    to={item.path} 
                                    className="primary-navbar__nav-item" 
                                    smooth={true} 
                                    duration={800} 
                                    spy={true}
                                    activeClass="text-ninz-500"
                                >{item.name}</Link>
                            </li>
                        ))}
                        <li className="h-full flex items-center text-sm">
                            <input type="checkbox" checked={isDarkMode} className="toggle" onChange={()=>dispatch(toggleDarkMode())}/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </Tween>
    )
}