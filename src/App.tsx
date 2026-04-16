import './App.css'
import Header from './Header/Header'
import { Routes, Route } from "react-router-dom";
import Home from "../src/Home/Home"
import Service from './Service/Service';
import Journal from './Journal/Journal';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
