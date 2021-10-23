import * as React from "react";
import { useSelector } from 'react-redux';

import Layout from "../components/Layout";

export default function IndexPage(){

  const { work } = useSelector(state => state.work);

  console.log(work)

  return (
    <Layout>
      <div className="p-10">
      </div>
    </Layout>
  )
}
