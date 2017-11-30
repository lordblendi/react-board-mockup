import React, {
  Component
} from 'react';
import './styles/index.scss';

class BoardPostit extends Component {

  render() {
    return(
      <div className="board-row-element-postit" >id: {this.props.postit.id}, title: {this.props.postit.title}</div>
    );
  }
}

export default BoardPostit;
