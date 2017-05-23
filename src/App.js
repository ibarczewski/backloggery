import React, { Component } from 'react';
import './App.css';
import Summary from './Summary';
import GameList from './GameList';

class App extends Component {
  testData = {
    statuses: [
      { status: 'Unfinished', titleCount: 27},
      { status: 'Beaten', titleCount: 128},
      { status: 'Completed', titleCount: 4}],
    total: 159,
    titles: [ { title: 'Batman: Arkham City'}, { title: 'Catherine'}]
  }

  render() {
    return (
      <div className="App">
        <Summary summaryData={this.testData}/>
        <GameList titles={this.testData.titles}/>
      </div>
    );
  }
}

export default App;
