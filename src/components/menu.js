import React, { useState } from "react";
import styled from "styled-components";
import {Helmet} from "react-helmet";

const Menubkg = styled.div`
width: 100%;
height: 100vh;
position: absolute;
background-color: purple;
clip-path: ${({div}) => (div ? "circle(1000px at 50%)" : "circle(10px at 87% 9.6%)")};
transition: height 800ms ease-in-out, clip-path 800ms ease-in-out;
z-index: 3;
`

const Cross = styled.div`
top: 50%;
left: 50%;
position: absolute;
background: orange;
z-index: 4;
/* transform: translate(0%, 0%); */
svg {
      transform: ${({div}) => (div ? "rotate(45deg)" : "")};
      transition: transform 400ms ease-in-out;
      background-color: white;
      border-radius: 500px;
      width: auto;
      cursor: pointer;
    }
`

function Menu() {

    const [div, showNav] = useState(false);
    const close = () => showNav(!div);

    return(
        <div>
        <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Noto+Sans&display=swap"
                    rel="stylesheet"
                />;
            </Helmet>
        <Menubkg div={div}></Menubkg>
    </div>
    )

}

export default Menu