import { createGlobalStyle } from "styled-components";
import { themes } from "./ColorStyles";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.light.background};
  }

  @media (prefers-color-scheme: light) {
    background: ${themes.dark.background};
  }
`;
