import React from 'react';
import Sidebar from './Sidebar';
import Stage from './Stage';
import Chat from './Chat';
import STORE from './STORE';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Sidebar participants = {STORE.participants} />
      <Stage participants ={STORE.participants} />
      <Chat participants = {STORE.participants} events = {STORE.chatEvents}/>
    </div>
  );
  
}

export default App;
