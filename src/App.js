import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Gallery from './components/Gallery';
import SmoothScroll from 'smooth-scroll';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App () {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <About />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;