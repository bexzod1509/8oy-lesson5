import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Products />
      <Footer />
    </>
  );
}

export default App;
