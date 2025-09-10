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
  const [popup, setPopup] = useState(null);

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
        handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function onUpdateAvatar({ avatar }) {
    setCurrentUser({...currentUser, avatar});
    handleClosePopup();
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser,  onUpdateAvatar}}>
        <Header
          aroundLogo={logo}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}>
        </Header>
        <Main></Main>
        <Footer></Footer>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
