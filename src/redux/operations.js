import axios from 'axios'
import { logOutSuccess, logOutError } from './actions.js'
import {
  addUserSuccess,
  addUserError,
  loginSuccess,
  loginError,
  currentUserSuccess,
  currentUserError,
} from './actions.js'
axios.defaults.baseURL = 'https://films-searcher.herokuapp.com/api/users'
const authorizationController = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}
export const postUserOperation = user => async dispatch => {
  try {
    const { data } = await axios.post('/register', user)
    dispatch(addUserSuccess(data.user))
  } catch (error) {
    dispatch(addUserError(error.message))
  }
}
export const loginUser = user => async dispatch => {
  try {
    const { data } = await axios.post('/login', user)
    dispatch(loginSuccess(data))
  } catch (error) {
    dispatch(loginError(error.message))
  }
}
export const logOut = () => async (dispatch, getState) => {
  try {
    const state = await getState()
    authorizationController.set(state.token)
    await axios.post('/logout')
    authorizationController.unset()
    dispatch(logOutSuccess())
  } catch (error) {
    dispatch(logOutError(error.message))
  }
}
export const currentUser = () => async (dispatch, getState) => {
  try {
    const { token } = await getState()
    authorizationController.set(token)
    const { token: currentToken, name } = await axios.get('/current')
    authorizationController.unset()
    dispatch(currentUserSuccess(currentToken, name))
  } catch (error) {
    dispatch(currentUserError(error.message))
  }
}
