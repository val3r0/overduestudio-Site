import React, { useState } from "react";
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import scrollTo from 'gatsby-plugin-smoothscroll';
import {Helmet} from "react-helmet";

const GlobalStyle = createGlobalStyle`
    :root {
      font-size: calc(1vw + 1vh + .5vmin);
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        overflow-y: ${({div}) => (div ? "hidden" : "auto")};
        overflow-x: hidden;
    }
    li {
        list-style: none;
    }
    ul {
        padding: 0;
    }
`;

const Wrapper = styled.div`
width: 100%;
height: auto;
position: absolute;
display: flex;
flex-direction: column;
`

const Menubkg = styled.div`
width: 100%;
height: 100vh;
position: absolute;
background: white;
clip-path: ${({div}) => (div ? "circle(1000px at 50%)" : "circle(2px at 84% 8%)")};
transition: height 800ms ease-in-out, clip-path 800ms ease-in-out;
z-index: 3;
`


const Menuwrapper = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
padding: 2em;
display: grid;
grid-template: repeat(5, 19vw) / fit-content(40%) fit-content(40%) fit-content(40%);
justify-content: space-between;

li {
  visibility: hidden;
  background: lightcoral;
  z-index: 3000;
}

li:nth-child(1){
    grid-row: 1/2;
    grid-column: 1/2;
  }

  li:nth-child(2){
    position: relative;
    margin: 0 auto;
    grid-row: 1/2;
    grid-column: 2/3;
  }

  li:nth-child(3){
    position: relative;
    grid-row: 1/2;
    grid-column: 3/4;
  }
`
const Menulogo = styled.div`
top: 0;
left: 0;
position: absolute;
margin: 0;
opacity: ${({div}) => (div ? "1" : "0")};
visibility: ${({div}) => (div ? "visible" : "hidden")};
transform: ${({div}) => (div ? "translatey(0)" : "translatey(40px)")};
transition: opacity 800ms ease-in-out, visibility 800ms ease-in-out, transform 600ms ease-in-out;
grid-row: 1/2;
grid-column: 1/2;
z-index: 3;

svg {
  width: 12em;
  height: auto;
}
`
const Social = styled.div`
position: absolute;
top: 50%;
left: 50%;
display: flex;
padding-top: 3em;
margin: 0 auto;
flex-direction: column;
justify-content: center;
opacity: ${({div}) => (div ? "1" : "0")};
visibility: ${({div}) => (div ? "visible" : "hidden")};
transform: ${({div}) => (div ? "translate(-50%, 1em)" : "translate(-50%, 0)")};
transition: opacity 800ms ease-in-out, visibility 800ms ease-in-out, transform 800ms ease-in-out; 
grid-row: 1/2;
grid-column: 3/4;
z-index: 3000;

svg { 
  width: 1em;
  height: 1em;
  margin-bottom: 1.5em;
}


`
const Menudescription = styled.div`
width: 6.5em;
left: 0;
bottom: 0;
padding-bottom: 0.7em;
position: absolute;
font-size: 2.8rem;
font-family: DM Serif Display;
line-height: 122%;
opacity: ${({div}) => (div ? "1" : "0")};
visibility: ${({div}) => (div ? "visible" : "hidden")};
transform: ${({div}) => (div ? "translatey(0)" : "translatey(60px)")};
transition: opacity 800ms ease-in-out, visibility 800ms ease-in-out, transform 600ms ease-in-out;
grid-column: 1/4;
z-index: 3;

p {
  margin: 0;
}

a {
  word-break: break-all;
}
`

const Dotwrapper = styled.div`
height: 100vh;
padding: 2em;
display: flex;
flex-direction: column;
`

const Linewrapper = styled.ul`
display: flex;
margin:0 0 auto 0;
flex-direction: row;
justify-content: space-between;
grid-row: 1/2;

