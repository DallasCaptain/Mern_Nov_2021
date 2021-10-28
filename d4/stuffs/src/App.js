import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'

function App() {

  let myname = 'Bob'

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

        <button onClick={()=>{alert('Ouch')}} >This little button</button>
      </header>
    </div>
  );
}

export default App;
