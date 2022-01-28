import React from 'react';

export default function Footer(){

    return (
        <footer className="bg-gray-200 dark:bg-gray-900 xl:py-28 py-16">
            <div className="max-container">
            <div className="grid grid-cols-12 text-sm dark:text-gray-200">
                <div className="md:col-span-3 col-span-12 md:pb-0 pb-10">
                    <h5 className="mb-2 font-medium">Technology Used</h5>
                    <ul className="text-xs">
                        <li className="footer-item mb-1"><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></li>
                        <li className="footer-item mb-1"><a href="https://redux.js.org/" target="_blank" rel="noreferrer">React Redux</a></li>
                        <li className="footer-item mb-1"><a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a></li>
                        <li className="footer-item mb-1"><a href="https://greensock.com/react/" target="_blank" rel="noreferrer">React Gsap</a></li>
                        <li className="footer-item mb-1"><a href="https://scrollmagic.io/" target="_blank" rel="noreferrer">ScrollMagic</a></li>
                        <li className="footer-item mb-1"><a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer">React Icons</a></li>
                    </ul>
                </div>
                <div className="md:col-span-3 col-span-12 md:pb-0 pb-10">
                    <h5 className="mb-2 font-medium">JavaScript I know</h5>
                    <ul className="text-xs">
                        <li className="footer-item mb-1"><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></li>
                        <li className="footer-item mb-1"><a href="https://reactnative.dev/" target="_blank" rel="noreferrer">React Native</a></li>
                        <li className="footer-item mb-1"><a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue</a></li>
                        <li className="footer-item mb-1"><a href="https://angular.io/" target="_blank" rel="noreferrer">Angular</a></li>
                        <li className="footer-item mb-1"><a href="https://ionicframework.com/" target="_blank" rel="noreferrer">Ionic</a></li>
                        <li className="footer-item mb-1"><a href="https://jquery.com/" target="_blank" rel="noreferrer">JQuery</a></li>
                    </ul>
                </div>
                    <div className="md:col-span-3 col-span-12 md:pb-0 pb-10">
                    <h5 className="mb-2 font-medium">CSS Libraries/Frameworks</h5>
                    <ul className="text-xs">
                        <li className="footer-item mb-1"><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">TailwindCSS</a></li>
                        <li className="footer-item mb-1"><a href="https://daisyui.com/" target="_blank" rel="noreferrer">DaisyUI</a></li>
                        <li className="footer-item mb-1"><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a></li>
                        <li className="footer-item mb-1"><a href="https://semantic-ui.com/" target="_blank" rel="noreferrer">Semantic UI</a></li>
                        <li className="footer-item mb-1"><a href="https://mui.com/" target="_blank" rel="noreferrer">Material</a></li>
                        <li className="footer-item mb-1"><a href="https://sass-lang.com/" target="_blank" rel="noreferrer">Sass</a></li>
                    </ul>
                </div>
                <div className="md:col-span-3 col-span-12 md:pb-0 pb-10">
                    <h5 className="mb-2 font-medium">Others</h5>
                    <ul className="text-xs">
                        <li className="footer-item mb-1"><a href="https://www.adobe.com/sea/products/photoshop.html" target="_blank" rel="noreferrer">Adobe Photoshop</a></li>
                        <li className="footer-item mb-1"><a href="https://laravel.com/" target="_blank" rel="noreferrer">Laravel</a></li>
                        <li className="footer-item mb-1"><a href="https://wordpress.org/" target="_blank" rel="noreferrer">WordPress</a></li>
                        <li className="footer-item mb-1"><a href="https://elementor.com/" target="_blank" rel="noreferrer">Elementor</a></li>
                        <li className="footer-item mb-1"><a href="https://paypal.com/" target="_blank" rel="noreferrer">Paypal API</a></li>
                        <li className="footer-item mb-1"><a href="https://pusher.com/docs/channels/getting_started/javascript/" target="_blank" rel="noreferrer">Pusher.JS</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex items-center justify-between text-xs border-t border-gray-300 dark:border-gray-800 pt-10 mt-10 dark:text-gray-200">
                <span>Copyright &copy; 2022 Niño Espina. </span>
                <span>All rights reserved.</span>
            </div>

            </div>
        </footer>
    )
}