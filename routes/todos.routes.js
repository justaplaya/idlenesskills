const Router = require('express')
const router = new Router()
//const {createTodo,getTodos,getOneTodo,updateTodo,deleteTodo} = require('../controllers/todos.controllers')
const todoController = require('../controllers/todos.controllers')

router.post('/todo', todoController.createTodo)
router.get('/todo', todoController.getTodos)
router.get('/todo:id', todoController.getOneTodo)
router.put('/todo', todoController.updateTodo)
router.delete('/todoid', todoController.deleteTodo)

module.exports = router