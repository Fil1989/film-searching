import { createAction } from '@reduxjs/toolkit'
import allFilms from '../data/imdb.json'

export const addUserSuccess = createAction('Server/AddUserSuccess')
export const addUserError = createAction('Server/AddUserError')
export const writeNameToState = createAction('State/WriteNameToState', e => ({
  payload: { name: e.target.value },
}))
export const writeEmailToState = createAction('State/WriteEmailToState', e => ({
  payload: { email: e.target.value },
}))
export const writePasswordToState = createAction(
  'State/WritePasswordToState',
  e => ({
    payload: { password: e.target.value },
  }),
)
export const resetInputs = createAction('State/ResetInputs')
export const setIsRegistrationUrl = createAction('State/SetIsRegistrationUrl')
export const resetIsRegistrationUrl = createAction(
  'State/ResetIsRegistrationUrl',
)
export const loginSuccess = createAction('Server/LoginSuccess')
export const loginError = createAction('Server/LoginError')
export const logOutSuccess = createAction('Server/LogOutSuccess')
export const logOutError = createAction('Server/LogOutError')
export const tokenNull = createAction('State/TokenNull')
export const currentUserSuccess = createAction(
  'Server/CurrentUserSuccess',
  (token, name) => {
    return { payload: { token, name } }
  },
)
export const currentUserError = createAction('Server/CurrentUserError')
export const searchAction = createAction('State/Search', query => {
  return { payload: allFilms.filter(film => film.title.includes(query)) }
})
