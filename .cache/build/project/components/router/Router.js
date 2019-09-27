import fw from 'ians-fw';
export class Router extends fw.Component {
    constructor(props) {
        super(props);
        this.props = props;
        const { children, master, routes } = props;
        this.children = children;
        this.master = master;
        this.current = fw.StatefulData(fw.dom("a", null));
        this.routes = routes.map(route => {
            route.path = route.path.split('/');
            return route;
        });
        console.log(this.routes);
        window.addEventListener('hashchange', () => this.exec());
        this.exec();
    }
    exec() {
        if (window.location.hash === '') {
            return (window.location.hash = this.props.default || '#');
        }
        const parts = window.location.hash.split('/');
        for (let i = 0; i < this.routes.length; i++) {
            const result = this.match(this.routes[i].path, [...parts]);
            if (result) {
                this.current.value = this.routes[i].value(result);
                return;
            }
        }
        this.current.value = fw.dom("div", { id: "router-default-404" }, this.children);
    }
    match(target, given) {
        const data = {};
        if (target.length != given.length)
            return false;
        for (let i = 0; i < target.length; i++) {
            if (target[i].charAt(0) === ':') {
                let name = target[i].substr(1);
                data[name] = given[i];
            }
            else if (target[i] != given[i]) {
                return false;
            }
        }
        return data;
    }
    render() {
        return this.current.value;
    }
}
