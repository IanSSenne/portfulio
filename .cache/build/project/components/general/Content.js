import fw from 'ians-fw';
import { Router } from '../router/Router';
import { HomePage } from './HomePage';
import { ProjectPage } from './ProjectsPage';
export default function Content(props) {
    return (fw.dom("div", null,
        fw.dom(Router, { master: true, routes: [
                {
                    path: '#profile/:id',
                    value: data => {
                        return fw.dom("div", null,
                            "profile id#",
                            data.id);
                    }
                },
                { path: '#project', value: () => fw.dom(ProjectPage, null) },
                { path: '#project/:id', value: ({ id }) => fw.dom(ProjectPage, { id: id }) },
                { path: '#home', value: () => fw.dom(HomePage, null) }
            ], default: "#home" },
            fw.dom("h1", null, "ERROR: route not found"))));
}
