import React, { Component } from 'react';

class ProgressStatus extends Component {
  constructor(props) {
    super(props);
  }

  calculateStatusPercentage() {
    console.log('TOTAL:', this.props.total);
    var percentage = ((this.props.titleCount / this.props.total) * 100).toFixed(1);
    return `${percentage}%`;
  }

  render() {
    return (
      <div>
        <div className="status">{this.props.status}</div>
        <div className="titleCount">{this.props.titleCount}</div>
        <div className="border-container">
          <div className="progress" style={{width: this.calculateStatusPercentage()}}></div>
        </div>
        <div className="percentage">{this.calculateStatusPercentage()}</div>
      </div>
    );
  }
}

export default ProgressStatus;
