import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ContextHospiProvider } from "./context/ContextHospi";
import { HospiRouter } from "./components/HospiRouter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <ContextHospiProvider>
        <HospiRouter />
      </ContextHospiProvider>  
    </BrowserRouter>
  </>
);

export default App;

