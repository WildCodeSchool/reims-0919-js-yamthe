import React from 'react';
import './TextArea.css';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import axios from 'axios';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: ''
    };
  }

  monitorEditorChanges = value => {
    this.setState({ editor: value });
    console.log(this.state.editor);
  };

  sendInput = () => {
    let bodyFormData = new FormData();
    bodyFormData.set('text', this.state.editor);
    axios({
      method: 'post',
      url: 'http://localhost:5000/convert',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <>
        <ReactMde
          value={this.state.editor}
          onChange={this.monitorEditorChanges}
        />
        <button onClick={this.sendInput}>Ta mère</button>
      </>
    );
  }
}