li:nth-child(1),li:nth-child(2) {
  display: none;
}
`
const Secondlinewrapper = styled(Linewrapper)`
margin: auto 0;
`
const Thirdlinewrapper = styled(Linewrapper)`
margin: auto 0;
`
const Forthlinewrapper = styled(Linewrapper)`
margin: auto 0;
`
const Fifthlinewrapper = styled(Linewrapper)`
margin: auto 0 0 0;
`

const Dot = styled.li`
width: 19vw;
height: 19vw;
border-radius: 500px;
background: #0000FF;
`
const Menudot = styled(Dot)`
display: flex;
position: relative;
justify-content: center;
background-color: white;
border: solid 2px #0000FF;
z-index: 3;
`

// Burger menu button ...
const Cross = styled.div`
top: 50%;
left: 50%;
position: absolute;
z-index: 3;
transform: translate(-50%, -35%);
svg {
      transform: ${({div}) => (div ? "rotate(45deg)" : "")};
      transition: transform 400ms ease-in-out;
      background-color: white;
      border-radius: 500px;
      width: auto;
      cursor: pointer;
    }
`

const Arrodwot = styled(Dot)`
svg {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  cursor: pointer;
}
`

const Bottomwrapper = styled.div`
width: 100vw;
display: flex;
padding: 2em;
flex-direction: column;
`
const Specialities= styled.p`
width: auto;
margin: 0;
font-family: 'DM Serif Display', serif;
font-size: 2.98rem;
line-height: 122%;
span {
  color: #0000FF; 
}

p:first-child {
  margin: 0 0 1em 0;
}

p:nth-child(2), p:nth-child(3){
  width: auto;
  margin: 2em 0;
  font-family: 'Noto Sans';
  line-height: 175%;
  font-size: 1.1rem;
}

p:nth-child(3){ 
  margin-bottom: 2em;
}

