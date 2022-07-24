import { useRouter } from "next/router"


export default function(){
    const {query}  = useRouter()

    return(
        <h1>todo {query.id}</h1>
    )
}
