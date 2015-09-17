import render   from './render';
import template from '../../browser/template';

export default function renderToString(fragment, component) {
	let dom = template.createElement('div');

	render(fragment, dom, component);
	return dom.innerHTML;
}
