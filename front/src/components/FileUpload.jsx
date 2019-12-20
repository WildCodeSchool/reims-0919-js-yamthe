import React from 'react';
import './FileUpload.css';

const FileUpload = () => {
  return (
    <form
      method="post"
      id="fileUploadForm"
      encType="multipart/form-data"
      className="file"
    >
      <input type="file" name="data_file" id="data_file" required />
      <button
        formAction="http://localhost:5000/transform"
        class="example_e"
        href="add-website-here"
        target="_blank"
        rel="nofollow noopener"
      >
        Upload your file
      </button>
    </form>
  );
};

export default FileUpload;
