import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'
import Routs from './components/Routs.tsx'
import logo from './assets/film-searcher.jpg'
import './App.scss'
import { logOut, currentUser } from './redux/operations.ts'
// import { tokenNull } from './redux/actions.js'

function App() {
  const stateValues = useSelector(state => ({
    name: state.nameInput,
    email: state.emailInput,
    password: state.passwordInput,
    isRegistrationUrl: state.isRegistrationUrl,
    token: state.token,
    userName: state.name,
  }))
  useEffect(() => {
    if (stateValues.token !== null) {
      dispatch(currentUser())
    }
    // dispatch(tokenNull())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const dispatch = useDispatch()
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
          {stateValues.token ? (
            <>
              <span className="welcome">Welcome, {stateValues.userName}</span>
              <Button
                variant="contained"
                className="main_button"
                onClick={() => dispatch(logOut())}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
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
                    <span className="button_text">resume sign up</span>
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
            </>
          )}
        </div>
      </header>
      <main>
        <Routs />
      </main>
    </>
  )
}

export default App
