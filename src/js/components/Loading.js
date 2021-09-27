import Component from '../lib/Component';
import loading from '@assets/loading.svg';

export default class Loading extends Component {
  render() {
    this.innerHTML = `
      <div>      
        <div class="loading">
          <img src="${loading}" alt="Loading..">
          <p>Loading...</p>
        </div>
      </div>
    `;
  }
}

Component.register('loading-component', Loading);
