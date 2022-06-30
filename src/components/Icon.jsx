import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const SearchIcon = () => <FontAwesomeIcon icon={faMagnifyingGlass} />;
const arrowDown = () => <FontAwesomeIcon icon={faAngleDown} />;
const arrowRight = () => <FontAwesomeIcon icon={faAngleRight} />;
const arrowLeft = () => <FontAwesomeIcon icon={faAngleLeft} />;
const Sun = () => <FontAwesomeIcon icon={faSun} />;

export { SearchIcon, arrowDown, arrowRight, arrowLeft, Sun };
