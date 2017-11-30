import React, { Component } from 'react';
import './styles/index.scss';

class BoardComponentRow extends Component {

  renderPostits(postits){
    return postits.map(
      (postit) =>
          <div className="board-row-element-postit" key={postit.id}>id: {postit.id}, title: {postit.title}</div>
    );
  }

  filterPostits(statusId) {
    return this.props.person['postits'].filter(
      function (postit) {
        return postit.statusType === statusId
      });
  }

  renderStatuses() {
    return this.props.statuses.map(
      (status) =>
        <div className="board-component-body-row-elementbox" key={status.id}>{this.renderPostits(this.filterPostits(status.id))}</div>
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
