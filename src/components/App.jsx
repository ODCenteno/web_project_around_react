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
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchCards = async () => {
      const cardsRes = await api.getCards();
      console.log(cardsRes);
      setCards(cardsRes);
    }
    fetchCards();
  }, [])

  const handleCardLike = async (card) => {
    const isLiked = card.isLiked;

    await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
  }

  const handleCardDelete = (cardToDelete) => {
    console.log("DELETEANDO", cardToDelete._id)
    const updatedCards = cards.filter((card) => card._id !== cardToDelete._id)
    setCards(updatedCards)
  }

  useEffect(() => {
    const fetchUser = async () => {
      await api.getUserInfo().then((userRes) => {
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

  // useEffect(() => {
  //   const deleteCard = async (cardKey) => {
  //     const cardsRes = await api.deleteCard(cardKey);
  //     console.log('Deleted card', cardsRes);
  //     setCards(cardsRes);
  //   }
  //   deleteCard();
  // }, [handleCardDelete])

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser,  onUpdateAvatar}}>
        <Header
          aroundLogo={logo}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}>
        </Header>
        <Main
          cards={cards}
          onCardLike={handleCardLike} onCardDelete={handleCardDelete}>
        </Main>
        <Footer></Footer>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
