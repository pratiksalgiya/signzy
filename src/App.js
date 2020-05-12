import React from 'react';
import Settings from './components/Settings';
import LiveReport from './components/LiveReport';
import Room from './components/Room'
import './App.css';

function App() {
  return (
    <div className="App">
      <Settings></Settings>
      <LiveReport></LiveReport>
      <Room></Room>
    </div>
  );
}

export default App;
