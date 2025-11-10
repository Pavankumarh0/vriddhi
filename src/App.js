import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Achievements from './components/Achievements/Achievements';
import AboutVriddhi from './components/AboutVriddhi/AboutVriddhi';
import AboutFounder from './components/AboutFounder/AboutFounder';
import Services from './components/Services/Services';
import GroupTherapy from './components/GroupTherapy/GroupTherapy';
import Training from './components/Training/Training';
import Gallery from './components/Gallery/Gallery';
import Closing from './components/Closing/Closing';
import Footer from './components/Footer/Footer';
import BookingPage from './components/BookingPage/BookingPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Achievements />
      <AboutVriddhi />
      <AboutFounder />
      <Services />
      <GroupTherapy />
      <Training />
      <Gallery />
      <Closing />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

