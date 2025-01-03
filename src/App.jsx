import React from 'react';
import './App.css';
import Homepage from "./components/medical service/Homepage.jsx";
import PageContent from './components/medical service/PageContent.jsx';

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