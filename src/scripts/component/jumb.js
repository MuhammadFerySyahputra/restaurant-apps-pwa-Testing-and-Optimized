class jumb extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <div class="hero-container" id="hero">
      <div class="hero-content-container ">
        <h1 class="hero-text">Makan Duls</h1>
        <p class="hero-text">Discover top-notch eateries exclusively on premier platforms.</p>
      </div>
    </div>
    `;
  }
}

customElements.define('jumb-nih', jumb);
