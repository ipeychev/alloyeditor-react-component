webpackJsonp([0],{0:function(e,t,n){"use strict";var i=n(1),a=n(158),o=n(159);a.render(i.createElement(o,{container:"editable"}),document.getElementById("main"))},159:function(e,t,n){"use strict";var i=n(1),a=n(160),o=i.createClass({displayName:"AlloyEditorComponent",componentDidMount:function(){this._editor=a.editable(this.props.container,this.props.alloyEditorConfig)},componentWillUnmount:function(){this._editor.destroy()},render:function(){return i.createElement("div",{id:this.props.container},i.createElement("h1",null,"AlloyEditor will make this content editable"),i.createElement("p",null,"To install React, follow the instructions on ",i.createElement("a",{href:"https://github.com/facebook/react/"},"GitHub"),"."),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel metus nunc. Maecenas rhoncus congue faucibus. Sed finibus ultrices turpis. Mauris nulla ante, aliquam a euismod ut, scelerisque nec sem. Nam dapibus ac nulla non ullamcorper. Sed vestibulum a velit non lobortis. Proin sit amet imperdiet urna. Aenean interdum urna augue, vel mollis tortor dictum vitae. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vitae suscipit magna."))}});e.exports=o}});