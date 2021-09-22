export default class Component extends HTMLElement {
  connectedCallback() {}
  attributeChangedCallback(attrname, oldvalue, newvalue) {}
  disconnectedCallback() {}
  adoptedCallback() {}
  render() {}
  static register(tagname, constructor) {
    customElements.define(tagname, constructor);
  }
}
