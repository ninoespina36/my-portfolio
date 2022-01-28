import React, { useEffect } from "react";
import anime from "animejs";
import { StaticImage } from "gatsby-plugin-image";

export default function ScrollSection(){

    useEffect(()=>{

        const titleAnimation = anime({
          targets: '.content',
          translateY: [{
              value: 800,
              duration: 1000
          }],
          scale: [{
            value: 0.3,
            delay: 200,
            duration: 650
          }],
          easing: 'easeInOutSine',
          autoplay: false,
        });
    
        const monitorAnimation = anime({
          targets: '.monitor',
          translateY: 800,
          scale: [{
            value:[5, 0.8],
            delay: 200,
            duration: 650,
          }],
          easing: 'easeInOutSine',
          autoplay: false,
        });

        const screenTimeline = anime.timeline({ autoplay: false });

        screenTimeline
        .add({
          targets: '.screen1',
          opacity: [0,1],
          duration: 1000,
          easing: 'easeOutExpo'
        })
        .add({
          targets: '.screen2',
          opacity: [0,1],
          duration: 500,
          easing: 'easeOutExpo',
        });

        const shineAnimation = anime({
          targets: '.shine',
          translateX: [{
              value: [-180, 1000],
              duration: 800,
              delay: 1000
          }],
          opacity: [{
              value: [1,0],
              duration: 1100,
              delay: 500
          }],
          rotate: 20,
          easing: 'easeInOutSine',
        })
    
        const subtitleAnimation = anime({
          targets: '.subtitle',
          color: ['#374151', '#fff'],
          easing: 'easeOutExpo',
          autoplay: false
        });
    
        const imgAnimation = anime({
          targets: '.intro-grid-img',
          backgroundColor: ['#fff', 'rgba(0,0,0,0.5)'],
          easing: 'easeInOutSine',
          autoplay: false
        });
        
        const scroller = () =>{
          const offset = window.pageYOffset * 1.4;
          const reactElem = document.querySelector('.react');
          const titleElem = document.querySelector('.intro-text-gradient');
          titleAnimation.seek(offset);
          monitorAnimation.seek(offset);
          screenTimeline.seek(offset);
          subtitleAnimation.seek(offset);
          shineAnimation.seek(offset);
          imgAnimation.seek(offset);
          if(offset > 200){
            reactElem.classList.remove('animate-spin-slow');
            titleElem.classList.remove('hovered');
          }
          else{
            reactElem.classList.add('animate-spin-slow');
            titleElem.classList.add('hovered');
          }
        }
    
        scroller();
        window.addEventListener('scroll', scroller);
        return () => window.removeEventListener('scroll', scroller);
    }, []);

    return (
        <section className="intro pt-10 relative" style={{ height: '150vh' }} id="home">

            <div  className="relative py-20 content z-50">
              <div>
                <h1 className="text-8xl font-bold intro-text-gradient hovered">
                  <span className="block mb-5">I'm Niño Espina,</span>
                  <span className="block mb-5">Web Developer</span>
                </h1>
                <h1 className="text-8xl font-bold subtitle">
                  <span className="block mb-5">from the</span>
                  <span className="block mb-5">Philippines<span className="font-serif">.</span></span>
                </h1>
              </div>
              <div className="intro-text-img absolute right-0 top-0 transform translate-y-3/4 flex flex-wrap">
                <div className="w-1/2 h-1/2 p-4">
                  <div className="h-full w-full intro-grid-img">
                    <StaticImage src="../../images/react.png" alt="React.JS" placeholder="blurred" className="react animate-spin-slow"/>
                  </div>
                </div>
                <div className="w-1/2 h-1/2 p-4">
                  <div className="h-full w-full intro-grid-img">
                    <StaticImage src="../../images/tailwind.png" alt="Tailwind.CSS" placeholder="blurred"/>
                  </div>
                </div>
                <div className="w-1/2 h-1/2 p-4">
                  <div className="h-full w-full intro-grid-img">
                    <StaticImage src="../../images/node.png" alt="Node.JS" placeholder="blurred"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute monitor 3xl:top-32 top-36">
                <div 
                  className="absolute screen2 bg-cover bg-center overflow-hidden z-10" 
                  style={{ width: '63%', height: '67%', top: '4%', left: '18%', backgroundImage: 'url(https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}}>  
                    <div className="w-16 -top-12 left-0 bg-white absolute bg-opacity-50 blur-lg shine brightness-110" style={{ height: '200%' }}></div>
                </div>
                <div 
                  className="absolute screen1 bg-cover bg-center overflow-hidden" 
                  style={{ width: '63%', height: '67%', top: '4%', left: '18%', backgroundImage: 'url(https://images.pexels.com/photos/3874719/pexels-photo-3874719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}}> 
                </div>
              <StaticImage src="../../images/screen.png" alt="Screen" placeholder="blurred" className="block mx-auto z-20"/>
            </div>
            
        </section>
    )
}