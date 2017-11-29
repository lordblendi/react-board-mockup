import React, {
  Component
} from 'react';
import './styles/index.scss';
import BoardComponentRow from '../board-component-row/index';


class BoardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statuses: [
        {name: "Status 1"},
        {name: "Status 2"},
        {name: "Status 3"},
        {name: "Status 4"},
        {name: "Status 5"},
        {name: "Status 6"}
      ],
      users : [
        {
          name: "Unassigned",
          1: "Box for Status 1",
          2: "Box for Status 2",
          3: "Box for Status 3",
          4: "Box for Status 4",
          5: "Box for Status 5",
          6: "Box for Status 6"
        }, {
          name: "Arnaud",
          1: "Box for Status 1",
          2: "Box for Status 2",
          3: "Box for Status 3",
          4: "Box for Status 4",
          5: "Box for Status 5",
          6: "Box for Status 6"
        }, {
          name: "Esteban",
          1: "Box for Status 1",
          2: "Box for Status 2",
          3: "Box for Status 3",
          4: "Box for Status 4",
          5: "Box for Status 5",
          6: "Box for Status 6"
        }, {
          name: "Martin",
          1: "Box for Status 1",
          2: "Box for Status 2",
          3: "Box for Status 3",
          4: "Box for Status 4",
          5: "Box for Status 5",
          6: "Box for Status 6"
        }, {
          name: "Nóra",
          1: "Box for Status 1",
          2: "Box for Status 2",
          3: "Box for Status 3",
          4: "Box for Status 4",
          5: "Box for Status 5",
          6: "Box for Status 6"
        }, {
          name: "Paul",
          1: "Box for Status 1",
          2: "Box for Status 2",
          3: "Box for Status 3",
          4: "Box for Status 4",
          5: "Box for Status 5",
          6: "Box for Status 6"
        }
      ]
    };
  }


  renderPerson(id) {
    return (<BoardComponentRow person ={this.state.users[id]} />);
  }
  render() {
      return ( <div className = "board-component" >
          <div className = "board-component-header" >
          <div className = "board-component-header-column" > Person / Status </div>
          {this.state.statuses.map(
            (status) => <div className ="board-component-header-column">{status.name}</div>
          )}

          </div>
          <div className = "board-component-body" >
            {this.renderPerson(0)}
            {this.renderPerson(1)}
            {this.renderPerson(2)}
            {this.renderPerson(3)}
            {this.renderPerson(4)}
            {this.renderPerson(5)}
          </div>
        </div>
              );
            }
          }

          export default BoardComponent;
