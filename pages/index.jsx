import MainPage from '../components/mainPage/mainPage'
import MainContainer from '../components/mainContainer/mainContainer'

const Index = (props) => {
  return (
    <div>
      <MainContainer  toggleTheme={props.toggleTheme}>
      <MainPage todos={props.todos}></MainPage>
      </MainContainer>
    </div>
      
  
  )
}

export default Index

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/todos?_limit=1000000`)
  const todos = await res.json()
  
  return {
    props: {todos}
  }
}
