import fw from 'ians-fw';
import { Nav } from './Nav';
fw.css `.header {
  padding: 60px;
  text-align: center;
  background: #781e18;
  color: white;
  font-size: 30px;
}`;
export default function Header(props) {
    return (fw.dom("div", null,
        fw.dom(Nav, { items: [
                { name: 'home', hash: '#home' },
                { name: 'projects', hash: '#project' },
                { name: '???', hash: '#???' }
            ] }),
        fw.dom("div", { className: "header" },
            fw.dom("h1", null, "Ian Senne"))));
}
