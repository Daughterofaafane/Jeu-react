import React, { Component } from "react";

class Jeux extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouer() {
    this.setState({compteur: this.state.compteur+=1});
    const valeur = Math.floor(Math.random() * 6) + 1;
    //completer le code
    this.setState({face: this.state.face = valeur})
    // if(valeur === this.state.face){
    //   this.setState({fin: this.state.fin = true})
    // }
  }

  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }

  getImage(){
    if(this.state.face==null) {
      return "images/init.PNG";
    }
    else{
      return `images/face${this.state.face}.PNG`;
    }
  }

  render() {
    const styleImage = {width:"60px", height:"60px"};
    return (
      <div className="jeu">
        <h1>Jeu de Dé...</h1>
        <h3>face: {this.state.face} </h3>
        <img src ={this.getImage()} style={styleImage} />
        <h3>nombre d'essais {this.state.compteur}</h3>
        {(this.state.face === this.props.nombre) ?
          <div><p>Bravo vous avez trouvez la face cachée</p>
          <button onClick={() => this.initialiser()}>initialiser</button></div> : <button onClick={() => this.jouer()}>jouer</button>
        }

        
        {/* <button {...(this.state.face == this.props.nombre) ? {onClick:() => {this.initialiser()} : ""} >initialiser</button> */}
      </div>
    );
  }
}



export default Jeux;