@media screen and (min-height: 800px) {
  p:nth-child(3){ 
  margin-bottom: 0;
}
}
`
const Btnup = styled(Dot)`
margin: auto 0 0 auto;
background-color: white;
border: solid 2px #0000FF;
svg {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  cursor: pointer;
}
`

function Home() {

  const [div, showNav] = useState(false);
  const scroll = (anchor) => scrollTo(anchor); 
  const close = () => showNav(!div);

  return (
    <div>
    <Wrapper id="top">
      <GlobalStyle div={div}/>
      <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Noto+Sans&display=swap"
        rel="stylesheet"
      />;
      </Helmet>
      <Menubkg div={div}></Menubkg>
      <Menuwrapper>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
        <Menulogo div={div}>
          <svg viewBox="0 0 454 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.7093 43.161C28.9304 40.894 30.037 38.0588 30.037 34.6319C30.037 31.3303 28.9304 28.4853 26.7093 26.1144C24.4648 23.7808 21.789 22.6444 18.7482 22.6444C15.6548 22.6444 12.9809 23.7808 10.7579 26.0537C8.58173 28.3932 7.46339 31.2696 7.46339 34.6319C7.46339 37.8962 8.54269 40.7177 10.7579 43.0944C13.018 45.3947 15.684 46.5704 18.7482 46.5704C21.8339 46.5704 24.4668 45.4398 26.7093 43.161ZM32.0902 20.9966C35.6931 24.7546 37.4867 29.2867 37.4867 34.6319C37.4867 40.077 35.7165 44.5914 32.182 48.1967C30.3473 50.062 28.3527 51.4531 26.075 52.4015C23.8305 53.3048 21.4163 53.7397 18.7482 53.7397C13.3634 53.7397 8.93303 51.9077 5.36138 48.1967C1.79168 44.4386 0 39.9124 0 34.6319C0 29.1926 1.77216 24.6508 5.29307 20.9966C7.14135 19.1312 9.16334 17.7322 11.3864 16.8035C13.6367 15.9061 16.092 15.4613 18.7482 15.4613C24.1018 15.4593 28.5576 17.2874 32.0902 20.9966Z" fill="#0000FF"/>
            <path d="M67.1138 15.4594L56.3833 41.378L45.1511 15.4594H37.4867L54.2364 53.7397H58.8014L74.5948 15.4594H67.1138Z" fill="#0000FF"/>
            <path d="M209.418 15.4594L209.398 37.7982C209.398 39.3265 209.229 40.6648 208.912 41.7679C208.618 42.8495 208.161 43.7156 207.538 44.4288C206.91 45.1361 206.174 45.6318 205.273 46.0159C204.464 46.3803 203.373 46.5606 202.089 46.5606C200.799 46.5606 199.732 46.3803 198.894 46.0159C198.022 45.6299 197.276 45.1361 196.628 44.4288C196.062 43.7156 195.594 42.8515 195.293 41.7679C194.946 40.6628 194.788 39.3265 194.788 37.7492V15.4594H187.486V38.4997C187.486 40.8549 187.795 43.0141 188.478 44.8892C189.124 46.7977 190.17 48.4572 191.552 49.8327C192.918 51.2258 194.538 52.2153 196.322 52.8188C198.02 53.4125 199.974 53.7162 202.087 53.7378C204.195 53.7162 206.127 53.4106 207.847 52.8188C209.67 52.2153 211.26 51.2258 212.658 49.8327C214.022 48.4572 215.066 46.7977 215.732 44.8892C216.37 43.0121 216.706 40.8745 216.706 38.4997V15.4594H209.418Z" fill="#0000FF"/>
            <path d="M129.768 28.9105C130.248 28.5891 130.646 28.1757 130.92 27.6957C131.205 27.2627 131.306 26.7003 131.306 26.0106C131.306 25.1446 130.824 24.3412 129.805 23.6496C128.654 22.9089 127.04 22.5621 125.012 22.5621H121.062V29.9588H124.828C125.96 29.9588 126.936 29.8765 127.715 29.6982C128.527 29.514 129.216 29.2573 129.768 28.9105ZM138.541 41.0018L144.379 50.303L138.939 53.7397L132.058 42.5027C131.402 41.5073 130.803 40.606 130.24 39.789C129.674 38.9562 129.107 38.2175 128.531 37.5749C127.572 36.4384 126.093 35.878 124.093 35.878H121.063V53.7397H113.948V15.4594H124.828C126.786 15.4594 128.529 15.6494 130.106 16.0628C131.675 16.4665 133.074 17.1248 134.253 18.0007C135.45 18.9353 136.322 20.0678 136.929 21.3943C137.538 22.7482 137.837 24.2432 137.837 25.8813C137.837 28.4755 137.575 30.0704 136.377 31.9456C135.647 33.1251 135.007 34.0284 133.925 34.6809C134.197 34.9591 134.439 35.2412 134.722 35.5567C134.977 35.8624 135.225 36.2033 135.496 36.5736C136.051 37.3397 136.556 38.1078 137.07 38.8308C137.575 39.5538 138.036 40.2729 138.541 41.0018Z" fill="#0000FF"/>
            <path d="M171.09 43.1396C168.881 45.434 166.226 46.5587 163.137 46.5587C160.065 46.5587 157.42 45.385 155.166 43.0847C152.939 40.708 151.848 37.8963 151.848 34.632C151.848 31.2481 152.939 28.3933 155.166 26.0323C157.356 23.7751 160.041 22.6386 163.137 22.6386C166.183 22.6386 168.845 23.7751 171.09 26.1146C173.305 28.4756 174.42 31.3147 174.42 34.632C174.42 38.0472 173.303 40.8765 171.09 43.1396ZM174.632 0.0509033V19.3273C171.426 16.7331 167.589 15.4595 163.137 15.4595C160.484 15.4595 158.045 15.8944 155.8 16.8036C153.548 17.7069 151.501 19.1313 149.701 20.9967C146.161 24.6529 144.379 29.1927 144.379 34.6339C144.379 39.9164 146.184 44.4289 149.765 48.1987C153.337 51.8745 157.775 53.7398 163.137 53.7398C165.801 53.7398 168.238 53.2892 170.467 52.3741C171.953 51.7804 173.34 50.9614 174.632 49.9171V53.7398H181.879V0.0509033H174.632Z" fill="#0000FF"/>
            <path d="M91.7623 22.6405C96.8388 22.6405 100.941 25.8597 101.445 29.9607H82.0857C82.556 25.8578 86.6625 22.6405 91.7623 22.6405ZM100.996 44.5307C100.701 44.6717 100.422 44.8461 100.124 45.0048C98.3748 46.0649 96.2493 46.5606 93.7785 46.5606C90.4469 46.5606 87.125 45.3869 85.3002 43.5902C83.2138 41.4799 81.6075 38.968 81.5294 35.7468H108.1C108.627 32.2395 108.284 28.8772 107.511 26.5925C106.794 24.2648 105.631 22.2897 104.048 20.5831C100.976 17.1405 96.5889 15.4594 91.7135 15.4594C86.762 15.4594 82.638 17.2541 79.3904 20.9045C77.7724 22.7463 76.5545 24.7703 75.7582 26.9903C74.9951 29.2083 74.593 31.5968 74.593 34.1107C74.593 39.789 76.3788 44.4836 79.9056 48.1967C83.448 51.9058 87.9701 53.7397 93.4779 53.7397C96.304 53.7397 98.8041 53.2558 101.008 52.2878L103.455 51.0907L101.008 44.5581L100.996 44.5307Z" fill="#0000FF"/>
            <path d="M239.396 22.6405C244.475 22.6405 248.605 25.8597 249.091 29.9607H229.745C230.227 25.8578 234.357 22.6405 239.396 22.6405ZM248.63 44.5307C248.345 44.6717 248.052 44.8461 247.783 45.0048C245.991 46.0649 243.895 46.5606 241.444 46.5606C238.098 46.5606 234.761 45.3869 232.938 43.5902C230.867 41.4799 229.269 38.968 229.183 35.7468H255.769C256.298 32.2395 255.929 28.8772 255.188 26.5925C254.444 24.2648 253.289 22.2897 251.729 20.5831C248.605 17.1405 244.248 15.4594 239.336 15.4594C234.384 15.4594 230.307 17.2541 227.056 20.9045C225.438 22.7463 224.204 24.7703 223.443 26.9903C222.655 29.2083 222.266 31.5968 222.266 34.1107C222.266 39.789 224.027 44.4836 227.565 48.1967C231.098 51.9058 235.618 53.7397 241.135 53.7397C243.954 53.7397 246.477 53.2558 248.675 52.2878L251.097 51.0907L248.675 44.5581L248.63 44.5307Z" fill="#0000FF"/>
            <path d="M27.3278 7.92365C25.2902 7.92365 23.6 6.2621 23.6 4.18516C23.6 2.10821 25.2921 0.444702 27.3278 0.444702C29.3966 0.444702 31.0653 2.10821 31.0653 4.18516C31.0653 6.2621 29.3966 7.92365 27.3278 7.92365Z" fill="#0000FF"/>
            <path d="M10.1645 7.92316C8.09962 7.92316 6.42114 6.2616 6.42114 4.18466C6.42114 2.10772 8.09962 0.446167 10.1645 0.446167C12.2275 0.446167 13.8689 2.10968 13.8689 4.18662C13.8689 6.26356 12.2275 7.92316 10.1645 7.92316Z" fill="#0000FF"/>
            <path d="M422.671 34.8907C422.671 43.5413 428.936 50.6186 436.77 50.6186C444.604 50.6186 450.87 43.5413 450.87 34.8907C450.87 26.24 444.603 19.1627 436.768 19.1627C428.936 19.1627 422.671 26.24 422.671 34.8907ZM419.537 34.8907C419.537 24.3531 427.369 16.0179 436.768 16.0179C446.168 16.0179 454 24.3531 454 34.8907C454 45.4282 446.168 53.7634 436.768 53.7634C427.371 53.7634 419.537 45.4282 419.537 34.8907ZM407.005 17.5913V16.0199H410.137V17.5913V52.192V53.7653H407.005V52.192V17.5913ZM408.57 9.64798H407.005V6.50318H408.57H408.648H410.213V9.64798H408.648H408.57ZM363.142 34.8907C363.142 43.5413 369.408 50.6186 377.241 50.6186C385.073 50.6186 391.34 43.5413 391.34 34.8907C391.34 26.24 385.073 19.1627 377.241 19.1627C369.407 19.1627 363.142 26.24 363.142 34.8907ZM360.007 34.8907C360.007 24.3531 367.839 16.0179 377.239 16.0179C383.035 16.0179 388.206 19.1627 391.338 24.0396V2.18667V0.613285H394.471V2.18667V34.8907V52.19V53.7634H391.338V52.19V45.7417C388.204 50.6166 383.035 53.7634 377.239 53.7634C367.839 53.7634 360.007 45.4282 360.007 34.8907ZM321.863 17.5913L321.941 16.0983H325.153L325.075 17.6716L324.997 39.7675C324.997 45.822 330.481 50.6186 337.059 50.6186C343.638 50.6186 349.044 45.822 349.044 39.7675V17.5913L349.122 16.0983H352.333L352.255 17.6716L352.177 39.7675C352.177 47.3954 345.519 53.7653 337.059 53.7653C328.6 53.7653 321.863 47.3954 321.863 39.7675V17.5913ZM304.709 19.1627V43.461C304.787 48.2575 308.312 50.6166 314.03 50.6166H315.598V53.7634H314.03C305.806 53.7634 301.654 49.9896 301.576 43.4629V19.1627H296.799H295.233V16.0179H296.799H301.576V1.57142V0H304.709V1.57142V16.0179H314.03H315.598V19.1627H314.03H304.709ZM289.2 26.1616H286.068C286.068 22.0724 281.212 19.1627 275.964 19.1627C270.716 19.1627 265.86 22.0724 265.86 26.1616C265.86 33.8679 290.612 32.6099 290.533 43.6177C290.533 48.8865 284.503 53.7614 275.964 53.7614C267.425 53.7614 261.394 48.8865 261.394 43.6177H264.529C264.529 47.7853 270.089 50.6166 275.964 50.6166C281.839 50.6166 287.401 47.7853 287.401 43.6177C287.401 35.8331 262.805 37.2478 262.727 26.1616C262.727 20.8145 268.368 16.0179 275.966 16.0179C283.56 16.0179 289.2 20.8145 289.2 26.1616Z" fill="#0000FF"/>
          </svg>
        </Menulogo>
        <Social div={div}>
          <svg  viewBox="0 0 17 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <a href="https://www.facebook.com/overduestudio" target="_blank">
            <path d="M4.25 11.3333H0V17H4.25V34H11.3333V17H16.4333L17 11.3333H11.3333V8.925C11.3333 7.65 11.6167 7.08333 12.8917 7.08333H17V0H11.6167C6.51667 0 4.25 2.26667 4.25 6.51667V11.3333Z" fill="#0000FF"/>
            </a>
          </svg>
          <svg  viewBox="0 0 37 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <a href="https://www.behance.net/MargaretHwang/" target="_blank">
            <path d="M33.9167 2.93333H23.125V0H33.9167V2.93333ZM36.5375 17.6C35.9208 19.5067 33.4542 22 28.675 22C23.8958 22 20.0417 19.5067 20.0417 13.64C20.0417 7.92 23.5875 4.98667 28.5208 4.98667C33.3 4.98667 36.2292 7.62667 36.8458 11.44C37 12.1733 37 13.2 37 14.6667H24.6667C24.8208 19.36 30.0625 19.5067 31.7583 17.6H36.5375ZM24.6667 11.7333H32.375C32.2208 9.53333 30.6792 8.50667 28.5208 8.50667C26.3625 8.50667 25.1292 9.53333 24.6667 11.7333ZM10.0208 22H0V0H10.7917C19.2708 0.146667 19.425 7.92 14.9542 10.12C20.1958 12.0267 20.35 22 10.0208 22ZM4.625 8.8H10.175C14.0292 8.8 14.6458 4.4 9.7125 4.4H4.625V8.8ZM9.86667 13.2H4.625V17.6H9.7125C14.4917 17.6 14.1833 13.2 9.86667 13.2Z" fill="#0000FF"/>
            </a>
          </svg>
          <svg  viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <a href="https://www.instagram.com/overduestudio/" target="_blank">
            <path d="M15.5 2.84167C19.6333 2.84167 20.15 2.84167 21.8292 2.97083C26.0917 3.1 28.0292 5.16667 28.1583 9.3C28.2875 10.9792 28.2875 11.3667 28.2875 15.5C28.2875 19.6333 28.2875 20.15 28.1583 21.7C28.0292 25.8333 25.9625 27.9 21.8292 28.0292C20.15 28.1583 19.7625 28.1583 15.5 28.1583C11.3667 28.1583 10.85 28.1583 9.3 28.0292C5.0375 27.9 3.1 25.8333 2.97083 21.7C2.84167 20.0208 2.84167 19.6333 2.84167 15.5C2.84167 11.3667 2.84167 10.85 2.97083 9.3C3.1 5.16667 5.16667 3.1 9.3 2.97083C10.85 2.84167 11.3667 2.84167 15.5 2.84167ZM15.5 0C11.2375 0 10.7208 0 9.17083 0.129167C3.4875 0.3875 0.3875 3.4875 0.129167 9.17083C0 10.7208 0 11.2375 0 15.5C0 19.7625 0 20.2792 0.129167 21.8292C0.3875 27.5125 3.4875 30.6125 9.17083 30.8708C10.7208 31 11.2375 31 15.5 31C19.7625 31 20.2792 31 21.8292 30.8708C27.5125 30.6125 30.6125 27.5125 30.8708 21.8292C31 20.2792 31 19.7625 31 15.5C31 11.2375 31 10.7208 30.8708 9.17083C30.6125 3.4875 27.5125 0.3875 21.8292 0.129167C20.2792 0 19.7625 0 15.5 0ZM15.5 7.49167C11.1083 7.49167 7.49167 11.1083 7.49167 15.5C7.49167 19.8917 11.1083 23.5083 15.5 23.5083C19.8917 23.5083 23.5083 19.8917 23.5083 15.5C23.5083 11.1083 19.8917 7.49167 15.5 7.49167ZM15.5 20.6667C12.6583 20.6667 10.3333 18.3417 10.3333 15.5C10.3333 12.6583 12.6583 10.3333 15.5 10.3333C18.3417 10.3333 20.6667 12.6583 20.6667 15.5C20.6667 18.3417 18.3417 20.6667 15.5 20.6667ZM23.7667 5.425C22.7333 5.425 21.9583 6.2 21.9583 7.23333C21.9583 8.26667 22.7333 9.04167 23.7667 9.04167C24.8 9.04167 25.575 8.26667 25.575 7.23333C25.575 6.2 24.8 5.425 23.7667 5.425Z" fill="#0000FF"/>
            </a>
          </svg>
          <svg  viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <a href="https://dribbble.com/overduestudio" target="_blank">
            <path d="M15.5 0C6.975 0 0 6.975 0 15.5C0 24.025 6.975 31 15.5 31C24.025 31 31 24.025 31 15.5C31 6.975 24.025 0 15.5 0ZM28.2875 14.725C24.9292 14.2083 21.9583 14.2083 19.1167 14.5958C18.8583 13.8208 18.4708 13.175 18.0833 12.4C21.0542 11.1083 23.5083 9.3 25.1875 7.10417C26.9958 9.3 28.1583 11.8833 28.2875 14.725ZM23.25 5.425C21.7 7.49167 19.5042 9.04167 16.7917 10.2042C15.5 7.75 14.0792 5.425 12.4 3.1C13.4333 2.84167 14.4667 2.7125 15.5 2.7125C18.4708 2.7125 21.1833 3.74583 23.25 5.425ZM9.6875 4.13333C11.3667 6.32917 12.9167 8.65417 14.2083 11.1083C11.1083 12.0125 7.3625 12.4 3.1 12.5292C4.00417 8.78333 6.45833 5.8125 9.6875 4.13333ZM2.7125 15.5V15.1125C7.62083 15.1125 12.0125 14.5958 15.5 13.4333C15.7583 14.0792 16.1458 14.725 16.4042 15.2417C12.0125 16.6625 8.39583 19.375 5.68333 23.6375C3.875 21.4417 2.7125 18.6 2.7125 15.5ZM7.62083 25.575C10.2042 21.5708 13.4333 18.9875 17.4375 17.825C18.6 20.925 19.5042 24.1542 20.0208 27.5125C15.7583 29.0625 11.1083 28.2875 7.62083 25.575ZM22.6042 26.0917C22.0875 22.9917 21.1833 20.0208 20.15 17.1792C22.6042 16.7917 25.1875 16.9208 28.1583 17.4375C27.5125 21.0542 25.575 24.1542 22.6042 26.0917Z" fill="#0000FF"/>
            </a>        
          </svg>
        </Social>
        <Menudescription div={div}>
          <p>Sorry! <br/>We are still curating this site, be zen, and Since you’re here, say hello.</p>
          <a href="mailto:info@overduestudio.co">info@overduestudio.co</a>
        </Menudescription>
      </Menuwrapper>
        <Dotwrapper>
          <Linewrapper>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Menudot>
              <Cross div={div} onClick={ () => {close()}}>
                  <svg width="3vw" height="3vw" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.9985 23.7921L0.0836566 23.7921" stroke="#0000FF" stroke-width="2"/>
                    <line x1="22.0366" y1="44.8396" x2="22.0366" y2="0.924721" stroke="#0000FF" stroke-width="2"/>
                  </svg>
              </Cross>
            </Menudot>
          </Linewrapper>
          <Secondlinewrapper>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
          </Secondlinewrapper>
          <Thirdlinewrapper>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
          </Thirdlinewrapper>
          <Forthlinewrapper>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
          </Forthlinewrapper>
          <Fifthlinewrapper>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Arrodwot onClick={ () => {scroll('#bottom')}}>
            <svg width="4vw" height="4vw" viewBox="0 0 62 77" fill="none">
                <g clipPath="url(#clip0)">
                <path
                  d="M.268 45.219l30.665 30.85 30.643-30.85-1.624-1.635-27.875 28.087V.119H29.79v71.552L1.89 43.584.268 45.22z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path
                    fill="#fff"
                    transform="rotate(-180 30.788 38.034)"
                    d="M0 0H61.3083V75.9491H0z"
                  />
                </clipPath>
              </defs>
            </svg>
            </Arrodwot>
          </Fifthlinewrapper>
        </Dotwrapper>
      <Bottomwrapper id="bottom">
        <Specialities>
          <p>
            Visual Design<span> / </span>
            Graphic<span> - </span>Digital<span> / </span>
            Web Design<span> / </span>
            Brand Identity<span> / </span>
            Exhibition<span> / </span>
            Design<span> / </span>
            Photography
          </p>
          <p>Overdue Studio is a visual design studio creating contemporary design solutions digitally and physically. We believe the user experience is the foundation of all design and we are eager to be shaped by all manner of visual arts, music, culture, colours and YOU.</p>
          <p>Parallel to our commissioned work, we design and sell socks to raise awareness for climate change.</p>
        </Specialities>
        <Btnup onClick={ () => {scroll('#top')}}>
          <svg width="4vw" height="4vw" viewBox="0 0 61 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M61 31.2761L30.4886 0L0 31.2761L1.61544 32.9333L29.351 4.45802L29.351 77H31.6263L31.6263 4.45802L59.3846 32.9333L61 31.2761Z" fill="#0000FF"/>
          </svg>
        </Btnup>
      </Bottomwrapper>
    </Wrapper>
    </div>
  )
}

export default Home 