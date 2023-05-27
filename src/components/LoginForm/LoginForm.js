import React, { Component } from 'react'
import '../../styles/LoginForm/LoginForm.css'

class LoginForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="subcontainer">
          {' '}
          <div id="div1">
            <h2>Login Form</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
