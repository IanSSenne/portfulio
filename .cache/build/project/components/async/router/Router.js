import fw from 'ians-fw';
export class Router extends fw.Component {
    constructor(props) {
        super(props);
        this.routes = props.children;
        this.current = fw.StatefulData(this.checkHash());
        this.currentHash = 0;
        window.addEventListener('hashchange', () => (this.current.value = this.checkHash()));
        if (window.location.hash === '')
            window.location.hash = this.props.default || '404';
        this.populated = [];
    }
    checkHash() {
        for (let i = 0; i < this.props.children.length; i++) {
            const childProps = this.routes[i].props;
            const targethash = childProps.routeTarget;
            if (targethash === window.location.hash) {
                this.currentHash = i;
                return i;
            }
        }
        window.location.hash = this.props.error;
    }
    render() {
        return (fw.dom("div", { id: "router" }, this.props.children.map((_, index) => {
            if (index === this.current.value)
                this.populated[index] = true;
            if (this.populated[index]) {
                return fw.dom("div", { hidden: index != this.current.value }, _);
            }
        })));
    }
}
export function Route({ hash, children }) {
    return fw.dom("div", { routeTarget: hash }, children);
}
