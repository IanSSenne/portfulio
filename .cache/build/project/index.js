import fw from 'ians-fw';
import App from './components/app';
import { CSS } from './components/css';
console.time('first pre-render');
const c = fw.StatefulData(0);
const app = fw.dom(App, { c: c });
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
const css = fw.dom(CSS, null);
document.head.appendChild(css.element());
