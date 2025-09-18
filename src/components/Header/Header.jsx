import { useContext } from "react"
import CurrentUserContext from "../../contexts/CurrentUserContext.js"
import Popup from '../Popup/Popup'
import NewCard from "../Popup/NewCard/NewCard.jsx";
import EditAvatarPopup from "../Popup/EditAvatar/EditAvatar.jsx";
import EditProfilePopup from "../Popup/EditProfile/EditProfile.jsx";

export default function Header(props) {
  const { aroundLogo, onOpenPopup, onClosePopup, popup } = props;

  const userContext = useContext(CurrentUserContext);
  const { currentUser } = userContext;

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

  return (
    <header className="header page__header">
      <div className="header__logo-container">
        <img src={aroundLogo} alt="Around logo" className="header__logo"></img>
      </div>
      <hr className="header__divisor"></hr>
      <nav className="nav header__nav">
        <div className="nav__avatar-container nav__avatar-position" onClick={() => onOpenPopup(editAvatarPopup)}>
          <img src={currentUser.avatar} alt="Omar Daniel Photo" className="nav__avatar"></img>
        </div>
        <div className="nav__container">
          <div className="nav__name-edit">
            <h1 className="nav__name">{currentUser.name}
            </h1>
            <button className="button nav__button-edit" id="edit-profile-btn"
              title="Da Clic para modificar la información del perfil" onClick={() => onOpenPopup(editProfilePopup)}></button>
          </div>
          <p className="nav__job-title">{currentUser.about}</p>
        </div>
        <button type="button" className="button nav__button-add" title="Da clic para agregar un nuevo lugar" aria-label="Add card" onClick={() => onOpenPopup(newCardPopup)}></button>
      </nav>
      {popup && (
        <Popup
            popupId={popup.popupId}
            onClose={onClosePopup}
            title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </header>
  )
}
