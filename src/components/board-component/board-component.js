import React, {
  Component
} from 'react';
import './styles/index.scss';
import BoardComponentRow from '../board-component-row/board-component-row';


class BoardComponent extends Component {
  listUsers() {
    return this.props.users.map(
      (person) =>
      <BoardComponentRow key={person.id} person={person} statuses={this.props.statuses} />
    );
  }

  makeHeader() {
    return this.props.statuses.map(
      (status) =>
      <div className = "board-component-header-column" key={status.id}>
        {status.name}
      </div>
    );
  }

  render() {
    return (
      <div className = "board-component" >
        <div className = "board-component-header" >
          <div className = "board-component-header-column" > Person/Status </div>
          {this.makeHeader()}
        </div>
        <div className = "board-component-body" >
          {this.listUsers()}
        </div>
      </div>
    );
  }
}

export default BoardComponent;
