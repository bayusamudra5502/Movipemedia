import 'bootstrap/scss/bootstrap.scss';
import '@style/index.scss';
import Header from '@/components/Header.js';

const app = document.getElementById('app');
app.appendChild(new Header());
console.log('Halo, dunia. Apa kabarnya?');
