
import { useDispatch, useSelector } from 'react-redux'

export async function getServerSideProps({params}) {
    const res = await fetch(`http://localhost:5000/todos/${params.id}`)
    const todo = await res.json()
    
    return {
      props: {todo}
    }
  }

export default function({todo}){
    
    return(
        <div>
            <h1>todo number {todo.id}</h1>
            <h2>title is {todo.title}</h2>
            <h3>text is {todo.body}</h3>
        </div>
        
    )
}
