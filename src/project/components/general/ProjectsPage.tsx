import fw from 'ians-fw';
import Panel from '../layout/Panel';
import StyledComponent from '../styledComponent';
const projectCache = {};
class LoadProject extends fw.Component {
	data: any;
	loadingState: string;
	constructor(props) {
		super(props);
		const ERR = props.error || (err => <div style="color:red;">{JSON.stringify(err)}</div>);
		const SUC = props.parse || (() => {});
		this.data = fw.StatefulData(<div>Loading asset...</div>);
		this.loadingState = 'loading';
		if (projectCache[props.id]) {
			this.data.value = SUC(projectCache[props.id]);
		} else {
			fetch(props.id)
				.then(res => res.json())
				.then(data => {
					projectCache[props.id] = data;
					this.loadingState = 'done';
					this.data.value = [ SUC(data) ];
				})
				.catch(err => {
					this.loadingState = 'error';
					this.data.value = [ ERR(err) ];
				});
		}
	}
	render() {
		return <div className={'project-loader-' + this.loadingState}>{this.data.value}</div>;
	}
}
const Project = StyledComponent(
	function({ id }) {
		return (
			<div className="project-wrapper">
				<Panel style="width:calc(100vw - 8em);overflow-x:wrap;margin:2em;">
					<div className="project-tools">
						<button
							style="display:contents;margin-right:2em;"
							onclick={() => {
								window.location.hash = '#project';
							}}
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:30px;height:30px;">
								<path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M17,15.59L15.59,17 L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59z" />
							</svg>
						</button>
					</div>
					<LoadProject
						id={id}
						parse={data => {
							return (
								<div>
									<h1>{data.title || 'data.title'}</h1>
									<p>{data.description || 'data.description'}</p>
									<hr />
									<div className="project-article" />
								</div>
							);
						}}
					/>
				</Panel>
			</div>
		);
	},
	`.project-wrapper{position:absolute;top:0px;left:0px;width:100vw;height:100vh;background-color:rgba(1,1,1,0.5);}
.project-tools{width:100%;height:2em;border-bottom: 1px solid black;direction:rtl;}.project-tools>button{cursor: grab;}`
);
export function ProjectPage(props) {
	return (
		<div>
			<h1>Projects</h1>
			<ul>
				<li>
					<a href="#project/ians-fw">ians-fw</a>
				</li>
				<li>
					<a href="#project/lol">lol</a>
				</li>
			</ul>
			{props.id ? <Project id={'/~/projects/' + props.id + '.json'} /> : ''}
		</div>
	);
}
