import React from 'react';
import './App.css';
import MeteorList from './components/MeteorList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> NASA Meteorite API</h1>
        </header>

        <MeteorList />
      </div>
    );
  }
}

export default App;
