import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import useFirestore from "../hooks/useFirestore";
import { projectStorage, projectFirestore } from "../firebase/config";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const { docs } = useFirestore("images");

  const handleDelete = (id, name) => {
    // Create a reference to the file to delete
    var fileRef = projectFirestore.collection("images").doc(id);

    // Delete the file
    fileRef
      .delete()
      .then(() => {
        // File deleted successfully
        //delete the file form the storages
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    var storageRef = projectStorage.ref(name);
    storageRef.delete().then(() => {
      console.log("File deleted successfully");
    });
  };
  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <div>
      <h1 className="upload-title">Upload Image</h1>
      <form>
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
      <h1 className="upload-title">Images</h1>
      <section className="section-gallery">
        <div className="gallery">
          <div className="gallery-container">
            {docs && docs.length !== 0
              ? docs.map((doc) => (
                  <div key={doc.id}>
                    <div className="image-wrapper" key={doc.id}>
                      <img src={doc.url} alt="Gallery" />
                    </div>
                    <button onClick={() => handleDelete(doc.id, doc.name)}>
                      {" "}
                      Delete
                    </button>
                  </div>
                ))
              : "There is no gallery images available yet"}
          </div>
        </div>{" "}
      </section>
    </div>
  );
};

export default UploadForm;
