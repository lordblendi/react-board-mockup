import React, { Component } from 'react';
import './styles/index.scss';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class BoardComponent extends Component {
  render() {
    return (
       <Table
         fixedHeader={true}
         selectable={false}
         multiSelectable={false}
         >
        <TableHeader
          displaySelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn>User/Status</TableHeaderColumn>
            <TableHeaderColumn>Status1</TableHeaderColumn>
            <TableHeaderColumn>Status2</TableHeaderColumn>
            <TableHeaderColumn>Status3</TableHeaderColumn>
            <TableHeaderColumn>Status4</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          showRowHover={true}
          stripedRows={true}
        >
          <TableRow>
            <TableRowColumn><em>Unassigned</em></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>User1</TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>User2</TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>User3</TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default BoardComponent;
