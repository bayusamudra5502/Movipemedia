import Component from './lib/Component';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';

export default class App extends Component {
  render() {
    this.appendChild(new Header());
    this.appendChild(new Jumbotron());
  }
}

Component.register('app-container', App);
