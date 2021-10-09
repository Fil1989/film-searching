import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'
import Routs from './components/Routs.jsx'
import logo from './assets/film-searcher.jpg'
import './App.scss'

function App() {
  const stateValues = useSelector(state => ({
    name: state.name,
    email: state.email,
    password: state.password,
    isRegistrationUrl: state.isRegistrationUrl,
  }))
  return (
    <>
      <header>
        <nav className="main_menu">
          <NavLink to="/" exact className="logo" activeClassName="active-link">
            <img src={logo} alt="Film searching" className="logo" />
          </NavLink>
          <NavLink
            to="browse"
            aria-labelledby="browse"
            className="main_button_link"
          >
            <Button variant="contained" className="main_button" id="browse">
              BROWSE
            </Button>
          </NavLink>
        </nav>

        <div className="auth_menu" aria-label="Authorisation menu">
          <NavLink to="registration" className="main_button_link">
            {stateValues.name !== '' &&
            stateValues.email !== '' &&
            stateValues.password !== '' &&
            stateValues.isRegistrationUrl === false ? (
              <Button
                variant="contained"
                className="main_button"
                color="secondary"
              >
                <span className='button_text'>resume sign up</span>
              </Button>
            ) : (
              <Button variant="contained" className="main_button">
                SIGN UP
              </Button>
            )}
          </NavLink>
          <NavLink to="login" className="main_button_link">
            <Button variant="contained" className="main_button">
              SIGN IN
            </Button>
          </NavLink>
        </div>
      </header>
      <main>
        <Routs />
      </main>
    </>
  )
}

export default App
