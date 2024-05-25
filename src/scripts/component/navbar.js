class navbarnih extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <header class="app-bar">
      <div class="app-bar__menu">
        <button id="hamburgerButton">☰</button>
      </div>
      <div class="app-bar__brand">
        <a href="#/">Makan duls</a>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li><a href="#/">home</a></li>
          <li><a href="#/favorite">favorite</a></li>
          <li><a href="https://www.linkedin.com/in/muhammadferysyahputra/">about us</a></li>
        </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define('navbar-nih', navbarnih);
