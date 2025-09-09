import CurrentUserContext from '../contexts/CurrentUserContext.jsx'
import logo from '../../public/logo.svg'
import '../index.css'
import Footer from './Footer/Footer.jsx'
import Main from './main/Main.jsx'
import Header from './header/Header.jsx'
import api from '../utils/API.js'
import { useEffect, useState } from 'react'

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const userRes = await api.getUserInfo();
      setCurrentUser(userRes);
    }
    fetchUser();
  }, [])

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser || null}>
        <Header aroundLogo={logo}></Header>
        <Main></Main>
        <Footer></Footer>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
