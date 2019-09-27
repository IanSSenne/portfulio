import fw from 'ians-fw';
fw.css `ul.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #2F2C3C;
  position:absolute;
  top:0px;
  left:0px;
  width:100vw;
}
li.nav {
  float: left;
  cursor: grab;
}
li.nav a.nav {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li.nav a.nav:hover:not(.active) {
  background-color: #111;
}
.active.nav {
  cursor:default;
  background-color: #579F9F;
}`;
export class Nav extends fw.Component {
    constructor(props) {
        super(props);
        this.selectedIndex = fw.StatefulData(0);
        for (let i = 0; i < this.props.items.length; i++) {
            if (this.props.items[i].hash === window.location.hash)
                this.selectedIndex.value = i;
        }
    }
    render() {
        return (fw.dom("ul", { className: "nav" }, this.props.items.map((item, index) => {
            return (fw.dom("li", { className: "nav" },
                fw.dom("a", { className: 'nav' + (index === this.selectedIndex.value ? ' active' : ''), onclick: () => {
                        this.selectedIndex.value = index;
                        window.location.hash = item.hash;
                    } }, item.name)));
        })));
    }
}
