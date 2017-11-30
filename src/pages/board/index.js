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
        postits: [
          {
            statusType: 1,
            title: "Esco Task1",
            id: "1221"
          },
          {
            statusType: 2,
            title: "Esco Task2",
            id: "1222"
          },
          {
            statusType: 3,
            title: "Esco Task3",
            id: "1223"
          },
          {
            statusType: 4,
            title: "Esco Task4",
            id: "1224"
          }
        ]
      }, {
        name: "Arnaud",
        id: "Arnaud",
        postits: [
          {
            statusType: 1,
            title: "Oslo Task 1",
            id: "1231"
          },
          {
            statusType: 4,
            title: "Oslo Task 4",
            id: "1234"
          },
          {
            statusType: 5,
            title: "Oslo Task 5",
            id: "1235"
          },
          {
            statusType: 6,
            title: "Oslo Task 6",
            id: "1236"
          }
        ]
      }, {
        name: "Esteban",
        id: "Esteban",
        postits: [
          {
            statusType: 1,
            title: "BDE Task 11",
            id: "12411"
          },
          {
            statusType: 1,
            title: "BDE Task 12",
            id: "12412"
          },
          {
            statusType: 5,
            title: "BDE Task 514",
            id: "124514"
          },
          {
            statusType: 5,
            title: "BDE Task 523",
            id: "124523"
          },
          {
            statusType: 5,
            title: "BDE Task 51",
            id: "12451"
          },
          {
            statusType: 5,
            title: "BDE Task 52",
            id: "12452"
          }
        ]
      }, {
        name: "Martin",
        id: "Martin",
        postits: [
          {
            statusType: 1,
            title: "Eurostat Task 1",
            id: "125"
          },
          {
            statusType: 3,
            title: "Eurostat Task 3",
            id: "1253"
          },
          {
            statusType: 2,
            title: "Eurostat Task 2",
            id: "1252"
          },
          {
            statusType: 4,
            title: "Eurostat Task 4",
            id: "1254"
          }
        ]
      }, {
        name: "Nóra",
        id: "Nóra",
        postits: [
          {
            statusType: 1,
            title: "Design Task 1",
            id: "1261"
          },
          {
            statusType: 2,
            title: "Design Task 21",
            id: "1262"
          },
          {
            statusType: 4,
            title: "Design Task 41",
            id: "12641"
          },
          {
            statusType: 4,
            title: "Design Task 42",
            id: "12642"
          }
        ]
      }, {
        name: "Paul",
        id: "Paul",
        postits: [
          {
            statusType: 1,
            title: "Powalco Task 1",
            id: "1271"
          },
          {
            statusType: 2,
            title: "Powalco Task 2",
            id: "1272"
          }
        ]
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
