import fw from 'ians-fw';
import { Nav } from './Nav';
fw.css`.header {
  padding: 60px;
  text-align: center;
  background: #781e18;
  color: white;
  font-size: 30px;
}`;
export default function Header(props) {
	return (
		<div>
			<Nav
				items={[
					{ name: 'home', hash: '#home' },
					{ name: 'projects', hash: '#project' },
					{ name: '???', hash: '#???' }
				]}
			/>
			<div className="header">
				<h1>Ian Senne</h1>
			</div>
		</div>
	);
}
