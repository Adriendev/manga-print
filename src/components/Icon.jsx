import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const SearchIcon = () => <FontAwesomeIcon icon={faMagnifyingGlass} />;
const ArrowDown = () => <FontAwesomeIcon icon={faAngleDown} />;
const ArrowRight = () => <FontAwesomeIcon icon={faAngleRight} />;
const ArrowLeft = () => <FontAwesomeIcon icon={faAngleLeft} />;

export { SearchIcon, ArrowDown, ArrowRight, ArrowLeft };
