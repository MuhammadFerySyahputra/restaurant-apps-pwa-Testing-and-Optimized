class footernih extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <style>
    footer {
      background-color: black;
      color: white;
      font-size: 1rem;
      padding: 1rem;
      margin-top: 1rem;
      max-width: 100%;
      text-align: center;
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
