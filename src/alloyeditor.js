import React from 'react';
import AlloyEditor from 'alloyeditor';

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

class AlloyEditorComponent extends React.Component {
  componentDidMount() {
    const {container, alloyEditorConfig} = this.props;
    this._editor = AlloyEditor.editable(container, alloyEditorConfig);
  }

  componentWillUnmount() {
    this._editor.destroy();
  }

  render() {
    return (
      <div id={this.props.container}>
          <h1>AlloyEditor will make this content editable</h1>
              <p>
                  To install React, follow the instructions on <a href="https://github.com/facebook/react/">GitHub</a>.
              </p>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel metus nunc. Maecenas rhoncus congue faucibus. Sed finibus ultrices turpis. Mauris nulla ante, aliquam a euismod ut, scelerisque nec sem. Nam dapibus ac nulla non ullamcorper. Sed vestibulum a velit non lobortis. Proin sit amet imperdiet urna. Aenean interdum urna augue, vel mollis tortor dictum vitae. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vitae suscipit magna.
              </p>
      </div>
    );
  }
}



export default AlloyEditorComponent;
