import React, { Component } from 'react';
import './styles/index.scss';
import $ from 'jquery';

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

  onMouseEnter = (event) => {
    const classes = "." + this.getClassName().split(' ').join('.');
    $(classes).addClass('hovering');
  }
  onMouseLeave = (event) => {
    const classes = "." + this.getClassName().split(' ').join('.');
    $(classes).removeClass('hovering');
  }

  render() {
    return (
          <div className={this.getClassName()} key={this.props.statusId} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave.bind(this)}>{this.renderPostits()}</div>
    );
  }
}

export default BoardComponentRowElementBox;
