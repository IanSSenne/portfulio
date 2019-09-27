import fw from 'ians-fw';
import Panel from '../layout/Panel';
export function HomePage(props) {
    return (fw.dom("div", null,
        fw.dom(Panel, null,
            fw.dom("h1", null, "About me"),
            fw.dom("p", null, "Hello, my name is Ian Senne and i have been teaching myself programming for about 6 years now."))));
}
