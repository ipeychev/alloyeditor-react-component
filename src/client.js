var React = require('react');
var ReactDOM = require('react-dom');
var AlloyEditorComponent = require('./alloyeditor');

ReactDOM.render(React.createElement(AlloyEditorComponent, {
	container: 'editable'
}), document.getElementById('main'));