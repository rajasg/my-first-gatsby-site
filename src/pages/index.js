// Step 1: Import React
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// Step 2: Define Component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my website!</p>
    </Layout>
  )
}

// Step 3: Export Component 
export default IndexPage
