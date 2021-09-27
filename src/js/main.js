import 'bootstrap/scss/bootstrap.scss';
import '@style/index.scss';
import App from './App';

const app = document.getElementById('app');
app.appendChild(new App());

console.log('Halo, dunia. Apa kabarnya?');
