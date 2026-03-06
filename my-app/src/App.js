import './App.css';
import all from './dawholething.png';
import Typewriter from './Typewriter';
import React, { useState, useEffect } from 'react';


function App() {
  const script = ['Welcome to quixzie\'s shop!', 'Take a look around...'];

  const [currentInd, setCurrentInd] = useState(0);

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      setCurrentInd(prevInd => prevInd + 1)
      // move to next item in script
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img className='All-img' src={all} alt='all'/>
        <h1 className='Txt-box'>
          <Typewriter text={script[currentInd]} delay={50} onKeyPress={handleKeyPress} />
        </h1>
      </header>
    </div>
  );
}

export default App;
