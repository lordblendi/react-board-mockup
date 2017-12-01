import React, { Component } from 'react';
import './styles/index.scss';
import $ from 'jquery';
import BoardPostit from '../board-postit/board-postit';

class BoardComponentRowElementBox extends Component {

  getClassName(){
    const defaultClass = "board-component-body-row-elementbox "
    if (this.props.name !== undefined) {
      return  defaultClass + "name";
    }
    return defaultClass + "status-" + this.props.statusId;
  }

  renderPostits(){
    return this.props.postits.map(
      (postit) =>
          <BoardPostit key={postit.id} postit={postit} />
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
          <div className={this.getClassName()} key={this.props.statusId} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave.bind(this)}>
          {this.props.name !== undefined ? this.props.name : this.renderPostits()}

          </div>
    );
  }
}

export default BoardComponentRowElementBox;
