import React from 'react';
import './App.css';
import TextArea from './components/TextArea';
import FileUpload from './components/FileUpload';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Home />
      <TextArea />
      <FileUpload />
    </div>
  );
}

export default App;
