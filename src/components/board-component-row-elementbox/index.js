import React, { Component } from 'react';
import './styles/index.scss';

class BoardComponentRowElementBox extends Component {

  getClassName(){
    return "board-component-body-row-elementbox status-" + this.props.statusId;
  }

  renderPostits(){
    return this.props.postits.map(
      (postit) =>
          <div className="board-row-element-postit" key={postit.id}>id: {postit.id}, title: {postit.title}</div>
    );
  }

  render() {
    return (
          <div className={this.getClassName()} key={this.props.statusId}>{this.renderPostits()}</div>
    );
  }
}

export default BoardComponentRowElementBox;
