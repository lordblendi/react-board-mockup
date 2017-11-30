import React, { Component } from 'react';
import './styles/index.scss';
import ElementBox from '../board-component-row-elementbox/index';

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
            <div className="board-component-body-row-elementbox">{this.props.person['name']}</div>
            {this.renderStatuses()}
          </div>
    );
  }
}

export default BoardComponentRow;
