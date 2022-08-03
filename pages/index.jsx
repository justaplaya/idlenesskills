import Page from '../components/Page'
import { incrementCounter } from '../store/action'
import {DownloadTodosAction} from '../store/action'
import { wrapper } from '../store/store'
import MainPage from '../components/mainPage/mainPage'

const Index = (props) => {
  //console.log(props.todos)
  return <MainPage todos={props.todos}></MainPage>
}

/*export  const getStaticProps =  wrapper.getStaticProps(  (store)=>async ()=> {
  store.dispatch(DownloadTodosAction())
})*/

export default Index
/*export const getStaticProps = wrapper.getStaticProps( (store) => () => {

  
})*/

export async function getStaticProps() {
  const res = await fetch(`http://localhost:5000/todos`)
  const todos = await res.json()
  return {
    props: {todos}
  }
}



// return <Page title="Index Page" linkTo="/other" />