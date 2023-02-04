import React, {Component} from "react";
class Etat extends React.Component {
    constructor(){
        super();
        this.state = {x:0}
    }

    increments(){
        this.setState({x: this.state.x+=1})
    }

    decrements() {
        this.setState({x: this.state.x-=1})
    }
    render() {
        return (
        <div>
         <p>{this.state.x}</p>   
        <button onClick={()=>this.increments()}> Increment </button>
        <button onClick={()=>this.decrements()}> decrement </button>

        </div>


        )
    }
};

export default Etat;