import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
import { fa2 } from "@fortawesome/free-solid-svg-icons";
import { fa3 } from "@fortawesome/free-solid-svg-icons";

const SearchIcon = () => <FontAwesomeIcon icon={faMagnifyingGlass} />;
const ArrowDown = () => <FontAwesomeIcon icon={faAngleDown} />;
const ArrowRight = () => <FontAwesomeIcon icon={faAngleRight} />;
const ArrowLeft = () => <FontAwesomeIcon icon={faAngleLeft} />;
const FullStar = () => <FontAwesomeIcon icon={faStar} />;
const EmptyStar = () => <FontAwesomeIcon icon={faStarRegular} />;
const NumOne = () => <FontAwesomeIcon icon={fa1} />;
const NumTwo = () => <FontAwesomeIcon icon={fa2} />;

export {
  SearchIcon,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
  FullStar,
  EmptyStar,
  NumOne,
  NumTwo,
};
