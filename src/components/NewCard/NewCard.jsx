export default function NewCard() {
  return (
    <form id="form-place" className="popup__form" name="edit-form" action="/" method="post" noValidate>
      <fieldset className="popup__fields">
        <input type="text" className="popup__input" id="popup-input-title" name="title" placeholder="Título"
          minLength="2" maxLength="30" required></input>
        <span id="popup-input-title-error" className="popup__span-error"></span>
        <input type="text" className="popup__input" id="form-img-src" name="link" pattern="https://.*"
          placeholder="Enlace a la imagen: http://..." required></input>
        <span id="form-img-src-error" className="popup__span-error"></span>
      </fieldset>
      <button type="submit" className="button popup__button-submit" id="popup-button-place-submit"
        disabled>Guardar</button>
    </form>
  )
}
