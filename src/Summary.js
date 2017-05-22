import React, { Component } from 'react';
import ProgressStatus from './ProgressStatus';
import './Summary.css';

class Summary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var self = this;
    var items = this.props.summaryData.statuses.map((status, index) =>
      <ProgressStatus key={index} status={status.status} titleCount={status.titleCount} total={self.props.summaryData.total} />
    );

    return (
      <div className="summary">
        {items}
      </div>
    );
  }
}

export default Summary;
