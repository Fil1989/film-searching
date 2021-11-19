// import { createReducer } from '@reduxjs/toolkit'

import { IState } from './reduxInterfaces/reduxMain.interface'
import {
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  WRITE_NAME_TO_STATE,
  WRITE_EMAIL_TO_STATE,
  WRITE_PASSWORD_TO_STATE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_ERROR,
  CURRENT_SUCCESS,
  CURRENT_ERROR,
  RESET_INPUTS,
  LOGOUT_SUCCESS,
  SEARCH_ACTION,
  ISearch,
  ILogOutSuccess,
  IResetInputs,
  ICurrentUserError,
  ICurrentUserSuccess,
  ILogOutError,
  ILoginError,
  ILoginSuccess,
  IWriteEmailToState,
  IWritePasswordToState,
  IWriteNameToState,
  IAddUserSuccess,
  IAddUserError,
  ISimple,
} from './reduxInterfaces/reduxAction.interface'

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

export const registratedUsers = (
  state = initialState.registratedUsers,
  action: IAddUserSuccess | IAddUserError,
) => {
  switch (action.type) {
    case ADD_USER_SUCCESS:
      return [...state, action.payload]
    case ADD_USER_ERROR:
      return state
    default:
      return state
  }
}

export const nameInput = (
  state = initialState.nameInput,
  action: IWriteNameToState | IResetInputs,
) => {
  switch (action.type) {
    case WRITE_NAME_TO_STATE:
      return action.payload.name
    case RESET_INPUTS:
      return ''
    default:
      return state
  }
}

export const emailInput = (
  state = initialState.emailInput,
  action: IWriteEmailToState | IResetInputs,
) => {
  switch (action.type) {
    case WRITE_EMAIL_TO_STATE:
      return action.payload.email
    case RESET_INPUTS:
      return ''
    default:
      return state
  }
}
export const passwordInput = (
  state = initialState.passwordInput,
  action: IWritePasswordToState | IResetInputs,
) => {
  switch (action.type) {
    case WRITE_PASSWORD_TO_STATE:
      return action.payload.password
    case RESET_INPUTS:
      return ''
    default:
      return state
  }
}

export const isRegistrationUrl = (
  state = initialState.isRegistrationUrl,
  action: ISimple,
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
export const name = (
  state = initialState.name,
  action: ILoginSuccess | ICurrentUserSuccess | ILoginError | ILogOutSuccess,
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload.name
    case LOGIN_ERROR:
      return ''
    case LOGOUT_SUCCESS:
      return ''
    case CURRENT_SUCCESS:
      return action.payload.name
    default:
      return state
  }
}
export const token = (
  state = initialState.token,
  action:
    | ILogOutSuccess
    | ICurrentUserError
    | ICurrentUserSuccess
    | ILogOutError
    | ILoginError
    | ILoginSuccess,
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload.token
    case LOGIN_ERROR:
      return null
    case LOGOUT_SUCCESS:
      return null
    case LOGOUT_ERROR:
      return state
    case CURRENT_SUCCESS:
      return action.payload.token
    case CURRENT_ERROR:
      return null
    default:
      return state
  }
}
export const films = (state = initialState.films, action: ISearch) => {
  switch (action.type) {
    case SEARCH_ACTION:
      return action.payload
    default:
      return state
  }
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
