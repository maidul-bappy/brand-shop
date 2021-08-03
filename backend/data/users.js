import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'Maidul Bappy',
    email: 'mb@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Maidul',
    email: 'maidul@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
