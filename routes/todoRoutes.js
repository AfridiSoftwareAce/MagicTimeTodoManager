const express = require('express');
const Router = express.Router();
const todoController = require('../controllers/todoController');

Router.get('/', todoController.getTodos);
Router.post('/', todoController.createTodo);
Router.put('/:id', todoController.updateTodo);
Router.delete('/:id', todoController.deleteTodo);

module.exports = Router;
