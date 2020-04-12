// Wrong ✖
class User {
  // handle user information
  setUser(userData: any): void {...}
  getUser(user: any): any {...}

  // database connection
  addUser(userData: any): any {...}
  updateUser(id: number): any {...}
  deleteUser(id: number): void {...}
}

// ----------------------------------------------------------------------------------- //

// Right ✔
class User {
  // handle user information
  setUser(userData: any): void {...}
  getUser(user: any): any {...}
}

class DbUser {
  // database connection
  addUser(id: number): any {...}
  updateUser(id: number): any {...}
  deleteUser(id: number): void {...}
}