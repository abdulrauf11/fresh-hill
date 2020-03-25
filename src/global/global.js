import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
:root {
  --limit: 1600px;
  --spread: 80%;
  --divider: 1.8;

  --black: #1c1c23;
  --white: #ffffff;
  --grey: #2a2a34;
  --lightgrey: #fafafa;
  --skeleton: #dddbdd;
  --green: #43b060;
  --yellow: #ffe75c;

  --green-shadow: rgba(67, 176, 96, 0.1);
  --yellow-shadow: rgba(255, 231, 92, 0.2);
  --black-shadow: rgba(28, 28, 35, 0.2);
  --white-shadow: rgba(255, 255, 255, 0.2);
}

html {
  font-family: sans-serif;
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-size: 16px;
  width: 100%;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  margin: 0 auto;
  width: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fg};

  transition: background 0.4s ease-out;
}

p {
  line-height: 1.6;
  font-size: 1rem;
}

section {
  width: var(--spread);
  max-width: var(--limit);
  margin: 13rem auto;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary,
canvas {
  display: block;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea,
a {
  font: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

textarea {
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  resize: none;
  -webkit-appearance: none;
}

ul {
  padding: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lora";
  font-weight: 400;
  color: var(--black);
}

input:focus,
select:focus,
textarea:focus,
button:focus,
[contenteditable="true"]:focus,
video {
  outline: none;
}

button {
  cursor: pointer;
  font-family: "Lora";
  font-weight: 700;
  text-transform: uppercase;
  border: 0;
  padding: 0;
  background: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: uppercase;
  font-family: "Lora";
  font-weight: 700;
}

h2 {
  font-size: 2rem;
  text-align: center;
}

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: var(--green);
}


@keyframes fade-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(1.03, 1.3);
    opacity: 0;
  }
}

@keyframes fade-out-small {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(1.06, 1.25);
    opacity: 0;
  }
}

@media screen and (max-width: 25rem) {
  :root {
    --divider: 2;
  }
  section {
    margin: 10rem auto;
  }
}

@media screen and (min-width: 112.5rem) {
  :root {
    --divider: 1.5;
  }
  html {
    font-size: 150%;
  }
  h2 {
    font-size: 3rem;
  }
  section {
    margin: 15rem auto;
  }
}

`
