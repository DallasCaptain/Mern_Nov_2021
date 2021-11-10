import logo from './logo.svg';
import './App.css';
import Main from './Main'
import PersonForm from './Components/PersonForm';
import {Paper} from '@material-ui/core'
import axios from 'axios';
import {useState} from 'react'

function App() {
  const [editperson,setEditperson] = useState({_id: '618bf757d616f4ccb3010df8',fname:'carlo',lname:'carlerson'})
  const foau = ()=>{
    axios.put('http://localhost:8000/api/test',{_id: '618bf757d616f4ccb3010df8', fname:'c',email:'bob@bob.com'})
    .then(res=>setEditperson(res))
    .catch(err=>console.log(err))
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Manager</h1>
      </header>
      <Paper elevation={5}>
        <p>Welcome to the product people manager</p>
      </Paper>
      <Main></Main>
      <PersonForm></PersonForm>
      <PersonForm obj={editperson}></PersonForm>

      <button onClick={foau}>Update Bob</button>
    </div>
  );
}

export default App;
