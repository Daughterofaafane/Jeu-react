import './App.css';

function App(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} />
    </div>
  );
}

export default App;
