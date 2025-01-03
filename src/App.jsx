import React from 'react';
import './App.css';
import Homepage from "./components/Physical Therapy/Homepage.jsx";
import PageContent from './components/Physical Therapy/PageContent.jsx';

function App() {
  return (
    <div>

<div className="App-container">
      
      <div className="Homepage">
        <Homepage />
        </div>
     </div>
    <div className="App">
      <PageContent />
    </div>
  </div>
  );
}

export default App;