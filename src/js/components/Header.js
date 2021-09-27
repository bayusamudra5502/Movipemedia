import Component from '../lib/Component';
import logo from '@assets/logo.png';

export default class Header extends Component {
  render() {
    this.innerHTML = `
      <header class="container">
        <a href="/">
          <img src="${logo}" alt="Logo" />
        </a>
        <a href="/">
          Movipemedia
        </a>
      </header>
    `;
  }
}

Component.register('header-app', Header);
