// Import global packages
import { Container } from 'styled-bootstrap-grid';
import styled, { createGlobalStyle } from 'styled-components';
import { gridTheme } from './theme/grid';
import { colors } from './theme/colors';

const EqualExpertsTheme = {
    gridTheme,
    colors,
};

const ContainerFullHeight = styled(Container)`
    min-height: 100vh;
    margin-bottom: 80px;
`;

const GlobalStyle = createGlobalStyle`
  /* Global Reset */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      font-size: 100%;
      vertical-align: baseline;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  caption,
  th,
  td {
      text-align: left;
      font-weight: normal;
      vertical-align: middle;
  }

  q,
  blockquote {
      quotes: none;
  }

  q::before,
  q::after,
  blockquote::before,
  blockquote::after {
      content: "";
      content: none;
  }

  a img {
      border: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary {
      display: block;
  }

  button,
  input {
      line-height: normal;
      border: none;
  }

  button,
  input,
  select,
  textarea {
      font-size: 100%;
      margin: 0;
      vertical-align: baseline;
      *vertical-align: middle;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
      cursor: pointer;
      *overflow: visible;
      background-color: transparent;
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  
  button::-moz-focus-inner,
  input::-moz-focus-inner {
      border: 0;
      padding: 0;
  }

  textarea {
      overflow: auto;
      vertical-align: top;
      resize: vertical;
  }

  html, body {
    height: 100%; 
    margin: 0;
  }

  /* Base */
  html {
    font-size: 16px;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: 0;
    color: #000000;
    position: relative;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;

    &:focus {
        outline: none;
    }
  }

  ol,
  ul {
  }

  ul li {
      text-decoration: none;
  }

  a {
    transition: all 0.3s ease;
  }

  .absolute-container {
    position: relative; 
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }
  
`;

export { GlobalStyle, EqualExpertsTheme, ContainerFullHeight };
