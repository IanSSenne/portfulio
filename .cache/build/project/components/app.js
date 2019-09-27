import fw from 'ians-fw';
import Header from './general/Header';
import Content from './general/Content';
import StyledComponent from './styledComponent';
export default StyledComponent(function App() {
    return (fw.dom("div", { className: "app" },
        fw.dom(Header, null),
        fw.dom(Content, null)));
}, `.app{
    width:100vw;
	height:100vh;
}`);
