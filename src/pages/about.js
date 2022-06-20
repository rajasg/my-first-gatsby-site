// Step 1: Import React
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// Step 2: Create Component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>I'm Rajas</p>
        </Layout>
    )
}

// Step 3: Export Component
export default AboutPage;