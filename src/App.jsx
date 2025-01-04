// App.jsx
import React from 'react';
import './App.css';
import Homepage from "./components/Homepage";
import PageContent from './components/psycholgicl/PageContent';


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