export const usersAPI = {
  users: [],
  set setusers(newUser) {
    this.users = [...this.users, newUser]
  },
}
