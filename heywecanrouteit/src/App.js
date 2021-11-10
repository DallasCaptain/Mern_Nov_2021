import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import A from './A'
import B from './B';

function App() {
  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <h1>please route</h1>
        <Link to='/a'>Goto A</Link>
      </header>
      <Switch>
        <Route path='/a' component={A} />
        
        <Route path='/b' component={B} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
