import fw from 'ians-fw';
import App from './components/app';
import { CSS } from './components/css';
console.time('first pre-render');
const c = fw.StatefulData(0);
const app = <App c={c} /> as any;
console.timeEnd('first pre-render');
window.addEventListener('DOMContentLoaded', event => {
	console.time('first render');
	document.body.appendChild(app.element());
	console.timeEnd('first render');
});
if (document.body) {
	console.time('first render');
	document.body.appendChild(app.element());
	console.timeEnd('first render');
}
const css = <CSS />;
document.head.appendChild(css.element());
