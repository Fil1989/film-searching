import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { connect, ConnectedProps } from 'react-redux'
import { loginUser } from '../redux/operations'
import { ILoginUser } from '../interfaces/main.interface'

interface ILocalState {
  email: string
  password: string
}

class Login extends Component<PropsFromRedux, ILocalState> {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e: { target: { value: string; name: string } }) => {
    this.setState(currentState => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }))
  }
  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const user: ILoginUser = {
      // @ts-ignore
      email: e.currentTarget[0].attributes.value.nodeValue,
      // @ts-ignore
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
const mapDispatch = {
  onLoginUser: (user: ILoginUser) => loginUser(user),
}
const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Login)
