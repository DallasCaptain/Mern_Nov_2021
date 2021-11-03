import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Bobshouse from './Components/Bobshouse'

function App() {
  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <h1>Routing Fun</h1>
        <Link to='/'>Home</Link>
        <Link to='/bob'>Bobs</Link>
      </header>
      <div className='App'>

      <Switch>
        <Route exact path='/'>
          <p>Home</p>
        </Route>

        <Route path='/:name'>
          <Bobshouse></Bobshouse>
        </Route>

      </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
