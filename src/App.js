import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import WhyChooseUs from './components/WhyChooseUs';
import Eligibility from './components/Eligibility';
import Learn from './components/Learn';
import Placement from './components/Placement';
import StartJourney from './components/StartJourney';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} /> {/* This line sets the Home component as the default route */}
          <Route path="/whychooseus" element={<WhyChooseUs />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/startjourney" element={<StartJourney />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
