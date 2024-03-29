import React from 'react';

function Lightbox({ imageSrc, isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="lightbox-overlay" onClick={onClose}>
          <div className="lightbox">
            <img src={imageSrc} alt="Selected Image" />
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Lightbox;
