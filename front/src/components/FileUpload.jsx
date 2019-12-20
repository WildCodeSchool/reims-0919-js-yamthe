import React from 'react';
import './FileUpload.css';

const FileUpload = () => {
  return (
    <form method="post" id="fileUploadForm" encType="multipart/form-data">
      <input type="file" name="data_file" id="data_file" required />
      <button formAction="http://localhost:5000/transform">
        Upload your file
      </button>
    </form>
  );
};

export default FileUpload;
