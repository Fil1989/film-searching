import { IResults, IUser } from '../../interfaces/main.interface'

export interface IState {
  nameInput: string
  emailInput: string
  passwordInput: string
  isRegistrationUrl: boolean
  registratedUsers: IUser[]
  token: string | null
  name: string
  films: IResults[]
}

// export interface IAction {
//   type: string
//   payload?: any
// }
