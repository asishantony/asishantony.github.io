import React from "react";
import useFirestore from "../hooks/useFirestore";

const Gallery = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  return (
    <section className="section-gallery">
      <h2>Our Gallery</h2>
      <div className="gallery">
        <div className="gallery-container">
          {docs && docs.length !== 0
            ? docs.map((doc) => (
                <div className="image-wrapper" key={doc.id}>
                  <img
                    src={doc.url}
                    alt="Gallery"
                    onClick={() => setSelectedImg(doc.url)}
                  />
                </div>
              ))
            : "There is no gallery images available yet"}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
