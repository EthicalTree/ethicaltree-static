import React from "react"
import { Link } from "gatsby"
import etlogo from '../images/etlogo.svg'

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <img width='300px' src={etlogo} />
    <h1>It's time to say goodbye</h1>
    <p>
      EthicalTree has been a passion project by&nbsp;
      <a target='_blank' href='https://www.linkedin.com/in/frankjferris/'>Frank Ferris</a>,&nbsp;
      <a target='_blank' href='https://www.linkedin.com/in/siavash-ghazvinian/'>Siavash Ghazvinian</a>, and&nbsp;
      <a target='_blank' href='https://www.linkedin.com/in/william-curtis-collins/'>William Collins</a>.
    </p>
    <p>
      Unfortunately, we do not have the means to keep EthicalTree up and running.
      Thank you to everyone who has supported this project over the years, we couldn't be happier to be involved in this amazing community :)
    </p>
  </Layout>
)

export default IndexPage
