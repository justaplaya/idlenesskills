import Link from "next/link"
import { useState } from "react"

const mainPage = () => {
    const [todos,setTodos] = useState([{'name':'first','id':1},{'name':'second','id':2}])
    return (
        <div>
            <h1>statistics</h1>
            {todos.map(todo=>
            <li key={todo.id}>
                <Link href={`/todos/${todo.id}`}><a>{todo.name}</a></Link>
            </li>
            
            )}
        </div>
    )
}

export default mainPage
