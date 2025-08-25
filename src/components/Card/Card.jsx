import { useState } from "react";

import Popup from "../Popup/Popup";
import ImagePopup from "../ImagePopup/ImagePopup";
import heart from '../../../public/images/heart.svg'
import likeHeart from '../../../public/images/heart-liked.svg'

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const [popup, setPopup] = useState(null);
  const [like, setLike] = useState(isLiked);

  const imagePopup = {
      children: <ImagePopup card={props.card}/>,
      popupId: "popup__img-zoom",
    };

  function handleOpenImagePopup(popup) {
    setPopup(popup);
  }

  function handleCloseImagePopup() {
    setPopup(null)
  }

  return (
    <li className="card articles__card">
      <img className="card__delete-icon" src='../../../../public/images/delete.svg'
        alt="delete icon" id="delete"></img>
      <picture className="card__picture">
        <img className="card__image" src={link}
          alt={`image of ${name}`} data-orientation="horizontal" onClick={(e) =>
         handleOpenImagePopup({...imagePopup, link: e.target.src})}></img>
      </picture>
      <div className="card__place-info">
        <h3 className="card__place-title">{name}</h3>
        <div className="card__icon-container">
          <img className="card__like-icon" src={like ? likeHeart : heart} alt="like icon" onClick={() =>setLike(!like)}></img>
        </div>
      </div>
      {popup && (
        <Popup
            popupId={popup.popupId}
            onClose={handleCloseImagePopup}
            title={popup.title}
            link={popup.link}>
          {popup.children}
        </Popup>
      )}
    </li>
  )
}
