import React, { Component } from 'react';
import './styles/index.scss';

const statuses = {
  1: "Status 1",
  2: "Status 2",
  3: "Status 3",
  5: "Status 5",
  6: "Status 6"
};



class BoardComponent extends Component {
  render() {
    return (
       <div className="board-component">
        <div className="board-component-header">
          <div className="board-component-header-column">Person/Status</div>
          <div className="board-component-header-column">Status 1</div>
          <div className="board-component-header-column">Status 2</div>
          <div className="board-component-header-column">Status 3</div>
          <div className="board-component-header-column">Status 4</div>
          <div className="board-component-header-column">Status 5</div>
          <div className="board-component-header-column">Status 6</div>
        </div>
        <div className="board-component-body">
          <div className="board-component-body-row">
              <div className="board-component-body-row-element">Unassigned</div>
              <div className="board-component-body-row-element">Box for Status 1</div>
              <div className="board-component-body-row-element">Box for Status 2</div>
              <div className="board-component-body-row-element">Box for Status 3</div>
              <div className="board-component-body-row-element">Box for Status 4</div>
              <div className="board-component-body-row-element">Box for Status 5</div>
              <div className="board-component-body-row-element">Box for Status 6</div>
          </div>
          <div className="board-component-body-row">
              <div className="board-component-body-row-element">Arnaud</div>
              <div className="board-component-body-row-element">Box for Status 1</div>
              <div className="board-component-body-row-element">Box for Status 2</div>
              <div className="board-component-body-row-element">Box for Status 3</div>
              <div className="board-component-body-row-element">Box for Status 4</div>
              <div className="board-component-body-row-element">Box for Status 5</div>
              <div className="board-component-body-row-element">Box for Status 6</div>
          </div>
          <div className="board-component-body-row">
              <div className="board-component-body-row-element">Esteban</div>
              <div className="board-component-body-row-element">Box for Status 1</div>
              <div className="board-component-body-row-element">Box for Status 2</div>
              <div className="board-component-body-row-element">Box for Status 3</div>
              <div className="board-component-body-row-element">Box for Status 4</div>
              <div className="board-component-body-row-element">Box for Status 5</div>
              <div className="board-component-body-row-element">Box for Status 6</div>
          </div>
          <div className="board-component-body-row">
              <div className="board-component-body-row-element">Martin</div>
              <div className="board-component-body-row-element">Box for Status 1</div>
              <div className="board-component-body-row-element">Box for Status 2</div>
              <div className="board-component-body-row-element">Box for Status 3</div>
              <div className="board-component-body-row-element">Box for Status 4</div>
              <div className="board-component-body-row-element">Box for Status 5</div>
              <div className="board-component-body-row-element">Box for Status 6</div>
          </div>
          <div className="board-component-body-row">
              <div className="board-component-body-row-element">Nóra</div>
              <div className="board-component-body-row-element">Box for Status 1</div>
              <div className="board-component-body-row-element">Box for Status 2</div>
              <div className="board-component-body-row-element">Box for Status 3</div>
              <div className="board-component-body-row-element">Box for Status 4</div>
              <div className="board-component-body-row-element">Box for Status 5</div>
              <div className="board-component-body-row-element">Box for Status 6</div>
          </div>
          <div className="board-component-body-row">
              <div className="board-component-body-row-element">Paul</div>
              <div className="board-component-body-row-element">Box for Status 1</div>
              <div className="board-component-body-row-element">Box for Status 2</div>
              <div className="board-component-body-row-element">Box for Status 3</div>
              <div className="board-component-body-row-element">Box for Status 4</div>
              <div className="board-component-body-row-element">Box for Status 5</div>
              <div className="board-component-body-row-element">Box for Status 6</div>
          </div>
        </div>
       </div>
    );
  }
}

export default BoardComponent;
