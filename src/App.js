import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TariffCalculator from './components/TariffCalculator';
import ContactButton from './components/ContactButton';
import logo from './assets/logo.png';
import ContactPage from './components/ContactPage'; 
import globalStyles from './styles/globalStyles';



const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    color: #fff;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const LogoContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  left: 20px;
`;
const PlaceholderComponent = () => <div>Contact Page Coming Soon...</div>;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <LogoContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={logo} alt="Company Logo" width="100" />
      </LogoContainer>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="/tariff-calculator" element={<TariffCalculator />} />
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
      <ContactButton />
    </Router>
  );
};

export default App;