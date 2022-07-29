import Link from 'next/link'
import { useState, useEffect } from "react"
import { Sequelize } from 'sequelize'
const index = ({users}) => {
   
    
    return (
        <div>
            <Link href="/statistics">
                <a>statistics link</a>
            </Link>

            <h1>index.jsx next only</h1>
            {users.map(user=>
                <li key={user.id}>
                <Link href={`/todos/${user.id}`}><a>{user.name}</a></Link>
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
    /*const sequelize = new Sequelize('todos_test', 'postgres', '59', {
        dialect: 'postgres',
        host: localhost,
        port: 5432
    })
     
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }*/
  }