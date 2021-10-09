import { createAction } from '@reduxjs/toolkit'

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
