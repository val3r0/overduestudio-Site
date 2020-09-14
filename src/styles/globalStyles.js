
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        overflow: ${({div}) => (div ? "auto" : "hidden")};
    }

    li {
        list-style: none;
    }

    ul {
        padding: 0;
    }
`;

export default GlobalStyle;