import logo from './logo.svg';
import './App.css';
import Fun from './Components/Fun'
import Form from './Components/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fun funprop='Bana'></Fun>
        <Form></Form>
      </header>
    </div>
  );
}

export default App;
