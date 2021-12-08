import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { connect, ConnectedProps } from 'react-redux'
import { postUserOperation } from '../redux/operations'
import {
  writeNameToState,
  writeEmailToState,
  writePasswordToState,
  resetInputs,
  setIsRegistrationUrl,
  resetIsRegistrationUrl,
} from '../redux/actions'
import { IState } from '../redux/reduxInterfaces/reduxMain.interface'
import { INewUser } from '../interfaces/main.interface'

class Registration extends Component<PropsFromRedux> {
  componentDidMount() {
    this.props.onSetIsRegistrationUrl()
  }
  componentWillUnmount() {
    this.props.onResetIsRegistrationUrl()
  }
  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newUser = {
      name: this.props.name,
      email: this.props.email,
      password: this.props.password,
    }

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
            onChange={this.props.onWriteNameToState}
            label="Name"
            variant="filled"
            type="text"
            name="name"
            className="sign_up_input"
            inputProps={{
              pattern: '[a-zA-Z0-9]{3,30}',
            }}
          />
          <TextField
            sx={{
              marginBottom: '20px',
            }}
            value={this.props.email}
            onChange={this.props.onWriteEmailToState}
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
            value={this.props.password}
            onChange={this.props.onWritePasswordToState}
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
const mapState = (state: IState) => {
  return {
    name: state.nameInput,
    email: state.emailInput,
    password: state.passwordInput,
  }
}
const mapDispatch = {
  onPostUserOperation: (user: INewUser) => postUserOperation(user),
  onWriteNameToState: (e: React.ChangeEvent<HTMLInputElement>) =>
    writeNameToState(e),
  onWriteEmailToState: (e: React.ChangeEvent<HTMLInputElement>) =>
    writeEmailToState(e),
  onWritePasswordToState: (e: React.ChangeEvent<HTMLInputElement>) =>
    writePasswordToState(e),
  onResetInputs: () => resetInputs(),
  onSetIsRegistrationUrl: () => setIsRegistrationUrl(),
  onResetIsRegistrationUrl: () => resetIsRegistrationUrl(),
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Registration)
