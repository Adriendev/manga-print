import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const SearchIcon = () => <FontAwesomeIcon icon={faMagnifyingGlass} />;
const ArrowDown = () => <FontAwesomeIcon icon={faAngleDown} />;
const ArrowRight = () => <FontAwesomeIcon icon={faAngleRight} />;
const ArrowLeft = () => <FontAwesomeIcon icon={faAngleLeft} />;
const FullStar = () => <FontAwesomeIcon icon={faStar} />;
const EmptyStar = () => <FontAwesomeIcon icon={faStarRegular} />;

const Cross = () => <FontAwesomeIcon icon={faXmark} />;

const TrashCan = () => <FontAwesomeIcon icon={faTrashCan} />;
const PenToSquare = () => <FontAwesomeIcon icon={faPenToSquare} />;

export {
  SearchIcon,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
  FullStar,
  EmptyStar,
  TrashCan,
  PenToSquare,
  Cross,
};
