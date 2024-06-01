const express = require("express");
const {
  createUser,
  getAllUser,
  updateUsers,
  deleteUsers,
} = require("../controller/userController");

const route = express.Router();

route
.post("/", createUser)
.get("/", getAllUser)
.patch("/:id", updateUsers)
.delete("/:id", deleteUsers);

module.exports =  {route};

