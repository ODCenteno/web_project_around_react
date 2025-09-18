import Card from "./components/Card/Card.jsx";

export default function Main({cards, onCardLike, onCardDelete}) {

  return (
    <main>
      <ul id="articles" className="articles">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}/>
        ))}
      </ul>
    </main>
  )
}
