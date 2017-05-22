import React, { Component } from 'react';
import './App.css';
import Summary from './Summary';

class App extends Component {
  testData = {
    statuses: [
      { status: 'Unfinished', titleCount: 27},
      { status: 'Beaten', titleCount: 128},
      { status: 'Completed', titleCount: 4}],
    total: 159
  }

  render() {
    return (
      <div className="App">
        <Summary summaryData={this.testData}/>
      </div>
    );
  }
}

export default App;
