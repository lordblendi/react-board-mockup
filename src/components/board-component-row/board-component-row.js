import React, { Component } from 'react';
import './styles/index.scss';
import ElementBox from '../board-component-row-elementbox/board-component-row-elementbox';

class BoardComponentRow extends Component {
  filterPostits(statusId) {
    return this.props.person['postits'].filter(
      function (postit) {
        return postit.statusType === statusId;
      });
  }

  renderStatuses() {
    return this.props.statuses.map(
      (status) =>
        <ElementBox key={status.id} statusId={status.id} postits={this.filterPostits(status.id)} />
    );
  }

  render() {
    return (
          <div className="board-component-body-row">
            <ElementBox key='name' name={this.props.person.name} />
            {this.renderStatuses()}
          </div>
    );
  }
}

export default BoardComponentRow;
