export default class Component extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  adoptedCallback() {
    this.render();
  }

  render() {}

  static register(tagname, constructor) {
    customElements.define(tagname, constructor);
  }
}
