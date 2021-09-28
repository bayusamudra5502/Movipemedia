import Component from '../lib/Component';
import nodata from '@assets/no-data.svg';

export default class NoData extends Component {
  connectedCallback() {
    this.__message = 'Tidak ada data yang ditemukan';

    super.connectedCallback();
  }

  set message(msg) {
    this.__message = msg;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="no-data">
        <img src="${nodata}" alt="No Data" />
        <div class="description">
          ${this.__message}
        </div>
      </div>
    `;
  }
}

Component.register('no-data', NoData);
