import React, { useContext } from "react";
import VolumeCard from "./VolumeCard";
import "./VolumesContainer.css";

import { SettingsContext } from "../context/settings.context";
import i18n from "../utils/dictionnary";

const VolumesContainer = ({ volumes, openModal, setVolumeInModal }) => {
  const { lang } = useContext(SettingsContext);
  return (
    <section className="all-volumes">
      <h3>{i18n[lang].allVolumes}</h3>
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
