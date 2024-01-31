import * as styled from "styled-components";

export default styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
  }

  ol,
  ul {
    list-style: none;
  }

  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
