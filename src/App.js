import React from 'react';
import './css/styles.css';
import Header from './js/components/Header';
import MainContent from './js/components/MainContent';
import Footer from './js/components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>

  );
}

export default App;

