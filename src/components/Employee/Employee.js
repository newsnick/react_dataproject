import React, { Component } from 'react'

export default class Employee extends Component {
  render() {
    return (
      <div className="mt-5">
        <table>
          <tr>
            <th>{this.props.EmpID}</th>
            <th>{this.props.EmpName}</th>
            <th>{this.props.EmpSalary}</th>
            <th>{this.props.Department}</th>
            <th>{this.props.EmpCity}</th>
            <th>{this.props.EmpCountry}</th>
          </tr>
        </table>
      </div>
    )
  }
}
