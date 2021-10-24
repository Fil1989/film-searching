import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { connect } from 'react-redux'
import { loginUser } from '../redux/operations.js'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = e => {
    this.setState(currentState => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }))
  }
  handleSubmit(e) {
    e.preventDefault()
    const user = {
      email: e.currentTarget[0].attributes.value.nodeValue,
      password: e.currentTarget[1].attributes.value.nodeValue,
    }
    this.props.onLoginUser(user)
    this.setState(currentState => ({
      ...currentState,
      email: '',
      password: '',
    }))
  }

  render() {
    const { email, password } = this.state

    return (
      <>
        <h1>Please, sign in</h1>
        <form
          className="registration_form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <TextField
            sx={{
              marginBottom: '20px',
            }}
            value={email}
            onChange={this.handleChange}
            label="Email"
            // type="email"
            inputProps={{
              pattern:
                "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?",
            }}
            variant="filled"
            name="email"
            className="sign_up_input"
          />
          <TextField
            sx={{
              marginBottom: '20px',
            }}
            value={password}
            onChange={this.handleChange}
            label="Password"
            variant="filled"
            name="password"
            type="password"
            inputProps={{
              pattern:
                '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,}',
            }}
            className="sign_up_input"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    name: state.name,
    email: state.email,
    password: state.password,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLoginUser: user => dispatch(loginUser(user)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
