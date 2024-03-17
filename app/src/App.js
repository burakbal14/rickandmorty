import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {Routes, Route, BrowserRouter } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home.jsx";

// Components
import Navbar from "./Pages/Navbar/Navbar.jsx";
import Footer from "./Pages/Footer/Footer.jsx";

function App() {
  return (

    <ChakraProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ChakraProvider>

  );
}

export default App;
