import logo from './logo.svg';
import './App.css';
import Main from './Main'
import PersonForm from './Components/PersonForm';
import {Paper} from '@material-ui/core'

function App() {
  const editperson = {_id: '618aa6f68468d49f4be4cccc',fname:'Bob',lname:'Boberson'}
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
    </div>
  );
}

export default App;
