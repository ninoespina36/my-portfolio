import React from "react";
import { useMeasure } from "react-use";
// import { useSelector } from 'react-redux';

import Layout from "../components/Layout";

export default function IndexPage(){

  // const { work } = useSelector(state => state.work);
  const [introRef, { height }] = useMeasure();

  console.log(height)

  return (
    <Layout>
      <div className="h-screen intro pt-10" ref={introRef}>
        <div className="p-20 sticky top-0">
          <h1 className="text-3xl font-bold">Sample Text</h1>
          <h3 className="text-lg text-gray-800 my-1">This is a sample text</h3>
          <p className="text-gray-600 text-sm">Another sample text</p>
        </div>
      </div>
      <div className="h-screen bg-gray-100"></div>
    </Layout>
  )
}
