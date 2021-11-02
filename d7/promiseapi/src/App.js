import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [poki,setPoki] = useState([])

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/10/")
    .then(res=>{
      setPoki([res.data])
      
    })
    .catch(err=>{console.log(err)})
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>PokiApi</h1>
      </header>
      <ul>
        {poki.map((pokemon, i)=>{
          return <li key={i}>{pokemon.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
