import React from 'react';
import './TextArea.css';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: ''
    };
  }

  monitorEditorChanges = value => {
    this.setState({ editor: value });
  };

  render() {
    return <ReactMde onChange={this.monitorEditorChanges} />;
  }
}
