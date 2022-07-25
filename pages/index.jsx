import Link from 'next/link'
import { useState, useEffect } from "react"

const index = ({users}) => {
    
    return (
        <div>
            <Link href="/statistics">
                <a>statistics link</a>
            </Link>

            <h1>index.jsx next only</h1>
            {users.map(todo=>
            <li key={todo.id}>
                <Link href={`/${todo.id}`}><a>{todo.name}</a></Link>
            </li>
            
            )}
        </div>
    )
}

export default index
export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
      props: {users}
    }
  }