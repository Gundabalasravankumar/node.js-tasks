const users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com"
  },
  {
    id: 2,
    name: "David",
    email: "david@example.com"
  }
];

function getUsers() {
  return users;
}

function createUser(userData) {
  return userData;
}

module.exports = {
  getUsers,
  createUser
};
