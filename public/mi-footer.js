customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.innerText = "Copyright © 2019 Gutierrez Hernandez Angel Antonio.";
  }
}, { extends: "footer" });