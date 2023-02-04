import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Etat from './Etat';
import Condition from './Condition';
import Livres, { livres } from './Livres';
import Jeux from './Jeu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>Exercice 1:</h2>
    <App image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm81XoZa9dFFAFPY-LjxgJ-XAj-KeySicSvw&usqp=CAU" title="Titre de l'image"/> <hr></hr>
    <h2>Exercice 2: <i>(state)</i> </h2>
    <Etat /> <hr></hr>
    <h2>Exercice 3:</h2>
    <Condition bool={true}/><hr></hr>
    <h2>Exercice 4:</h2>
    <Livres liv = {livres}/><hr></hr>
    <h2>TP/jeu Dé :</h2>
    <Jeux nombre = {4}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



