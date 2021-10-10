import { createReducer } from '@reduxjs/toolkit'
const initialState = {
  nameInput: '',
  emailInput: '',
  passwordInput: '',
  isRegistrationUrl: false,
  registratedUsers: [],
  token: null,
  name: '',
  films: [],
  // isLoggedOn: false,
}
export const registratedUsers = createReducer(initialState.registratedUsers, {
  'Server/AddUserSuccess': (state, action) => [...state, action.payload],
  'Server/AddUserError': (state, action) => {
    console.log(action.payload)
    return state
  },
})
export const nameInput = createReducer(initialState.nameInput, {
  'State/WriteNameToState': (_, action) => action.payload.name,
  'State/ResetInputs': (_, action) => '',
})
export const emailInput = createReducer(initialState.emailInput, {
  'State/WriteEmailToState': (_, action) => action.payload.email,
  'State/ResetInputs': (_, action) => '',
})
export const passwordInput = createReducer(initialState.passwordInput, {
  'State/WritePasswordToState': (_, action) => action.payload.password,
  'State/ResetInputs': (_, action) => '',
})
export const isRegistrationUrl = createReducer(initialState.isRegistrationUrl, {
  'State/SetIsRegistrationUrl': (_, action) => true,
  'State/ResetIsRegistrationUrl': (_, action) => false,
})

export const name = createReducer(initialState.name, {
  'Server/LoginSuccess': (_, action) => {
    return action.payload.name
  },
  'Server/LoginError': (state, action) => {
    return ''
  },
  'Server/LogOutSuccess': (state, _) => '',
  'Server/CurrentUserSuccess': (state, action) => action.payload.name,
})
// export const isLoggenOn = createReducer(initialState.isLoggenOn, {
//   'Server/LoginSuccess': (_, action) => {
//     return true
//   },
//   'Server/LoginError': (state, action) => {
//     return false
//   },
//   'Server/LogOutSuccess': (state, _) => false,
//   'Server/CurrentUserSuccess': (_, action) => {
//     return true
//   },
// })
export const token = createReducer(initialState.token, {
  'Server/LoginSuccess': (_, action) => {
    console.log(action.payload)
    return action.payload.token
  },
  'Server/LoginError': (state, action) => {
    console.log(action.payload)
    return null
  },
  'Server/LogOutSuccess': (state, _) => null,
  'Server/LogOutError': (state, action) => {
    console.log(action.payload)
    return state
  },
  'Server/CurrentUserSuccess': (state, action) => action.payload.token,
  'Server/CurrentUserError': (state, action) => {
    console.error(action.payload)
    return state
  },
  'State/TokenNull': (state, action) => null,
})
export const films = createReducer(initialState.films, {
  'State/Search': (state, action) => action.payload,
})
