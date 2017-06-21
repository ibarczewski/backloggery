import React, { Component } from 'react';
import './GameFilter.css';
import * as _ from 'lodash';

class GameFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', systemFilter: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.sysList = this.props.systems;
  }

  render() {
    var systemList = this.sysList.map((system) =>
      <div>
        <input type="checkbox" name={system} key={system} onChange={this.handleCheckChange} />
        <label>{system}</label>
      </div>
    );

    return (
      <div className="filter">
        <div>Filter</div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <form>
          {systemList}
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.props.onFilterChange(e.target.value);
    this.setState({ value: e.target.value });
  }

  handleCheckChange(e) {
    var newFilter = this.state.systemFilter;
    if (this.state.systemFilter.includes(e.target.name)) {
      newFilter = _.filter(newFilter, e.target.name);
      this.setState({systemFilter: newFilter});
    } else {
      newFilter.push(e.target.name);
    }

    this.props.onSystemChange(newFilter);
    this.setState({systemFilter: newFilter});
  }
}

export default GameFilter;
