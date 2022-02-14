import React, { useEffect, useState, useRef } from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { useSelector } from "react-redux";
import { ImMobile } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import Modal from 'react-modal';
import _ from 'underscore';

import FadeIn from "../animations/FadeIn";
import Glare from '../tilt/Glare';

const WorkColumn  = ({ gridClassNames, lightModeClasses, image_node, showModal }) =>{
  return (
    <div className={`${gridClassNames} md:col-span-6 col-span-12 pb-6`}>
      <FadeIn>
        <div onClick={showModal}>
          <Glare>
            <div className={`${lightModeClasses} p-20 rounded-corner bg-gradient-to-br border dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 portfolio-box relative overflow-hidden`}>
              <div className="absolute bottom-0 right-0 w-full h-full p-10 flex items-center justify-center">
                <GatsbyImage 
                  image={getImage(image_node)}
                  alt="Portfolio" 
                  className="rounded-lg shadow-lg"
                  objectFit="cover"
                />
              </div>
            </div>
          </Glare>
        </div>
      </FadeIn>
    </div>
  )
}

export default function PortfolioSection(){

  const [ isModalOpen, setModalOpen ] = useState(false);
  const [ isMobile, setMobile ] = useState(false);
  const [ works, setWorks ] = useState([]);
  const [ activeWork, setActiveWork ] = useState({});
  const { isDarkMode } = useSelector(state => state.util);
  const mobileScreen = useRef(null);
  const desktopScreen = useRef(null);

  const showModal = (work) =>{
    setModalOpen(true);
    setActiveWork(work);
  }

  const toggleScreen = e =>{
    e.preventDefault();
    setMobile(!isMobile);
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.10)",
      backdropFilter: 'blur(20px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 60
    },
    content: {
      zIndex: 61,
      position: 'static',
      borderRadius: 40,
      backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255,255,255,0.7)',
      border: 'none'
    },
  };
  
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              works {
                image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                gridClassNames
                lightModeClasses
                name
                description
                link
                screens {
                  mobile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  web {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  useEffect(()=>{
    let isMounted = true;
    if(isMounted){
      setWorks(query?.allMarkdownRemark?.edges[0]?.node?.frontmatter?.works.map(item=>{
        return {
          image_node: item.image,
          ...item
        }
      }))
    }
    return ()=> isMounted = false;
  }, [ query?.allMarkdownRemark?.edges ]);

  useEffect(()=>{
    let isMounted = true;
    if(isMounted){
      if(!!mobileScreen.current) mobileScreen.current.scrollTop = 0; 
      if(!!desktopScreen.current) desktopScreen.current.scrollTop = 0;
    }
    return ()=> isMounted = false;
  }, [ isMobile ])

  return (
    <div className="min-h-screen xl:py-28 py-16 bg-white dark:bg-gray-700" id="portfolio">

      <Modal
        isOpen={isModalOpen}
        onRequestClose={()=>setModalOpen(false)}
        onAfterClose={()=>setMobile(false)}
        style={customStyles}
        closeTimeoutMS={300}
      >
        <div>
          {isMobile ? (
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 overflow-y-scroll mobile_work__screen" ref={mobileScreen}>
                {!_.isEmpty(activeWork) && (
                  <GatsbyImage 
                    image={getImage(activeWork?.screens?.mobile[0])}
                    alt="Screen" 
                    placeholder="blurred"
                    className="w-full block"
                  />
                )}
              </div>
                <StaticImage 
                  src="../../images/mobile-screen.png" 
                  alt="Screen" 
                  placeholder="blurred"
                  className="w-3/4 mx-auto block"
                />
            </div>
          ) : (
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 overflow-y-scroll web_work__screen" ref={desktopScreen}>
                {!_.isEmpty(activeWork) && (
                  <GatsbyImage 
                    image={getImage(activeWork?.screens?.web[0])}
                    alt="Screen" 
                    placeholder="blurred"
                    className="w-full block"
                  />
                )}
              </div>
              <StaticImage 
                src="../../images/computer-screen.png" 
                alt="Screen" 
                placeholder="blurred"
                className="w-3/4 mx-auto block"
              />
            </div>
          )}
          <div className="flex items-center justify-center gap-x-5 mt-5">
            <button 
              onClick={toggleScreen}
              className="w-14 h-14 bg-opacity-75 bg-white hover:bg-gray-200 transition-all duration-200 rounded-full flex items-center justify-center text-primary"
            >
              {isMobile ? <FiMonitor size={25}/> : <ImMobile size={25}/>}
            </button>
          </div>
        </div>
      </Modal>

      <div className="max-container  text-gray-800">
        <div className="grid grid-cols-12">
            <div className="lg:col-span-8 col-span-12 lg:pr-3 pb-6">
              <FadeIn>
                <div className="md:p-20 p-10 rounded-corner bg-gray-100 dark:bg-gray-600 dark:border-gray-700 border portfolio-box relative overflow-hidden">
                    <div className="text-gradient">
                      <h1 className="md:text-7xl text-4xl font-semibold">Portfolio.</h1>
                  </div>
                  <p className="text-gray-400 mt-2">Here are some of my works.</p>
                  <StaticImage 
                    src="../../images/portfolio.png" 
                    alt="Portfolio" 
                    placeholder="blurred"
                    className="absolute bottom-0 right-0 w-1/3"
                    objectFit="contain"
                  />
                </div>
              </FadeIn>
            </div>
            {works.map((item, index)=>(
              <WorkColumn 
                key={index}
                showModal={()=>showModal(item)}
                {...item}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
