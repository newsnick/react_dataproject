import React, { Component } from 'react'
import '../../styles/LoginForm/LoginForm.css'

var loginTitle2 = 'Login Global'

class LoginForm extends Component {
  loginTitle = 'Login Class'
  constructor(props) {
    super(props)
  }
  render() {
    let loginTitle = 'Login Local'
    return (
      <div className="container">
        <div className="subcontainer">
          {' '}
          <div id="div1">
            <h2>{loginTitle2}</h2>
            <h2>{this.loginTitle}</h2>
            <h2>{loginTitle}</h2>
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
