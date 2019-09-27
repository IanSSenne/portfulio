import fw from 'ians-fw';
import StyledComponent from '../styledComponent';
export default StyledComponent(
	function Panel(props) {
		return (
			<div className="lay panel" {...props}>
				{props.children}
			</div>
		);
	},
	`.lay.panel{
    border:#f9f8f8;
    border-radius:1em;
    padding:1em;
    background-color:#f9f8f8;
}`
);
