const express = require('express')
const todoRouter = require('./routes/todos.routes')
const PORT = process.env.PORT || 8080
const app = express()
/*app.get('/',(req,res)=>{
    res.send('hello postgresql')
})*/
app.use(express.json())
app.use('/api', todoRouter)
app.listen(PORT,()=>console.log(`server started on port ${PORT}`))