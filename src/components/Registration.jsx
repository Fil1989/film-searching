import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { connect } from 'react-redux'
import { postUserOperation } from '../redux/operations.js'
import {
  writeNameToState,
  writeEmailToState,
  writePasswordToState,
  resetInputs,
  setIsRegistrationUrl,
  resetIsRegistrationUrl,
} from '../redux/actions.js'

class Registration extends Component {
  componentDidMount() {
    this.props.onSetIsRegistrationUrl()
  }
  componentWillUnmount() {
    this.props.onResetIsRegistrationUrl()
  }
  handleSubmit(e) {
    e.preventDefault()

    const newUser = {
      name: e.currentTarget[0].attributes[4].nodeValue,
      email: e.currentTarget[1].attributes[4].nodeValue,
      password: e.currentTarget[2].attributes[4].nodeValue,
    }
    this.props.onPostUserOperation(newUser)
    this.props.onResetInputs()
  }

  render() {
    // const { name, email, password } = this.state

    return (
      <>
        <h1>Please, sign up</h1>

        <form
          className="registration_form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <TextField
            sx={{
              marginBottom: '20px',
            }}
            value={this.props.name}
            onChange={e => this.props.onWriteNameToState(e)}
            label="Name"
            variant="filled"
            name="name"
            className="sign_up_input"
          />
          <TextField
            sx={{
              marginBottom: '20px',
            }}
            value={this.props.email}
            onChange={e => this.props.onWriteEmailToState(e)}
            label="Email"
            type="email"
            variant="filled"
            name="email"
            className="sign_up_input"
          />
          <TextField
            sx={{
              marginBottom: '20px',
            }}
            value={this.props.password}
            onChange={e => this.props.onWritePasswordToState(e)}
            label="Password"
            type="password"
            variant="filled"
            name="password"
            className="sign_up_input"
            // inputProps={{ pattern: '[a-z]{10}' }}
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
    onPostUserOperation: user => dispatch(postUserOperation(user)),
    onWriteNameToState: e => dispatch(writeNameToState(e)),
    onWriteEmailToState: e => dispatch(writeEmailToState(e)),
    onWritePasswordToState: e => dispatch(writePasswordToState(e)),
    onResetInputs: () => dispatch(resetInputs()),
    onSetIsRegistrationUrl: () => dispatch(setIsRegistrationUrl()),
    onResetIsRegistrationUrl: () => dispatch(resetIsRegistrationUrl()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration)
