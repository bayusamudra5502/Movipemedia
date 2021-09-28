import Component from '@/lib/Component';

export default class Search extends Component {
  onsearch() {}

  render() {
    this.innerHTML = `
    <div class="outer-search-bar container">
      <div class="search-bar mt-4">
        <form id="search">
          <div class="input-search-bar" id="search">
            <input type="text" class="form-input" placeholder="Kata Kunci" required>
            <div class="input-group-append">
              <button class="btn" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>    
    </div>
    `;

    this.querySelector('#search').addEventListener('submit', (event) => {
      event.preventDefault();

      const data = {
        keyword: event.target[0].value,
      };

      const searchEvent = new CustomEvent('search', data);

      this.dispatchEvent(searchEvent);
      this.onsearch(data, event);
    });
  }
}

Component.register('search-bar', Search);
