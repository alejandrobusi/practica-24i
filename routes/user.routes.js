const { Router } = require('express');
const route = Router();
const { getAllUsers, getUserById, createUser, editUser, deleteUser } = require('../controllers/user.controllers');

route.get('/get-all-users', getAllUsers);

route.get('/get-by-id/:id', getUserById);

route.post('/create-user', createUser);

route.patch('/edit-user/:id', editUser);

route.delete('/delete-user/:id', deleteUser);

module.exports = route;
