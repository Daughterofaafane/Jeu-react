import React, { useState } from "react";

export default function Jeufunction(props) {
  const [x, setX] = useState({ face: null, compteur: 0, fin: false });
  console.log(x.compteur)
  function Jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    setX({ face: valeur, compteur: x.compteur + 1})    
  }

  function init() {
    setX({ face: null, compteur: 0, fin: false });
  }

  function getImage() {
    if (x.face == null) {
      return "images/init.PNG";
    } else {
      return `images/face${x.face}.PNG`;
    }
  }

  const styleImage = {width:"60px", height:"60px"};
  return (
    <div className="jeu">
      <h1>Jeu de Dé...</h1>
      <h3>face: {x.face} </h3>
      <img src ={getImage()} style={styleImage} />
      <h3>nombre d'essais {x.compteur}</h3>
      {(x.face === props.nombre) ?
        <div><p>Bravo vous avez trouvez la face cachée</p>
        <button onClick={() => init()}>initialiser</button></div> : <button onClick={() => Jouer()}>jouer</button>
      }
      {/* <button {...(this.state.face == this.props.nombre) ? {onClick:() => {this.initialiser()} : ""} >initialiser</button> */}
    </div>
  );

}

