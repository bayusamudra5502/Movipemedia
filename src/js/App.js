import Component from './lib/Component';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';
import Loading from './components/Loading';

export default class App extends Component {
  render() {
    this.appendChild(new Header());
    this.appendChild(new Jumbotron());
    this.appendChild(new Search());
  }
}

Component.register('app-container', App);
