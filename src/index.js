import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 


import SinglePokemon from './components/singlePokemon'; 
import Contact from './components/contact';
import Lists from './components/lists';
import AddPokemen from './components/addPokemon' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="lists" element={<Lists />} />
      <Route path="singlePokemon" element={<SinglePokemon />} />
      <Route path="addPokemon" element={<AddPokemen/>} />
      <Route path="contact" element={<Contact />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
