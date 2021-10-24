import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = props => {
  const isAutenticated = useSelector(state => state.token)

  return isAutenticated ? <Redirect to="/browse" /> : <Route {...props} />
}

export default PrivateRoute
