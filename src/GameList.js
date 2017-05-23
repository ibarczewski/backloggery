import React, { Component } from 'react';
import './GameList.css';
import edit from './images/edit.gif';
import beaten from './images/beaten.gif';

class GameList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var list = this.props.titles.map((title, index) =>
      <div className="game-box" key={index}>
        <img className="edit-button" src={edit}></img>
        <img className="completion-status" src={beaten}></img>
        {title.title}
      </div>
    );

    return (
      <div className="list-container">
        <div className="list-header">
          Xbox 360
        </div>
        <div>
          {list}
        </div>
      </div>
    );
  }
}

export default GameList;
