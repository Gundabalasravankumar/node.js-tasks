const userService = require("../services/userService");

function getUsers(req, res) {
  const users = userService.getUsers();
  res.json(users);
}

function createUser(req, res) {
  const user = userService.createUser(req.body);

  res.status(201).json({
    message: "User created successfully",
    user
  });
}

module.exports = {
  getUsers,
  createUser
};
