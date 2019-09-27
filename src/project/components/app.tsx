import fw from 'ians-fw';
import Header from './general/Header';
import Content from './general/Content';
import StyledComponent from './styledComponent';
export default StyledComponent(
	function App() {
		return (
			<div className="app">
				<Header />
				<Content />
			</div>
		);
	},
	`.app{
    width:100vw;
	height:100vh;
}`
);
