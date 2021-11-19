import axios from 'axios'
import {
  addUserSuccess,
  addUserError,
  loginSuccess,
  loginError,
  logOutSuccess,
  logOutError,
  currentUserSuccess,
  currentUserError,
} from './actions'
import { Dispatch } from '@reduxjs/toolkit'
import {
  IAddUserSuccess,
  IAddUserError,
  ILoginSuccess,
  ILoginError,
  ILogOutSuccess,
  ILogOutError,
  ICurrentUserSuccess,
  ICurrentUserError,
} from './reduxInterfaces/reduxAction.interface'
import { INewUser, ILoginUser } from '../interfaces/main.interface'
import { IState } from './reduxInterfaces/reduxMain.interface'
axios.defaults.baseURL = 'https://films-searcher.herokuapp.com/api/users'
const authorizationController = {
  set(token: string | null) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}
type GetStateType = () => IState
export const postUserOperation = (user: INewUser) => async (
  dispatch: Dispatch<IAddUserSuccess | IAddUserError>,
) => {
  try {
    const { data } = await axios.post('/register', user)
    dispatch(addUserSuccess(data.user))
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch(addUserError(error.message))
    }
  }
}
export const loginUser = (user: ILoginUser) => async (
  dispatch: Dispatch<ILoginSuccess | ILoginError>,
) => {
  try {
    const { data } = await axios.post('/login', user)
    dispatch(loginSuccess(data))
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch(loginError(error.message))
    }
  }
}
export const logOut = () => async (
  dispatch: Dispatch<ILogOutSuccess | ILogOutError>,
  getState: GetStateType,
) => {
  try {
    const state = await getState()
    authorizationController.set(state.token)
    await axios.post('/logout')
    authorizationController.unset()
    dispatch(logOutSuccess())
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch(logOutError(error.message))
    }
  }
}
export const currentUser = () => async (
  dispatch: Dispatch<ICurrentUserSuccess | ICurrentUserError>,
  getState: GetStateType,
) => {
  try {
    const { token } = await getState()
    authorizationController.set(token)
    const {
      data: {
        user: { token: currentToken, name },
      },
    } = await axios.get('/current')
    authorizationController.unset()
    dispatch(currentUserSuccess(currentToken, name))
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch(currentUserError(error.message))
    }
  }
}
