
import React from 'react';
import { Outlet, Link } from "react-router-dom"; 
import logo from './kindpng.png';
import './App.css';

console.log(React.version);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/Lists">listes Pokemon</Link>{" "}
        <Link to="/singlePokemon">single Pokemon</Link> |{" "}
        <Link to="/addPokemen">  add Pokemen</Link>
      </nav>
      <Outlet />
      </body>
    </div>
  );
}

export default App;

/*
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import listPokemon from './components/listPokemon';
import singlePokemon from './components/singlePokemon';
import addPokemon from './components/addPokemon';

function App() {
  return (
    <div className="wrapper">
      <h1>Pokédex </h1>
      <BrowserRouter>
        <Switch>
          <Route path="/listPokemon">
            <h2>LISTES DES POKEMONS</h2>
          </Route>
          <Route path="/singlePokemon">
            <h2>LISTES DES POKEMONS</h2>
          </Route>
          <Route path="/addPokemon">
            <h2>LISTES DES POKEMONS</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

*/




/*
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import listPokemon from './components/listPokemon';
import singlePokemon from './components/singlePokemon';
import addPokemon from './components/addPokemon';
import Contact from './components/contact';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<listPokemon />}>
          <Route index element={<singlePokemon />} />
          <Route path="blogs" element={<addPokemon />} />
          <Route path="contact" element={<Contact />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

localhost:3000
*/