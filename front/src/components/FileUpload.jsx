import React from 'react';
import './FileUpload.css';

const FileUpload = () => {
  return (
    <form method="post" id="fileUploadForm">
      <label htmlFor="data_file">Choose a file...</label>
      <input
        type="file"
        name="data_file"
        id="data_file"
        style={{ display: 'none' }}
        required
      />
      <button formAction="/transform">Upload your file</button>
    </form>
  );
};

export default FileUpload;
