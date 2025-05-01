import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Audience from './components/Audience';
import Benefits from './components/Benefits';
import About from './components/About';
import Team from './components/Team';
import ApiSection from './components/ApiSection';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    document.title = "MARS | Mapping & Analyzing Research Software";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Audience />
      <Benefits />
      <About />
      <Team />
      <ApiSection />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;