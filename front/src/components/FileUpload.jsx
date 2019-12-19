import React from "react";
import "./FileUpload.css";

const FileUpload = () => {
  return (
    <form method="post" id="fileUploadForm" enctype="multipart/form-data">
      <label htmlFor="data_file">Choose a file...</label>
      <input
        type="file"
        name="data_file"
        id="data_file"
        style={{ display: "none" }}
        required
      />
      <button formAction="http://localhost:5000/transform">
        Upload your file
      </button>
    </form>
  );
};

export default FileUpload;
