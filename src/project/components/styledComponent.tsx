import fw from 'ians-fw';
export default function(component, styles) {
	let isUsed = false;
	return function(props) {
		if (!isUsed) {
			isUsed = true;
			const style = document.createElement('style');
			style.innerHTML = styles
				.replace(/[\n\r]+/g, ';')
				.replace(/;+/g, ';')
				.replace(/};+/g, '}')
				.replace(/{;+/g, '{')
				.replace(/\s\s+/g, ' ')
				.replace(/([{;:]) /g, '$1');
			document.head.appendChild(style);
		}
		return fw.dom(component, props, ...props.children);
	};
}
