import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

import "./SeriesDetailsPage.css";
import { API_URL } from "../utils/constants";

import LoadingDisplay from "../components/LoadingDisplay";
import SeriesDetails from "../components/SeriesDetails";
import SeriesReviewsContainer from "../components/SeriesReviewsContainer";
import VolumesContainer from "../components/VolumesContainer";
import VolumeCard from "../components/VolumeCard";
import { Cross } from "../components/Icon";

import { SettingsContext } from "../context/settings.context";
import i18n from "../utils/dictionnary";
import AddReviewForm from "../components/AddReviewForm";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: color("black"),
  },
};

const SeriesDetailsPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const seriesId = useParams().id;
  const [isLoading, setIsLoading] = useState(true);
  const [oneSeries, setOneSeries] = useState({});
  const [seriesVolumes, setSeriesVolumes] = useState([]);
  const [seriesRating, setSeriesRating] = useState(null);
  const [volumeInModal, setVolumeInModal] = useState({});

  const { lang } = useContext(SettingsContext);

  function openModal(val) {
    // console.log(e.currentTarget);
    // console.log(`opened modal`);
    setModalType(val);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setIsLoading(true);
    const getSeriesDetails = async () => {
      const { data } = await axios(`${API_URL}/mangaSeries/${seriesId}`);
      setOneSeries(data);
    };

    const getSeriesVolumes = async () => {
      const { data } = await axios(`${API_URL}/mangaVolume/series/${seriesId}`);

      setSeriesVolumes(data);
      setIsLoading(false);
    };

    getSeriesDetails();
    getSeriesVolumes();
  }, [seriesId]);

  return (
    <main id="series-details">
      {isLoading ? (
        <LoadingDisplay />
      ) : (
        <SeriesDetails
          series={oneSeries}
          volumes={seriesVolumes}
          seriesRating={seriesRating}
        />
      )}
      <div className="reviews-volumes">
        <section className="reviews-section">
          <div>
            <h3>{i18n[lang].reviews}</h3>
            <hr />
          </div>

          <SeriesReviewsContainer
            openModal={openModal}
            seriesId={seriesId}
            setSeriesRating={setSeriesRating}
          />
        </section>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <div className="modal">
            <button className="btn-close" onClick={closeModal}>
              <Cross />
            </button>
            {modalType === "volume" && (
              <VolumeCard
                title={volumeInModal.title}
                image={volumeInModal.image}
                isbn={volumeInModal.isbn}
                date={volumeInModal.date}
                modal="true"
              />
            )}
            {modalType === "review" && (
              <AddReviewForm closeModal={closeModal} seriesId={seriesId} />
            )}
          </div>
        </Modal>
        <section className="volumes-container">
          <VolumesContainer
            openModal={openModal}
            volumes={seriesVolumes}
            setVolumeInModal={setVolumeInModal}
          />
        </section>
      </div>
    </main>
  );
};

export default SeriesDetailsPage;
