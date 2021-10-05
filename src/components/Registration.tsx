import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { usersAPI } from '../data/users'

class Registration extends Component {
  state = {
    name: '',
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
    // type userrsType = object[]
    // const userrs: userrsType = [...usersAPI.users]
    interface newUserTypes {
      name: string | null
      email: string | null
      password: string | null
      token: string | null
    }
    const newUser: newUserTypes = {
      name: e.currentTarget[0].attributes[4].nodeValue,
      email: e.currentTarget[1].attributes[4].nodeValue,
      password: e.currentTarget[2].attributes[4].nodeValue,
      token: null,
    }
    // userrs.push(newUser)
    usersAPI.setusers = newUser

    console.log(usersAPI.users)
  }

  render() {
    const { name, email, password } = this.state

    return (
      <>
        <h1>Please, sign up</h1>

        <form className="registration_form" onSubmit={this.handleSubmit}>
          <TextField
            sx={{
              marginBottom: '20px',
            }}
            value={name}
            onChange={this.handleChange}
            label="Name"
            variant="filled"
            name="name"
            className="sign_up_input"
          />
          <TextField
            sx={{
              marginBottom: '20px',
            }}
            value={email}
            onChange={this.handleChange}
            label="Email"
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
export default Registration
