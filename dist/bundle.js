webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(36);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _alloyeditor = __webpack_require__(182);

	var _alloyeditor2 = _interopRequireDefault(_alloyeditor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_alloyeditor2.default, {
		container: 'editable'
	}), document.getElementById('main'));

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _alloyeditor = __webpack_require__(183);

	var _alloyeditor2 = _interopRequireDefault(_alloyeditor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// var AlloyEditorComponent = React.createClass({
	//     componentDidMount: function() {
	//         this._editor = AlloyEditor.editable(this.props.container, this.props.alloyEditorConfig);
	//     },
	//
	//     componentWillUnmount: function() {
	//         this._editor.destroy();
	//     },
	//
	//     render: function() {
	//         return (
	//             <div id={this.props.container}>
	//                 <h1>AlloyEditor will make this content editable</h1>
	//                     <p>
	//                         To install React, follow the instructions on <a href="https://github.com/facebook/react/">GitHub</a>.
	//                     </p>
	//                     <p>
	//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel metus nunc. Maecenas rhoncus congue faucibus. Sed finibus ultrices turpis. Mauris nulla ante, aliquam a euismod ut, scelerisque nec sem. Nam dapibus ac nulla non ullamcorper. Sed vestibulum a velit non lobortis. Proin sit amet imperdiet urna. Aenean interdum urna augue, vel mollis tortor dictum vitae. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vitae suscipit magna.
	//                     </p>
	//             </div>
	//         );
	//     }
	// });

	var AlloyEditorComponent = function (_React$Component) {
	  _inherits(AlloyEditorComponent, _React$Component);

	  function AlloyEditorComponent() {
	    _classCallCheck(this, AlloyEditorComponent);

	    return _possibleConstructorReturn(this, (AlloyEditorComponent.__proto__ || Object.getPrototypeOf(AlloyEditorComponent)).apply(this, arguments));
	  }

	  _createClass(AlloyEditorComponent, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          container = _props.container,
	          alloyEditorConfig = _props.alloyEditorConfig;

	      this._editor = _alloyeditor2.default.editable(container, alloyEditorConfig);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._editor.destroy();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: this.props.container },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'AlloyEditor will make this content editable'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'To install React, follow the instructions on ',
	          _react2.default.createElement(
	            'a',
	            { href: 'https://github.com/facebook/react/' },
	            'GitHub'
	          ),
	          '.'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel metus nunc. Maecenas rhoncus congue faucibus. Sed finibus ultrices turpis. Mauris nulla ante, aliquam a euismod ut, scelerisque nec sem. Nam dapibus ac nulla non ullamcorper. Sed vestibulum a velit non lobortis. Proin sit amet imperdiet urna. Aenean interdum urna augue, vel mollis tortor dictum vitae. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vitae suscipit magna.'
	        )
	      );
	    }
	  }]);

	  return AlloyEditorComponent;
	}(_react2.default.Component);

	exports.default = AlloyEditorComponent;

/***/ })

});