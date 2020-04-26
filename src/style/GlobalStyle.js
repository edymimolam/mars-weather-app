import { createGlobalStyle } from "styled-components";
import marsImg from "../assets/mars.jpg";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {

  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  background-image: url(${marsImg});
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.light};
}

h1, h2, h3 {
  line-height: 1;
}

a {
  color: ${({ theme }) => theme.colors.accent};
}

a:hover {
  color: ${({ theme }) => theme.colors.accentDark};
}
`;

export default GlobalStyle;
