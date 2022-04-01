import React from 'react';
import logo from './logo.svg';
import './components/app.css';
import Navigation from './components/Navigation';
import PageFeatures from './components/PageFeatures';
import Gif from './components/Gif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Gif />
          <Navigation />
          <PageFeatures />
        </a>
      </header>
    </div>
  );
}

export default App;
