import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react'

import Message from './Components/Message';
import MessageDisplay from './Components/MessageDisplay';


function App() {

  const [currentMsg, setCurrentMsg] = useState(['first','second'])

  const youveGotMail = (newMessage)=>{
    setCurrentMsg([...currentMsg,newMessage])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Message onNewMessage ={youveGotMail}></Message>
        <hr></hr>
        <MessageDisplay messages={currentMsg}></MessageDisplay>
      </header>
    </div>
  );
}

export default App;
