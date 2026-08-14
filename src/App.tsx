import './App.css'
import Header from './Header/Header'
import { Routes, Route } from "react-router-dom";
import Home from "../src/Home/Home"
import Service from './Service/Service';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import ServiceDetail from './Service/ServiceDetail';


import { useEffect, useState } from "react";
import SplashScreen from './component/SplashScreen';
import { preloadImages } from "./utils/preloadAssets";
import { getMediaCacheConsent, registerMediaCache, setMediaCacheConsent, unregisterMediaCache } from "./utils/mediaCache";

import before1 from "./assets/enhanced-bg2.png";
import after1 from "./assets/enhanced-bg1.png";
import bgCover from "./assets/enhanced-bg3.png";
import bgCover2 from "./assets/enhanced-bg4.png";
import logo from "./assets/logo.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twiter from "./assets/twiter.png";
import mail from "./assets/mailto.png";
import BlogDetail from './Blog/BlogDetail';
import Blog from './Blog/Blog';
import Gallery from './Gallery/Gallery';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mediaConsent, setMediaConsent] = useState<"accepted" | "declined" | null>(() => getMediaCacheConsent());

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
    void registerMediaCache();
  }, []);

  useEffect(() => {
    if (mediaConsent) {
      setMediaCacheConsent(mediaConsent);
    }

    if (mediaConsent === "accepted") {
      void registerMediaCache();
      return;
    }

    if (mediaConsent === "declined") {
      void unregisterMediaCache();
    }
  }, [mediaConsent]);

  const handleConsent = (nextValue: "accepted" | "declined") => {
    setMediaConsent(nextValue);
    setMediaCacheConsent(nextValue);
  };

  if (isLoading) {
    return <SplashScreen />;
  }
  
  return (
    <>
      {mediaConsent === null && (
        <div className="fixed inset-x-4 bottom-4 z-[5000] rounded-2xl border border-[var(--border)] bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-md">
          <p className="text-sm text-[var(--text)] leading-6">
            We can cache small site assets to make repeat visits faster. This does not download the whole gallery immediately.
          </p>
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              onClick={() => handleConsent("accepted")}
              className="flex-1 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => handleConsent("declined")}
              className="flex-1 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              No thanks
            </button>
          </div>
        </div>
      )}

      <Header />
      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
