
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";

import { Footer } from "../components/Footer";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </BrowserRouter>


    </div>
  );
}

export default App;
