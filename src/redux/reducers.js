import { createReducer } from '@reduxjs/toolkit'
// import { addUserSuccess, addUserError } from './actions'
const initialState = {
  //   isAutentificated: false,
  //   token: null,
  lastRegistratedUser: null,
}
export const firstReducer = createReducer(initialState.lastRegistratedUser, {
  'Server/AddUserSuccess': (state, action) => action.payload,
  'Server/AddUserError': (state, action) => action.payload,
})
