import { useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";
import api from "../../utils/API.js";
import Card from "../Card/Card.jsx";

export default function Main() {
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

  return (
    <main>
      <ul id="articles" className="articles">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardLike={handleCardLike} />
        ))}
      </ul>
    </main>
  )
}
