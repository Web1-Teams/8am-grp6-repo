// App.jsx
import React from 'react';
import './App.css';
import Homepage from "./components/nutrition/Homepage.jsx";
import PageContent from './components/nutrition/PageContent.jsx';

function App() {
  return (
    <div>

      <div className="App">

        <Homepage />

        <PageContent />
      </div>
    </div>

  );
}

export default App;