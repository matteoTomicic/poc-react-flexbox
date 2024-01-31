import type { AppProps } from "next/app";
import GlobalStyle from "../src/globalstyles";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme/default.theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
