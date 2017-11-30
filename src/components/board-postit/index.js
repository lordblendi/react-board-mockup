import React, {
  Component
} from 'react';
import './styles/index.scss';
import Paper from 'material-ui/Paper';

class BoardPostit extends Component {

  render() {
    return(
      <Paper className="board-postit" >
        <div className="board-postit-id">{this.props.postit.id}</div>
        <div className="board-postit-title">{this.props.postit.title}</div>
      </Paper>
    );
  }
}

export default BoardPostit;
