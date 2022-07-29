const db = require('../db')
class TodoController{
    async createTodo(req,res){
        const {id, title,text,date,time} = req.body
        const newTodo = await db.query('INSERT INTO todos_test (id,title,text,date,time) values ($1,$2,$3,$4,$5) RETURNING *',
        [id, title,text,date,time])
        console.log(title,text,date,time)
        res.json(newTodo.rows[0])
    }
    async getTodos(req,res){

    }
    async getOneTodo(req,res){

    }
    async updateTodo(req,res){

    }
    async deleteTodo(req,res){

    }
}

module.exports = new TodoController()