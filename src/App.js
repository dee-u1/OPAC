import logo from './logo.svg';
import './App.css';
import RestoApp from './components/RestoApp.js';
import ToDoApp from './components/ToDoApp';
import Player from './components/Player';
import Book from './components/OPAC/Book';
import OPAC from './components/OPAC/OPAC';
import Login from './components/OPAC/Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

//hook
import {useState} from 'react';

function App() {
  const [players, setPlayers] = useState([
    {name: 'Jordan', number: 23},
    {name: 'James', number: 24},
    {name: 'Bryant', number: 25},
  ]);

  // let players = [    
  // ]

  //count is the variable, setCount is the function to change the value of count, 
  //0 in useState is the initial value
  const [count, setCount] = useState(0);
  
  let jerseys = players.map(player =>  
    <Player 
      key={player.name}
      PlayerName={player.name} 
      PlayerNumber={player.number} 
    />)

  return (
    <div className="App">
      <header className="App-header"> 
        <OPAC />
      </header>
    </div>
  );
}

export default App;
