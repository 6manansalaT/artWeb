import './App.css';
import all from './dawholething.png';
import Typewriter from './Typewriter';
import React, { useState, useEffect } from 'react';
import ScrollableDropdown from "./ScrollableDropdown";

function App() {
  const script = ['Take a look around...'];
  const productList = ['MS Panimals', 'Nada', 'Null'];

  const [currentInd, setCurrentInd] = useState(0);
  const [currentScript, setCurrentScript] = useState('Welcome to quixzie\'s shop!');

  function clickHandler() {
    if (currentInd < script.length) {
      setCurrentScript('')
      setCurrentInd(prevInd => prevInd + 1)
      setCurrentScript(script[currentInd])
    }
  }


  return (
    <div className="App">
      <header className="App-header" onClick={clickHandler}>
        <img className='All-img' src={all} alt='all'/>
        <div class="component">
          <ScrollableDropdown/>
        </div>
        <h1 className='Txt-box'>
          <Typewriter key={currentInd} text={currentScript} delay={50} />
        </h1>
      </header>
    </div>
  );
}

export default App;
