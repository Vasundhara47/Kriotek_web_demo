"use client"
import { useRouter } from "next/router";
import "./globals.css";
import styled, { ThemeProvider } from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import theme from "../Components/Styles";
import { createGlobalStyle } from "styled-components";
import { usePathname } from "next/navigation";


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    overflow-x: hidden;   
  }

  *{
    box-sizing: border-box;
  }
  p{
    line-height: 30px;
    
  }
`;

const Main = styled.div`
  width: 100vw;
  margin-top: 80px;
`

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  const showHeaderFooter = pathname !== '/login' && pathname !== '/signup';
  // Not Show header and footer  on login and signup page

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kriotek Web Application</title>
      </head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>
          {showHeaderFooter && <Header />}
          <Main>
            {children}
          </Main>
          {showHeaderFooter && <Footer />}
        </body>
      </ThemeProvider>

    </html>
  );
}
