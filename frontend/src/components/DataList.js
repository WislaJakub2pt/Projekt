import React, { Component } from "react";
import { Table } from "reactstrap";
import NewDataModal from "./NewDataModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class DataList extends Component {
  render() {
    const data = this.props.data;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Data 1</th>
            <th>Data 2</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!data || data.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            data.map((d) => (
              <tr key={d.pk}>
                <td>{d.data1}</td>
                <td>{d.data2}</td>
                <td align="center">
                <NewDataModal
  create={false}
  data1={d.data1}
  data2={d.data2}
  resetState={this.props.resetState}
/>
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal pk={d.pk} resetState={this.props.resetState} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default DataList;