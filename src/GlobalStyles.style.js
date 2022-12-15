import { createGlobalStyle } from "styled-components";
import './data/styleVars.css';

const GlobalStyle = createGlobalStyle`

/*

RESET

*/

  /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/*

BASE FONTS

*/

h1,
h2,
h3,
h4,
p {
  color: var(--clr-ntrl-dk);
}

h1,
h2,
h3,
h4 {
  font-family: var(--ff-secondary);
}

h1 {
  font-size: var(--fs-h1);
  font-family: var(--ff-secondary);
  font-weight: var(--fw-s4)
}
h2 {
  font-size: var(--fs-h2);
  font-weight: var(--fw-s3)
}
h3 {
  font-size: var(--fs-h3);
  font-weight: var(--fw-s2)
}
h4 {
  font-size: var(--fs-h4);
  font-weight: var(--fw-s1)
}
p {
  font-size: var(--fs-p);
  font-family: var(--ff-primary);
  font-weight: var(--fw-p1)
}


`


export default GlobalStyle;