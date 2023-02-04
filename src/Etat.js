// import React, {Component} from "react";
// ------------------------------------------Class Example ----------------------------------------------------
// class Etat extends React.Component {
//     constructor(){
//         super();
//         this.state = {x:0}
//     }

//     increments(){
//         this.setState({x: this.state.x+=1})
//     }

//     decrements() {
//         this.setState({x: this.state.x-=1})
//     }
//     render() {
//         return (
//         <div>
//          <p>{this.state.x}</p>
//         <button onClick={()=>this.increments()}> Increment </button>
//         <button onClick={()=>this.decrements()}> decrement </button>
//         </div>
//         )
//     }
// };
// export default Etat;

// -------------------------------------------------Functions Example ----------------------------------------------------
import React, { useState } from "react";
export default function Etat() {
  const [x, updatex] = useState(0);

  return (
    <div>
      <p>{x}</p>
      <button onClick={() => updatex(x + 1)}> Increment </button>
      <button onClick={() => updatex(x - 1)}> decrement </button>
    </div>
  );
}
