import React, { useState } from "react";
// import _ from 'underscore';

import Header from "./Header";
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

  const [ active ] = useState(false);

  return (
    <div>
      <Header />
      <div className={`page-container ${active && 'modal-shown'}`}>
        <main>{children}</main>
      </div>
    </div>
  )
}