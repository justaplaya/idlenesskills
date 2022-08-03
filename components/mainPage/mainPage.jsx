import Link from 'next/link'
import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DownloadTodosAction from '../../store/DownloadTodosActionFile'
 import IncrementCounter from '../IncrementCounter'
function mainPage({todos}) {

const dispatch = useDispatch()
let reduxTodos=useSelector(state=>state.main.todos)
useEffect(() => {
    dispatch({type:'DownloadTodos',todos:todos})
}, [])

useEffect(() => {
    console.log(reduxTodos) 
}, [reduxTodos])

    async function ReduxUpdate(){
        const reduxResponse = await fetch(`http://localhost:5000/todos`)
        const reduxTodos = await reduxResponse.json()
        dispatch({type:'DownloadTodos',todos:reduxTodos})
    }
     async function createTodo(){
        const rawDate = new Date()
        const date = [rawDate.getDate(),rawDate.getMonth()+1,rawDate.getFullYear()]
        const time = [rawDate.getHours(),rawDate.getMinutes(),rawDate.getSeconds()]
         const dbResponse = await fetch(`http://localhost:5000/todos`, {
             method:'POST',
             headers:{
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({"title":"G59","body":"GREY FIVE NINE","date":date,"time":time})
            })
            ReduxUpdate()
     }
     async function getAllTodos(){
        const res = await fetch(`http://localhost:5000/todos`)
            const todos = await res.json()
            return(console.log(todos))
     }
     async function getOneTodo(id){
        const res = await fetch(`http://localhost:5000/todos/${id}`)
            const todo = await res.json()
            return(console.log(todo))
     }
     async function putTodo(id){
        const res = await fetch(`http://localhost:5000/todos/${id}`, {
             method:'PUT',
             headers:{
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({"title":"SESH TILL ARREST"})
            })
            ReduxUpdate()
     }
     async function patchTodo(id){
        const dbResponse = await fetch(`http://localhost:5000/todos/${id}`, {
             method:'PATCH',
             headers:{
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({"title":"SESH"})
            })
            ReduxUpdate()
     }
     async function deleteTodo(id){ 
        const res = await fetch(`http://localhost:5000/todos/${id}`, {
             method:'DELETE'})
             ReduxUpdate()
     }
    return (
        <div>
                    <Link href="/statistics"><a>statistics link</a></Link>
                    <IncrementCounter></IncrementCounter>
                    <h1>index.jsx next only</h1>
                    {reduxTodos.map(todo=>
                        <li key={todo.id}>
                        <Link href={`/todos/${todo.id}`}><a>{todo.title}</a></Link> 
                    </li>
                    
                    )}
                    <button onClick={createTodo}>create</button>
                    <button onClick={getAllTodos}>get all</button>
                    <button onClick={()=>getOneTodo(3)}>get one</button>
                    <button onClick={()=>putTodo(3)}>put</button>
                    <button onClick={()=>patchTodo(3)}>patch</button>
                    <button onClick={()=>deleteTodo(3)}>delete</button>
                </div>
    )
}

export default mainPage
//<button onClick={()=>{patchTodo(3);patchTodoNotAsync(3)}}>patch</button>
//<button onClick={()=>dispatch({type:'DownloadTodos',todos:localTodos})}>patch</button>