import React from 'react';
import ReactDOM from 'react-dom';
import AlloyEditorComponent from './alloyeditor';

ReactDOM.render(React.createElement(AlloyEditorComponent, {
	container: 'editable'
}), document.getElementById('main'));