import React, { Component } from 'react';
import './styles/index.scss';
import BoardComponent from '../../components/board-component/index';


class Board extends Component {
  render() {
    return (
       <div className="board">
        <BoardComponent/>
      </div>
    );
  }
}

export default Board;
