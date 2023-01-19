import { createGlobalStyle } from "styled-components";
import { themes } from "./ColorStyles";

export const GlobalStyle = createGlobalStyle`
  @media (prefers-color-scheme: light) {
    body {
      background: ${themes.light.background};
    }
  }

  @media (prefers-color-scheme: dark) {
    body {
      background: ${themes.dark.background};
    }
  }
`;
