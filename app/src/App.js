import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {Routes, Route, BrowserRouter } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home.jsx";

function App() {
  return (

    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>

  );
}

export default App;
