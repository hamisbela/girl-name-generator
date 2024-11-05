import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { NationalityPage } from './pages/NationalityPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/african-girl-names" element={<NationalityPage nationality="african" />} />
          <Route path="/american-girl-names" element={<NationalityPage nationality="american" />} />
          <Route path="/french-girl-names" element={<NationalityPage nationality="french" />} />
          <Route path="/german-girl-names" element={<NationalityPage nationality="german" />} />
          <Route path="/indian-girl-names" element={<NationalityPage nationality="indian" />} />
          <Route path="/japanese-girl-names" element={<NationalityPage nationality="japanese" />} />
          <Route path="/russian-girl-names" element={<NationalityPage nationality="russian" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;