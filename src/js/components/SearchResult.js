import Component from '../lib/Component';
import Loading from './Loading';
import MovieCard from './MovieCard';
import NoData from './NoData';

export default class SearchResult extends Component {
  connectedCallback() {
    this.__data = [];
    this.__isLoading = false;
    super.connectedCallback();
  }

  get data() {
    return this.__data;
  }

  set data(data) {
    this.__data = data;
    this.render();
  }

  get isLoading() {
    return this.__isLoading;
  }

  set isLoading(loadingState) {
    this.__isLoading = loadingState;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container search-result"></div>
    `;

    const container = this.querySelector('.container');

    if (!this.isLoading) {
      if (this.__data.length > 0) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-columns');

        this.__data.forEach((record) => {
          const outerContainer = document.createElement('div');
          outerContainer.classList.add('card');

          const card = new MovieCard();
          card.record = record;

          outerContainer.appendChild(card);

          cardContainer.appendChild(outerContainer);
        });

        container.appendChild(cardContainer);
      } else {
        container.appendChild(new NoData());
      }
    } else {
      container.appendChild(new Loading());
    }
  }
}

Component.register('search-result', SearchResult);
