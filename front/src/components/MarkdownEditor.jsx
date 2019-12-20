import React from 'react';
import './MarkdownEditor.css';

class MarkdownEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      editorText: ''
    };
  }

  thiccBoi = () => {
    const textArea = this.refs.textEditor;
    const selectStart = textArea.selectionStart;
    const selectEnd = textArea.selectionEnd;
    const selectedText = this.state.editorText.substring(
      selectStart,
      selectEnd
    );
    const beforeCursor = this.state.editorText.substring(0, selectStart);
    const afterCursor = this.state.editorText.substring(
      selectEnd,
      this.state.editorText.length
    );

    this.setState({
      editorText: `${beforeCursor}**${selectedText}**${afterCursor}`
    });
  };

  pastaLaVista = () => {
    const textArea = this.refs.textEditor;
    const selectStart = textArea.selectionStart;
    const selectEnd = textArea.selectionEnd;
    const selectedText = this.state.editorText.substring(
      selectStart,
      selectEnd
    );
    const beforeCursor = this.state.editorText.substring(0, selectStart);
    const afterCursor = this.state.editorText.substring(
      selectEnd,
      this.state.editorText.length
    );

    this.setState({
      editorText: `${beforeCursor}*${selectedText}*${afterCursor}`
    });
  };

  bigBoi = () => {
    const textArea = this.refs.textEditor;
    const selectStart = textArea.selectionStart;
    const selectEnd = textArea.selectionEnd;
    const selectedText = this.state.editorText.substring(
      selectStart,
      selectEnd
    );
    const beforeCursor = this.state.editorText.substring(0, selectStart);
    const afterCursor = this.state.editorText.substring(
      selectEnd,
      this.state.editorText.length
    );

    this.setState({
      editorText: `${beforeCursor}# ${selectedText}${afterCursor}`
    });
  };

  somewhatBigBoi = () => {
    const textArea = this.refs.textEditor;
    const selectStart = textArea.selectionStart;
    const selectEnd = textArea.selectionEnd;
    const selectedText = this.state.editorText.substring(
      selectStart,
      selectEnd
    );
    const beforeCursor = this.state.editorText.substring(0, selectStart);
    const afterCursor = this.state.editorText.substring(
      selectEnd,
      this.state.editorText.length
    );

    this.setState({
      editorText: `${beforeCursor}## ${selectedText}${afterCursor}`
    });
  };

  mildlyBigBoi = () => {
    const textArea = this.refs.textEditor;
    const selectStart = textArea.selectionStart;
    const selectEnd = textArea.selectionEnd;
    const selectedText = this.state.editorText.substring(
      selectStart,
      selectEnd
    );
    const beforeCursor = this.state.editorText.substring(0, selectStart);
    const afterCursor = this.state.editorText.substring(
      selectEnd,
      this.state.editorText.length
    );

    this.setState({
      editorText: `${beforeCursor}### ${selectedText}${afterCursor}`
    });
  };

  absoluteChaos = () => {
    const textArea = this.refs.textEditor;
    const selectStart = textArea.selectionStart;
    const selectEnd = textArea.selectionEnd;
    const selectedText = this.state.editorText.substring(
      selectStart,
      selectEnd
    );
    const beforeCursor = this.state.editorText.substring(0, selectStart);
    const afterCursor = this.state.editorText.substring(
      selectEnd,
      this.state.editorText.length
    );

    console.log();
  };

  render() {
    return (
      <div id="markdownEditor">
        <div id="toolbar">
          <button className="thiccBoi" onClick={this.thiccBoi}>
            B
          </button>
          <button className="pastaLaVista" onClick={this.pastaLaVista}>
            I
          </button>
          <button className="bigBoi" onClick={this.bigBoi}>
            H1
          </button>
          <button className="somewhatBigBoi" onClick={this.somewhatBigBoi}>
            H2
          </button>
          <button className="mildlyBigBoi" onClick={this.mildlyBigBoi}>
            H3
          </button>
          <button className="absoluteChaos" onClick={this.absoluteChaos}>
            Unordered List
          </button>
        </div>
        <textarea
          name="textEditor"
          id="textEditor"
          placeholder="Type some shit in here, 🅱️"
          ref="textEditor"
          value={this.state.editorText}
          onChange={e => this.setState({ editorText: e.target.value })}
        ></textarea>
      </div>
    );
  }
}

export default MarkdownEditor;
