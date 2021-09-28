import Component from './lib/Component';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';
import SearchResult from './components/SearchResult';
import { getData } from './services';

export default class App extends Component {
  render() {
    const result = new SearchResult();
    const search = new Search();

    search.onsearch = async ({ keyword }) => {
      result.isLoading = true;
      result.data = await getData(keyword);
      result.isLoading = false;
    };

    this.appendChild(new Header());
    this.appendChild(new Jumbotron());
    this.appendChild(search);
    this.appendChild(result);
  }
}

Component.register('app-container', App);
