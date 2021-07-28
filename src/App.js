import logo from './logo.svg';
import './App.css';
import OPAC from './components/OPAC/OPAC';

//hook
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <OPAC />
      </header>
    </div>
  );
}

export default App;
