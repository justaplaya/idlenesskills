import { useRouter } from "next/router"


export default function({user}){
    
    const {query}  = useRouter()

    return(
        <div>
            <h1>todo {query.id}</h1>
            <h2>name is {user.name}</h2>
        </div>
        
    )
}
export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
      props: {user}
    }
  }