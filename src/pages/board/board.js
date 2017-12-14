import React, { Component } from 'react';
import './styles/index.scss';
import BoardComponent from '../../components/board-component/board-component';
import OptionsComponent from '../../components/options-component/options-component';

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleSquadChange = this.handleSquadChange.bind(this);
    let squads = [{id:1, name:'Squad 1'}, {id:2, name:'Squad 2'}, {id:3, name:'Squad 3'}];
    this.state = {statuses: [], users: [], squads, selected: squads[0].id};

    this.loadData(this.state.selected);
  }


  handleSquadChange(value) {
    const _this = this;
    this.setState({selected: value.id}, function() {
      _this.loadData(this.state.selected);
    });
  }

  loadData(squadId){
    const _this = this;
    fetch('/assets/squad'+squadId+'-smartlist.json')
      .then(function(response) {
        return response.json();
      })
      .then((responseData) => {
        _this.setState(responseData);
        return responseData;
      })
  }

  render() {
    return (
      <React.Fragment>
        <OptionsComponent selected={this.state.selected} options={this.state.squads} onChange={this.handleSquadChange}/>
        <div className="board">
          <BoardComponent statuses={this.state.statuses} users={this.state.users}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
