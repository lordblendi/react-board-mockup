import React, { Component } from 'react';
import './styles/index.scss';

class BoardComponentRow extends Component {
  render() {
    return (
          <div className="board-component-body-row">
              <div className="board-component-body-row-element">{this.props.person.name}</div>
              <div className="board-component-body-row-element">{this.props.person['1']}</div>
              <div className="board-component-body-row-element">{this.props.person['2']}</div>
              <div className="board-component-body-row-element">{this.props.person['3']}</div>
              <div className="board-component-body-row-element">{this.props.person['4']}</div>
              <div className="board-component-body-row-element">{this.props.person['5']}</div>
              <div className="board-component-body-row-element">{this.props.person['6']}</div>
          </div>
    );
  }
}

export default BoardComponentRow;
