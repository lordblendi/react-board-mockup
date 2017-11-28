import React, { Component } from 'react';
import './styles/index.scss';


class BoardComponent extends Component {
  render() {
    return (
       <table>
        <thead>
          <tr>
            <th>User/Status</th>
            <th>Status1</th>
            <th>Status2</th>
            <th>Status3</th>
            <th>Status4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><em>Unassigned</em></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>User1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>User2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>User3</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default BoardComponent;
