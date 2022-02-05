import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import InfoHeader from "./InfoHeader";
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useStaticQuery, graphql } from "gatsby";

export default function Layout({ children }){

  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  const { isDarkMode } = useSelector(state => state.util);

  useEffect(()=>{
    const body = document.querySelector('body');
    let isMounted = true;
   
    if(isMounted){
      window.scrollTo(0, 0);
      if(window.pageYOffset === 0){
        body.classList.add('overflow-hidden');
      }
      setTimeout(()=> body.classList.remove('overflow-hidden'), 4200);
    }
    return ()=> isMounted = false;
  }, [])

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-800">
        <ToastContainer />

        <Helmet>
          <meta charSet="utf-8" />
          <title>Niño Espina</title>
        </Helmet>

        <InfoHeader />

        <Header />
      
        <div className="page-container">
          <main>{children}</main>
        </div>

        <Footer />
      </div>
    </div>
  )
}