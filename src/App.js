import React, { Component } from 'react';
import './App.css';

import RadioStations from './components/RadioStations'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Radio Tuner</h1>
        </header>
        <article className="main-article">
          <section className="main-section">
            <ul className="radio-stations-list">
              <RadioStations/>
            </ul>
          </section>
        </article>
      </div>
    );
  }
}

export default App;
