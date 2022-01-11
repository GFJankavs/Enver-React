import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './parts/components/Header/Header';
import Main from './pages/Main/Main';
import Contacts from './pages/Contacts/Contacts';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Footer from './parts/components/Footer/Footer';

const App = () => (
  <div className="App">
    <div className="app__content">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </div>
);

export default App;
