import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BlogPost from './pages/BlogPost';
import ClubMedArticle from './pages/ClubMedArticle';
import ClubMedQuebecEscape from './pages/ClubMedQuebecEscape';
import Destinations from './pages/Destinations';
import Experiences from './pages/Experiences';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/blog/club-med-quebec" element={<ClubMedArticle />} />
          <Route path="/blog/club-med-quebec-escape" element={<ClubMedQuebecEscape />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;