import axios from 'axios'
import { addUserSuccess, addUserError } from './actions.js'
axios.defaults.baseURL = 'https://films-searcher.herokuapp.com/api/users'
export const postUserOperation = user => async dispatch => {
  try {
    const newUser = await axios.post('/register', user)
    dispatch(addUserSuccess(newUser.data.user))
  } catch (error) {
    dispatch(addUserError(error.message))
  }
}
