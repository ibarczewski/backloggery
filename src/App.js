import React, { Component } from 'react';
import './App.css';
import Summary from './Summary';
import GameList from './GameList';
import GameFilter from './GameFilter';
import * as _ from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.state = { filteredTitles: this.testData.titles };
  }

  testData = {
    statuses: [
      { status: 'Unfinished', titleCount: 27},
      { status: 'Beaten', titleCount: 128},
      { status: 'Completed', titleCount: 4}],
    total: 159,
    titles: [ { title: 'Batman: Arkham City', system: 'Xbox 360'}, { title: 'Batman: Arkham Knight', system: 'Xbox 360'}, { title: 'Catherine', system: 'PlayStation 3'}]
  }

  render() {
    const filteredTitles = this.state.filteredTitles;

    return (
      <div className="App">
        <Summary summaryData={ this.testData }/>
        <GameList titles={ filteredTitles }/>
        <GameFilter systems={ _.chain(filteredTitles).map('system').uniq().value() } onFilterChange={ this.handleFilterChange }/>
      </div>
    );
  }

  handleFilterChange(filter) {
    var filteredTitles = _.filter(this.testData.titles, (game) => {
      return game.title.toLowerCase().includes(filter.toLowerCase());
    });

    this.setState({ filteredTitles: filteredTitles });
  }
}

export default App;
