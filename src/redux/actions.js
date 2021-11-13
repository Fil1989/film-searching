// import { createAction } from '@reduxjs/toolkit'
import allFilms from '../data/imdb.json'

// export const addUserSuccess = createAction('Server/AddUserSuccess')
export const addUserSuccess = user => ({
  type: 'Server/AddUserSuccess',
  payload: user,
})

// export const addUserError = createAction('Server/AddUserError')
export const addUserError = error => ({
  type: 'Server/AddUserError',
  payload: error,
})
export const writeNameToState = e => ({
  type: 'State/WriteNameToState',
  payload: { name: e.target.value },
})
export const writeEmailToState = e => ({
  type: 'State/WriteEmailToState',
  payload: { email: e.target.value },
})
export const writePasswordToState = e => ({
  type: 'State/WritePasswordToState',
  payload: { password: e.target.value },
})

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
export const resetInputs = () => ({ type: 'State/ResetInputs' })
// export const resetInputs = createAction('State/ResetInputs')
export const setIsRegistrationUrl = () => ({
  type: 'State/SetIsRegistrationUrl',
})
// export const setIsRegistrationUrl = createAction('State/SetIsRegistrationUrl')
export const resetIsRegistrationUrl = () => ({
  type: 'State/ResetIsRegistrationUrl',
})
// export const resetIsRegistrationUrl = createAction(
//   'State/ResetIsRegistrationUrl',
// )
export const loginSuccess = user => ({
  type: 'Server/LoginSuccess',
  payload: user,
})
// export const loginSuccess = createAction('Server/LoginSuccess')
export const loginError = error => ({
  type: 'Server/LoginError',
  payload: error,
})
// export const loginError = createAction('Server/LoginError')
export const logOutSuccess = () => ({
  type: 'Server/LogOutSuccess',
})
// export const logOutSuccess = createAction('Server/LogOutSuccess')

export const logOutError = error => ({
  type: 'Server/LogOutError',
  payload: error,
}) // export const logOutError = createAction('Server/LogOutError')
export const currentUserSuccess = (token, name) => ({
  type: 'Server/CurrentUserSuccess',
  payload: { token, name },
})
// export const currentUserSuccess = createAction(
//   'Server/CurrentUserSuccess',
//   (token, name) => {
//     return { payload: { token, name } }
//   },
// )
export const currentUserError = error => ({
  type: 'Server/CurrentUserError',
  payload: error,
})
// export const currentUserError = createAction('Server/CurrentUserError')
export const searchAction = query => ({
  type: 'State/Search',
  payload: allFilms.filter(film => film.title.includes(query)),
})
// export const searchAction = createAction('State/Search', query => {
//   return { payload: allFilms.filter(film => film.title.includes(query)) }
// })
// export const tokenNull = createAction('State/TokenNull')
