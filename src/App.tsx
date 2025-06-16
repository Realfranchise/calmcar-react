import React from 'react';
import './App.css';
import './App-mobile.css';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import PartnerBadges from './components/PartnerBadges';
import Solutions from './components/Solutions';
import Technology from './components/Technology';
import FutureTech from './components/FutureTech';
import RobotShowcase from './components/RobotShowcase';
import MotorPortfolio from './components/MotorPortfolio';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollAnimation();
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <PartnerBadges />
      <Solutions />
      <Technology />
      <FutureTech />
      <RobotShowcase />
      <MotorPortfolio />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
