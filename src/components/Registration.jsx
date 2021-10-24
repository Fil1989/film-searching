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
    console.dir(e.currentTarget)

    const newUser = {
      name: e.currentTarget[0].attributes.value.nodeValue,
      email: e.currentTarget[1].attributes.value.nodeValue,
      password: e.currentTarget[2].attributes.value.nodeValue,
    }
    console.log(newUser)

    this.props.onPostUserOperation(newUser)
    this.props.onResetInputs()
  }

  render() {
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
            type="text"
            name="name"
            className="sign_up_input"
            pattern={/[a-zA-Z]/g}
          />
          <TextField
            sx={{
              marginBottom: '20px',
            }}
            value={this.props.email}
            onChange={e => this.props.onWriteEmailToState(e)}
            label="Email"
            type="email"
            // inputProps={{
            //   pattern:
            //     '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])).){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])',
            // }}
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
            inputProps={{
              pattern:
                '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,}',
            }}
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
    name: state.nameInput,
    email: state.emailInput,
    password: state.passwordInput,
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
