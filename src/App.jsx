// App.jsx
import React from 'react';
import './App.css';
import Homepage from "./components/infection/Homepage.jsx";
import PageContent from './components/infection/PageContent.jsx';

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