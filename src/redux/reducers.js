import { createReducer } from '@reduxjs/toolkit'
const initialState = {
  name: '',
  email: '',
  password: '',
  registratedUsers: [],
  isRegistrationUrl: false,
}
export const registratedUsers = createReducer(initialState.registratedUsers, {
  'Server/AddUserSuccess': (state, action) => [...state, action.payload],
  'Server/AddUserError': (state, action) => {
    console.log(action.payload)
    return state
  },
})
export const name = createReducer(initialState.name, {
  'State/WriteNameToState': (_, action) => action.payload.name,
  'State/ResetInputs': (_, action) => '',
})
export const email = createReducer(initialState.email, {
  'State/WriteEmailToState': (_, action) => action.payload.email,
  'State/ResetInputs': (_, action) => '',
})
export const password = createReducer(initialState.password, {
  'State/WritePasswordToState': (_, action) => action.payload.password,
  'State/ResetInputs': (_, action) => '',
})
export const isRegistrationUrl = createReducer(initialState.isRegistrationUrl, {
  'State/SetIsRegistrationUrl': (_, action) => true,
  'State/ResetIsRegistrationUrl': (_, action) => false,
})
