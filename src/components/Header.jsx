
export default function Header(props) {
    return (
        <header class="header page__header">
        <div class="header__logo-container">
          <img src={props.aroundLogo} alt="Around logo" class="header__logo"></img>
        </div>
        <hr class="header__divisor"></hr>
        <nav class="nav header__nav">
          <div class="nav__avatar-container nav__avatar-position">
            <img src="./images/odcenteno.webp" alt="Omar Daniel Photo" class="nav__avatar"></img>
          </div>
          <div class="nav__container">
            <div class="nav__name-edit">
              <h1 class="nav__name">
              </h1>
              <button class="button nav__button-edit" id="edit-profile-btn"
                title="Da Clic para modificar la información del perfil"></button>
            </div>
            <p class="nav__job-title">Viajero Intergaláctico</p>
          </div>
          <button type="button" class="button nav__button-add" title="Da clic para agregar un nuevo lugar"></button>
        </nav>
      </header>
    )
}