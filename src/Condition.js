function Condition(props){
    let bool = props.bool
    if(bool){
        return <p>visible</p>
    }
    else{
        return <p>caché</p>
    }
}

export default Condition;