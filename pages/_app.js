import { wrapper } from '../store/store'
import { ThemeProvider } from '@mui/material/styles';
import firstTheme from '../themes/firstTheme'
import secondTheme from '../themes/secondTheme'
import { useState,useEffect } from 'react';
import GlobalStyles from '../themes/GlobalStyles'

function getActiveTheme(themeMode){
  return themeMode === 'light' ? firstTheme : secondTheme
}

const App = ({Component, pageProps}) => {

const [activeTheme,setActiveTheme] = useState(firstTheme)
const [selectedTheme, setSelectedTheme] = useState('light')

const toggleTheme = () => {
  const desiredTheme = selectedTheme === 'dark' ? 'light' : 'dark'
  setSelectedTheme(desiredTheme)
}

useEffect(() => {
  setActiveTheme(getActiveTheme(selectedTheme))
}, [selectedTheme])

  return (
  <ThemeProvider  theme={activeTheme}>
    <GlobalStyles/>
    <Component {...pageProps} toggleTheme={toggleTheme}/>
  </ThemeProvider>
  )
}

export default wrapper.withRedux(App)
