import React, { Component } from 'react';
import './styles/index.scss';
import BoardComponent from '../../components/board-component/index';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statuses: [{
          name: "Status 1",
          id: 1
        },
        {
          name: "Status 2",
          id: 2
        },
        {
          name: "Status 3",
          id: 3
        },
        {
          name: "Status 4",
          id: 4
        },
        {
          name: "Status 5",
          id: 5
        },
        {
          name: "Status 6",
          id: 6
        }
      ],
      users: [{
        name: "Unassigned",
        id: "Unassigned",
        1: "Box for Status 1",
        2: "Box for Status 2",
        3: "Box for Status 3",
        4: "Box for Status 4",
        5: "Box for Status 5",
        6: "Box for Status 6"
      }, {
        name: "Arnaud",
        id: "Arnaud",
        1: "Box for Status 1",
        2: "Box for Status 2",
        3: "Box for Status 3",
        4: "Box for Status 4",
        5: "Box for Status 5",
        6: "Box for Status 6"
      }, {
        name: "Esteban",
        id: "Esteban",
        1: "Box for Status 1",
        2: "Box for Status 2",
        3: "Box for Status 3",
        4: "Box for Status 4",
        5: "Box for Status 5",
        6: "Box for Status 6"
      }, {
        name: "Martin",
        id: "Martin",
        1: "Box for Status 1",
        2: "Box for Status 2",
        3: "Box for Status 3",
        4: "Box for Status 4",
        5: "Box for Status 5",
        6: "Box for Status 6"
      }, {
        name: "Nóra",
        id: "Nóra",
        1: "Box for Status 1",
        2: "Box for Status 2",
        3: "Box for Status 3",
        4: "Box for Status 4",
        5: "Box for Status 5",
        6: "Box for Status 6"
      }, {
        name: "Paul",
        id: "Paul",
        1: "Box for Status 1",
        2: "Box for Status 2",
        3: "Box for Status 3",
        4: "Box for Status 4",
        5: "Box for Status 5",
        6: "Box for Status 6"
      }]
    };
  }

  render() {
    return (
       <div className="board">
        <BoardComponent statuses={this.state.statuses} users={this.state.users}/>
      </div>
    );
  }
}

export default Board;
