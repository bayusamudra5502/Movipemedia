import '@style/index.scss';
import App from './App';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const app = document.getElementById('app');
app.appendChild(new App());
