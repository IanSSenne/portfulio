import fw from 'ians-fw';
import Panel from '../layout/Panel';
import StyledComponent from '../styledComponent';
const projectCache = {};
class LoadProject extends fw.Component {
    constructor(props) {
        super(props);
        const ERR = props.error || (err => fw.dom("div", { style: "color:red;" }, JSON.stringify(err)));
        const SUC = props.parse || (() => { });
        this.data = fw.StatefulData(fw.dom("div", null, "Loading asset..."));
        this.loadingState = 'loading';
        if (projectCache[props.id]) {
            this.data.value = SUC(projectCache[props.id]);
        }
        else {
            fetch(props.id)
                .then(res => res.json())
                .then(data => {
                projectCache[props.id] = data;
                this.loadingState = 'done';
                this.data.value = [SUC(data)];
            })
                .catch(err => {
                this.loadingState = 'error';
                this.data.value = [ERR(err)];
            });
        }
    }
    render() {
        return fw.dom("div", { className: 'project-loader-' + this.loadingState }, this.data.value);
    }
}
const Project = StyledComponent(function ({ id }) {
    return (fw.dom("div", { className: "project-wrapper" },
        fw.dom(Panel, { style: "width:calc(100vw - 8em);overflow-x:wrap;margin:2em;" },
            fw.dom("div", { className: "project-tools" },
                fw.dom("button", { style: "display:contents;margin-right:2em;", onclick: () => {
                        window.location.hash = '#project';
                    } },
                    fw.dom("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", style: "width:30px;height:30px;" },
                        fw.dom("path", { d: "M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M17,15.59L15.59,17 L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59z" })))),
            fw.dom(LoadProject, { id: id, parse: data => {
                    return (fw.dom("div", null,
                        fw.dom("h1", null, data.title || 'data.title'),
                        fw.dom("p", null, data.description || 'data.description'),
                        fw.dom("hr", null),
                        fw.dom("div", { className: "project-article" })));
                } }))));
}, `.project-wrapper{position:absolute;top:0px;left:0px;width:100vw;height:100vh;background-color:rgba(1,1,1,0.5);}
.project-tools{width:100%;height:2em;border-bottom: 1px solid black;direction:rtl;}.project-tools>button{cursor: grab;}`);
export function ProjectPage(props) {
    return (fw.dom("div", null,
        fw.dom("h1", null, "Projects"),
        fw.dom("ul", null,
            fw.dom("li", null,
                fw.dom("a", { href: "#project/ians-fw" }, "ians-fw")),
            fw.dom("li", null,
                fw.dom("a", { href: "#project/lol" }, "lol"))),
        props.id ? fw.dom(Project, { id: '/~/projects/' + props.id + '.json' }) : ''));
}
