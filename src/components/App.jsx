import { useEffect, useState } from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext.jsx'
import logo from '../../public/logo.svg'
import '../index.css'
import Footer from './Footer/Footer.jsx'
import Main from './main/Main.jsx'
import Header from './header/Header.jsx'
import api from '../utils/API.js'

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      await api.getUserInfo().then((userRes) => {
        console.log('Curren USER: ', userRes);
        setCurrentUser(userRes);
      });
    }
    fetchUser();
  }, [])

  const handleUpdateUser = (data) => {
    (async () => {
      await api.saveUserDetails(data).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
        <Header aroundLogo={logo}></Header>
        <Main></Main>
        <Footer></Footer>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
