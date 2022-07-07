import React from "react";
import { Link } from "react-router-dom";
import "./VolumeCard.css";

const VolumeCard = ({
  title,
  image,
  isbn,
  date,
  modal,
  openModal,
  setVolumeInModal,
}) => {
  const handleClick = () => {
    setVolumeInModal({ title, image, isbn, date });
    openModal("volume");
  };

  return (
    <>
      {modal ? (
        <article key={isbn} className="modal-card">
          <picture>
            <img
              src={
                image.includes("seven")
                  ? "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg"
                  : image
              }
              alt={image}
            />
          </picture>
          <div className="volume-info">
            <h4>{title}</h4>
            <span>ISBN: {isbn}</span>
            <span>Release Date: {date.slice(0, 10)}</span>
          </div>
        </article>
      ) : (
        <article key={isbn} onClick={handleClick} className="volume-card">
          <picture>
            <img src={image} alt={image} />
          </picture>
        </article>
      )}
    </>
  );
};

export default VolumeCard;
