import React from "react";
import VolumeCard from "./VolumeCard";
import "./VolumesContainer.css";

const VolumesContainer = ({ volumes, openModal, setVolumeInModal }) => {
  return (
    <section className="all-volumes">
      <h3>ALL VOLUMES</h3>
      <hr />
      <div>
        {volumes.map((volume) => (
          <VolumeCard
            title={volume.title}
            image={
              volume.cover.includes("seven")
                ? "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg"
                : volume.cover
            }
            isbn={volume.ISBN}
            date={volume.releaseDate}
            id={volume._id}
            series={volume.series}
            openModal={openModal}
            setVolumeInModal={setVolumeInModal}
          />
        ))}
      </div>
    </section>
  );
};

export default VolumesContainer;
