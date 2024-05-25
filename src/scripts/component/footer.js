class footernih extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <style>
    footer {
      background-color: black;
      color: white;
      font-size: 1rem;
      width: 100%;
      max-width: 100%;
      text-align: center;
      position: fixed;
      bottom: 0;
    }
    </style>
    <footer>
        <p>Copyright © 2024 - Makan Duls</p>
    </footer>
    `;
  }
}

customElements.define('footer-nih', footernih);
