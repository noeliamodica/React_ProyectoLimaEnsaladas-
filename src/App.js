import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login"
import {Register} from "./pages/Register";
import { ProductCard } from './components/ProductCard';



function App() {


  

  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<ProductCard />} />
            </Routes>
            
        </BrowserRouter>


    </div>
  );
}

export default App;
