import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

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
  handleSubmit() {}

  render() {
    const { name, email, password } = this.state

    return (
      <>
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
