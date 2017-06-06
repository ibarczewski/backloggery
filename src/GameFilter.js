import React, { Component } from 'react';

class GameFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <div>Filter</div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }

  handleChange(e) {
    this.props.onFilterChange(e.target.value);
    this.setState({ value: e.target.value });
  }
}

export default GameFilter;
