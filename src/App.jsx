import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import InstructionPage from "./pages/InstructionPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import HangManPage from "./pages/HangManPage.jsx";

// INITIALIZE GLOBAL STYLING
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        font-size: 62.5%;

        @media (max-width: 1024px) {
            font-size:55% ;
        }
        
        @media (max-width: 768px) {
            font-size:50% ;
        }

        @media (max-width: 640px) {
            font-size:45% ;
        }
    }

    body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Mouse Memoirs", sans-serif;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instruction" element={<InstructionPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/hangman/:subject" element={<HangManPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
