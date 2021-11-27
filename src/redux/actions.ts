// import { createAction } from '@reduxjs/toolkit'
import allFilms from '../data/imdb.json'
import { IUser } from '../interfaces/main.interface'
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
  SEARCH_ACTION,
  LOGOUT_SUCCESS,
  ILogOutSuccess,
  ISearch,
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

export const addUserSuccess = (user: IUser): IAddUserSuccess => ({
  type: ADD_USER_SUCCESS,
  payload: user,
})

export const addUserError = (error: string): IAddUserError => ({
  type: ADD_USER_ERROR,
  payload: error,
})
export const writeNameToState = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
): IWriteNameToState => ({
  type: WRITE_NAME_TO_STATE,
  payload: { name: e.target.value },
})
export const writeEmailToState = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
): IWriteEmailToState => ({
  type: WRITE_EMAIL_TO_STATE,
  payload: { email: e.target.value },
})
export const writePasswordToState = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
): IWritePasswordToState => ({
  type: WRITE_PASSWORD_TO_STATE,
  payload: { password: e.target.value },
})

export const resetInputs = (): IResetInputs => ({
  type: RESET_INPUTS,
})
export const setIsRegistrationUrl = (): ISimple => ({
  type: 'State/SetIsRegistrationUrl',
})
export const resetIsRegistrationUrl = (): ISimple => ({
  type: 'State/ResetIsRegistrationUrl',
})

export const loginSuccess = (user: IUser): ILoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload: user,
})
export const loginError = (error: string): ILoginError => ({
  type: LOGIN_ERROR,
  payload: error,
})
export const logOutSuccess = (): ILogOutSuccess => ({
  type: LOGOUT_SUCCESS,
})

export const logOutError = (error: string): ILogOutError => ({
  type: LOGOUT_ERROR,
  payload: error,
})
export const currentUserSuccess = (
  token: string,
  name: string,
): ICurrentUserSuccess => ({
  type: CURRENT_SUCCESS,
  payload: { token, name },
})

export const currentUserError = (error: string): ICurrentUserError => ({
  type: CURRENT_ERROR,
  payload: error,
})
export const searchAction = (query: string): ISearch => ({
  type: SEARCH_ACTION,
  payload: allFilms.filter(film => film.title.includes(query)),
})

// export const addUserSuccess = createAction('Server/AddUserSuccess')

// export const addUserError = createAction('Server/AddUserError')

// export const writeNameToState = createAction('State/WriteNameToState', e => ({
//   payload: { name: e.target.value },
// }))
// export const writeEmailToState = createAction('State/WriteEmailToState', e => ({
//   payload: { email: e.target.value },
// }))
// export const writePasswordToState = createAction(
//   'State/WritePasswordToState',
//   e => ({
//     payload: { password: e.target.value },
//   }),
// )
// export const resetInputs = createAction('State/ResetInputs')

// export const setIsRegistrationUrl = createAction('State/SetIsRegistrationUrl')

// export const resetIsRegistrationUrl = createAction(
//   'State/ResetIsRegistrationUrl',
// )
// export const loginSuccess = createAction('Server/LoginSuccess')

// export const loginError = createAction('Server/LoginError')

// export const logOutSuccess = createAction('Server/LogOutSuccess')

// export const logOutError = createAction('Server/LogOutError')
// export const currentUserSuccess = createAction(
//   'Server/CurrentUserSuccess',
//   (token, name) => {
//     return { payload: { token, name } }
//   },
// )
// export const currentUserError = createAction('Server/CurrentUserError')

// export const searchAction = createAction('State/Search', query => {
//   return { payload: allFilms.filter(film => film.title.includes(query)) }
// })
// export const tokenNull = createAction('State/TokenNull')
