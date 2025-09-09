import { useState, useContext } from "react"
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx"
import Popup from '../Popup/Popup'
import NewCard from "../NewCard/NewCard";
import EditAvatarPopup from "../Avatar/EditAvatar";
import EditProfilePopup from "../EditProfile/EditProfile";

export default function Header(props) {
  const [popup, setPopup] = useState(null);

  const currentUser = useContext(CurrentUserContext);


  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
    popupId: "edit-profile-popup",
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfilePopup />,
    popupId: "edit-profile-popup",
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatarPopup />,
    popupId: "avatar-popup",
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <header className="header page__header">
      <div className="header__logo-container">
        <img src={props.aroundLogo} alt="Around logo" className="header__logo"></img>
      </div>
      <hr className="header__divisor"></hr>
      <nav className="nav header__nav">
        <div className="nav__avatar-container nav__avatar-position" onClick={() => handleOpenPopup(editAvatarPopup)}>
          <img src={currentUser.avatar} alt="Omar Daniel Photo" className="nav__avatar"></img>
        </div>
        <div className="nav__container">
          <div className="nav__name-edit">
            <h1 className="nav__name">{currentUser.name}
            </h1>
            <button className="button nav__button-edit" id="edit-profile-btn"
              title="Da Clic para modificar la información del perfil" onClick={() => handleOpenPopup(editProfilePopup)}></button>
          </div>
          <p className="nav__job-title">{currentUser.about}</p>
        </div>
        <button type="button" className="button nav__button-add" title="Da clic para agregar un nuevo lugar" aria-label="Add card" onClick={() => handleOpenPopup(newCardPopup)}></button>
      </nav>
      {popup && (
        <Popup
            popupId={popup.popupId}
            onClose={handleClosePopup}
            title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </header>
  )
}
