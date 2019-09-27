import fw from 'ians-fw';
import { Router } from '../router/Router';
import Panel from '../layout/Panel';
import { HomePage } from './HomePage';
import { ProjectPage } from './ProjectsPage';
export default function Content(props) {
	return (
		<div>
			<Router
				master={true}
				routes={[
					{
						path: '#profile/:id',
						value: data => {
							return <div>profile id#{data.id}</div>;
						}
					},
					{ path: '#project', value: () => <ProjectPage /> },
					{ path: '#project/:id', value: ({ id }) => <ProjectPage id={id} /> },
					{ path: '#home', value: () => <HomePage /> }
				]}
				default="#home"
			>
				<h1>ERROR: route not found</h1>
			</Router>
		</div>
	);
}
