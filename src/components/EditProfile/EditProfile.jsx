export default function EditProfilePopup() {
  return (
    <form id="form-profile" className="popup__form" name="edit-form" action="/" method="post" novalidate>
      <fieldset className="popup__fields">
        <input type="text" className="popup__input" id="popup-input-name" name="name" placeholder="Nombre" minlength="2"
          maxlength="40" required></input>
        <span id="popup-input-name-error" className="popup__span-error"></span>
        <input type="text" className="popup__input" id="popup-input-description" name="description" minlength="2"
          maxlength="200" placeholder="Acerca de mí" required></input>
        <span id="popup-input-description-error" className="popup__span-error"></span>
      </fieldset>
      <button type="submit" className="button popup__button-submit" id="popup-button-profile-submit"
        disabled>Guardar</button>
    </form>
  )
}
