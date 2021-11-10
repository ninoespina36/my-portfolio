import React from 'react';

export default function Header(){
    return (
        <nav className="h-10 bg-green-100 sticky top-0 w-full z-10">
            <div className="max-w-7xl mx-auto h-full">
                <div className="flex items-center justify-between h-full">
                    <h5 className="mx-2">Logo</h5>
                    <ul className="flex items-center justify-center h-full">
                        <li className="h-full">
                            <a href="" className="nav-item">Home</a>
                        </li>
                        <li className="h-full">
                            <a href="" className="nav-item">Projects</a>
                        </li>
                        <li className="h-full">
                            <a href="" className="nav-item">Contact</a>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
        </nav>
    )
}