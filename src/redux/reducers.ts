// import { createReducer } from '@reduxjs/toolkit'

import { IState, IAction } from './reduxInterfaces/reduxMain.interface'

const initialState: IState = {
  nameInput: '',
  emailInput: '',
  passwordInput: '',
  isRegistrationUrl: false,
  registratedUsers: [],
  token: null,
  name: '',
  films: [],
}

// export const registratedUsers = createReducer(initialState.registratedUsers, {
//   'Server/AddUserSuccess': (state, action) => [...state, action.payload],
//   'Server/AddUserError': (state, action) => {
//     console.log(action.payload)
//     return state
//   },
// })

// export const nameInput = createReducer(initialState.nameInput, {
//   'State/WriteNameToState': (_, action) => action.payload.name,
//   'State/ResetInputs': (_, action) => '',
// })

// export const emailInput = createReducer(initialState.emailInput, {
//   'State/WriteEmailToState': (_, action) => action.payload.email,
//   'State/ResetInputs': (_, action) => '',
// })
// export const passwordInput = createReducer(initialState.passwordInput, {
//   'State/WritePasswordToState': (_, action) => action.payload.password,
//   'State/ResetInputs': (_, action) => '',
// })

// export const isRegistrationUrl = createReducer(initialState.isRegistrationUrl, {
//   'State/SetIsRegistrationUrl': (_, action) => true,
//   'State/ResetIsRegistrationUrl': (_, action) => false,
// })

// export const name = createReducer(initialState.name, {
//   'Server/LoginSuccess': (_, action) => {
//     return action.payload.name
//   },
//   'Server/LoginError': (state, action) => {
//     return ''
//   },
//   'Server/LogOutSuccess': (state, _) => '',
//   'Server/CurrentUserSuccess': (state, action) => action.payload.name,
// })

// export const token = createReducer(initialState.token, {
//   'Server/LoginSuccess': (_, action) => {
//     console.log(action.payload)
//     return action.payload.token
//   },
//   'Server/LoginError': (state, action) => {
//     console.log(action.payload)
//     return null
//   },
//   'Server/LogOutSuccess': (state, _) => null,
//   'Server/LogOutError': (state, action) => {
//     console.log(action.payload)
//     return state
//   },
//   'Server/CurrentUserSuccess': (state, action) => action.payload.token,
//   'Server/CurrentUserError': (state, action) => {
//     console.error(action.payload)
//     return null
//   },
// })

// export const films = createReducer(initialState.films, {
//   'State/Search': (state, action) => action.payload,
// })

export const registratedUsers = (
  state = initialState.registratedUsers,
  action: IAction,
) => {
  switch (action.type) {
    case 'Server/AddUserSuccess':
      return [...state, action.payload]
    case 'Server/AddUserError':
      return state
    default:
      return state
  }
}
export const emailInput = (
  state = initialState.emailInput,
  action: IAction,
) => {
  switch (action.type) {
    case 'State/WriteEmailToState':
      return action.payload.email
    case 'State/ResetInputs':
      return ''
    default:
      return state
  }
}
export const passwordInput = (
  state = initialState.passwordInput,
  action: IAction,
) => {
  switch (action.type) {
    case 'State/WritePasswordToState':
      return action.payload.password
    case 'State/ResetInputs':
      return ''
    default:
      return state
  }
}
export const nameInput = (state = initialState.nameInput, action: IAction) => {
  switch (action.type) {
    case 'State/WriteNameToState':
      return action.payload.name
    case 'State/ResetInputs':
      return ''
    default:
      return state
  }
}
export const isRegistrationUrl = (
  state = initialState.isRegistrationUrl,
  action: IAction,
) => {
  switch (action.type) {
    case 'State/SetIsRegistrationUrl':
      return true
    case 'State/ResetIsRegistrationUrl':
      return false
    default:
      return state
  }
}
export const name = (state = initialState.name, action: IAction) => {
  switch (action.type) {
    case 'Server/LoginSuccess':
      return action.payload.name
    case 'Server/LoginError':
      return ''
    case 'Server/LogOutSuccess':
      return ''
    case 'Server/CurrentUserSuccess':
      return action.payload.name
    default:
      return state
  }
}
export const token = (state = initialState.token, action: IAction) => {
  switch (action.type) {
    case 'Server/LoginSuccess':
      return action.payload.token
    case 'Server/LoginError':
      return null
    case 'Server/LogOutSuccess':
      return null
    case 'Server/LogOutError':
      return state
    case 'Server/CurrentUserSuccess':
      return action.payload.token

    case 'Server/CurrentUserError':
      return null
    default:
      return state
  }
}
export const films = (state = initialState.films, action: IAction) => {
  switch (action.type) {
    case 'State/Search':
      return action.payload
    default:
      return state
  }
}
