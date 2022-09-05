import Link from "next/link"
import StatisticsPage from '../components/statisticspage/statisticsPage'
import MainContainer from '../components/mainContainer/mainContainer'

const mainPage = ({toggleTheme}) => {
    return (
        <MainContainer toggleTheme={toggleTheme}>

       <StatisticsPage></StatisticsPage>
       </MainContainer>

    )
}

export default mainPage
