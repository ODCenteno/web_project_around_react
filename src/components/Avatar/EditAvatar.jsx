export default function EditAvatarPopup() {
  return (
    <form id="form-avatar" className="popup__form" name="avatar" action="/" method="post" novalidate>
      <fieldset className="popup__fields">
        <input type="text" className="popup__input" id="form-avatar-src" name="link" pattern="https://.*"
          placeholder="Enlace a la imagen: http://..." required></input>
        <span id="form-avatar-src-error" className="popup__span-error"></span>
      </fieldset>
      <button type="submit" className="button popup__button-submit" id="popup-button-avatar-submit"
        disabled>Guardar</button>
    </form>
  )
}
