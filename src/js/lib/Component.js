export default class Component extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(attrname, oldvalue, newvalue) {
    this.render();
  }

  disconnectedCallback() {}

  adoptedCallback() {
    this.render();
  }
  render() {}

  static register(tagname, constructor) {
    customElements.define(tagname, constructor);
  }
}
