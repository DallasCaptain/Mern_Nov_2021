import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'

function App() {

  let myname = 'Bob'
  let all =()=>{alert('Ouch')}
  return (
    <div className="App">
      <header className="App-header">
        <Header yournamehere={'nick'} >
        </Header>
        <Header yournamehere={myname} >
        </Header>
        <Header yournamehere={myname} >
        </Header>
        <Header yournamehere={myname} >
        </Header>

        <button onClick={all} >This little button</button>
      </header>
    </div>
  );
}

export default App;
