import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@exp.com',
    password: bcrypt.hashSync('admin12', 10),
    isAdmin: true,
  },
  {
    name: 'Elon Musk',
    email: 'elon@exp.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Joe win',
    email: 'joe@exp.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
