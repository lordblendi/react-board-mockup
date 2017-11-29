import React, {
  Component
} from 'react';
import './styles/index.scss';
import BoardComponentRow from '../board-component-row/index';


class BoardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statuses: {
        1: "Status 1",
        2: "Status 2",
        3: "Status 3",
        5: "Status 5",
        6: "Status 6"
      },
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
            <div className = "board-component-header-column" > Status 1 </div>
            <div className = "board-component-header-column" > Status 2 </div>
            <div className = "board-component-header-column" > Status 3 </div>
            <div className = "board-component-header-column" > Status 4 </div>
            <div className = "board-component-header-column" > Status 5 </div>
            <div className = "board-component-header-column" > Status 6 </div>
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
