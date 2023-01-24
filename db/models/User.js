class User {
  constructor (id, userName, password) {
    this.id = id
    this.userName = userName
    this.password = password
  }
}

// Creamos una lista de usuarios para comprobar datos
const listUsers = [
  new User('1', 'Brayan Villamizar', '12345'),
  new User('2', 'Crsitian Arenas', '3456'),
  new User('3', 'Jorge Manrrique', '3231')
]

module.exports = { User, listUsers } // Exportamos la lista de usuarios y el usuario reutilizarlos
