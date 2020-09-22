import React from "react";

import {Helmet} from "react-helmet";

import Body from "../components/body";
import SEO from "../components/seo";



function App() {
    return (  
    <div>
        <Helmet>
        <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Noto+Sans&display=swap"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
        />;
        <html lang="en" />
        </Helmet>
        <SEO 
        title="Overdue Studio"
        description="Overdue studio is a visual design studio creating thoughtful design digitally and physically."/>
        <Body></Body>
    </div>
    ) 
}

export default App 