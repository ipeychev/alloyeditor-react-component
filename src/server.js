var React = require('react');
var ReactDOMServer = require('react-dom/server');

require('babel-register');
var AlloyEditorComponent = require('./alloyeditor');

function renderToString() {
	var content = ReactDOMServer.renderToString(React.createElement(AlloyEditorComponent, {
		container: 'editable'
	}));

	return content;
}

module.exports = renderToString;