import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  return (
    <div className="font-bodyFont">
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;