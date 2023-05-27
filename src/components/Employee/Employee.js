/* import React, { Component } from 'react'
import '../../styles/Employee/Employee.css'

export default class Employee extends Component {
  render() {
    return (
      <div class="mt-5">
        <table>
          <tr class="tablehead">
            <th>
              <h5 class="tablerow">EmpID</h5>
              <td class="tabledata">{this.props.EmpID}</td>
            </th>
            <th>
              <h5 class="tablerow">EmpName</h5>
              <td class="tabledata">{this.props.EmpName}</td>
            </th>
            <th>
              <h5 class="tablerow">EmpSalary</h5>
              <td class="tabledata">{this.props.EmpSalary}</td>
            </th>
            <th>
              <h5 class="tablerow">Department</h5>
              <td class="tabledata">{this.props.Department}</td>
            </th>
            <th>
              <h5 class="tablerow">EmpCity</h5>
              <td class="tabledata">{this.props.EmpCity}</td>
            </th>
            <th>
              <h5 class="tablerow">EmpCountry</h5>
              <td class="tabledata">{this.props.EmpCountry}</td>
            </th>
          </tr>
        </table>
      </div>
    )
  }
}
 */
import React from 'react'
import '../../styles/Employee/Employee.css'

const Employee = ({ employees }) => {
  return (
    <div className="mt-5">
      <table>
        <thead className="tablehead">
          <tr>
            <th>
              <h5 className="tablerow">EmpID</h5>
            </th>
            <th>
              <h5 className="tablerow">EmpName</h5>
            </th>
            <th>
              <h5 className="tablerow">EmpSalary</h5>
            </th>
            <th>
              <h5 className="tablerow">Department</h5>
            </th>
            <th>
              <h5 className="tablerow">EmpCity</h5>
            </th>
            <th>
              <h5 className="tablerow">EmpCountry</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.EmplD}>
              <td className="tabledata">{employee.EmplD}</td>
              <td className="tabledata">{employee.EmpName}</td>
              <td className="tabledata">{employee.EmpSalary}</td>
              <td className="tabledata">{employee.Department}</td>
              <td className="tabledata">{employee.EmpCity}</td>
              <td className="tabledata">{employee.EmpCountry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employee
