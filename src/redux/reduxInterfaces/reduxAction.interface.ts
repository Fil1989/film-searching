import { IUser, IResults } from '../../interfaces/main.interface'

export const ADD_USER_SUCCESS = 'Server/AddUserSuccess'
export const ADD_USER_ERROR = 'Server/AddUserError'
export const WRITE_NAME_TO_STATE = 'State/WriteNameToState'
export const WRITE_EMAIL_TO_STATE = 'State/WriteEmailToState'
export const WRITE_PASSWORD_TO_STATE = 'State/WritePasswordToState'
export const LOGIN_SUCCESS = 'Server/LoginSuccess'
export const LOGIN_ERROR = 'Server/LoginError'
export const LOGOUT_ERROR = 'Server/LogOutError'
export const CURRENT_SUCCESS = 'Server/CurrentUserSuccess'
export const CURRENT_ERROR = 'Server/CurrentUserError'
export const SEARCH_ACTION = 'State/Search'
export const RESET_INPUTS = 'State/ResetInputs'
export const LOGOUT_SUCCESS = 'Server/LogOutSuccess'

export interface IResetInputs {
  type: typeof RESET_INPUTS
}
export interface ISimple {
  type: string
}
export interface ILogOutSuccess {
  type: typeof LOGOUT_SUCCESS
}
export interface IAddUserSuccess {
  type: typeof ADD_USER_SUCCESS
  payload: IUser
}
export interface ISearch {
  type: typeof SEARCH_ACTION
  payload: IResults[]
}
export interface ICurrentUserError {
  type: typeof CURRENT_ERROR
  payload: string
}
export interface ICurrentUserSuccess {
  type: typeof CURRENT_SUCCESS
  payload: { token: string; name: string }
}
export interface ILoginError {
  type: typeof LOGIN_ERROR
  payload: string
}
export interface ILogOutError {
  type: typeof LOGOUT_ERROR
  payload: string
}
export interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS
  payload: IUser
}
export interface IAddUserError {
  type: typeof ADD_USER_ERROR
  payload: string
}
export interface IWriteNameToState {
  type: typeof WRITE_NAME_TO_STATE
  payload: { name: string }
}
export interface IWriteEmailToState {
  type: typeof WRITE_EMAIL_TO_STATE
  payload: { email: string }
}
export interface IWritePasswordToState {
  type: typeof WRITE_PASSWORD_TO_STATE
  payload: { password: string }
}
