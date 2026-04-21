import './App.css'
import Header from './Header/Header'
import { Routes, Route } from "react-router-dom";
import Home from "../src/Home/Home"
import Service from './Service/Service';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import ServiceDetail from './Service/ServiceDetail';
import Blog from './Blog/Blog';

import { useEffect, useState } from "react";
import SplashScreen from './component/SplashScreen';
import { preloadImages } from "./utils/preloadAssets";

import before1 from "./assets/enhanced-bg2.png";
import after1 from "./assets/enhanced-bg1.png";
import bgCover from "./assets/enhanced-bg3.png";
import bgCover2 from "./assets/enhanced-bg4.png";
import logo from "./assets/logo.jpeg";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twiter from "./assets/twiter.png";
import mail from "./assets/mailto.png";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      const criticalImages = [
        before1,
        after1,
        bgCover,
        bgCover2,
        logo,
        facebook,
        instagram,
        twiter,
        mail,
      ];

      const start = Date.now();

      await preloadImages(criticalImages);

      const elapsed = Date.now() - start;
      const minimumSplashTime = 1200;

      const remaining = Math.max(minimumSplashTime - elapsed, 0);

      setTimeout(() => {
        setIsLoading(false);
      }, remaining);
    };

    loadAssets();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
