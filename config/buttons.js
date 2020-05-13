
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Dashboard",
    path: "/",
    icon: <FontAwesomeIcon icon={faCompass} />
  },
  {
    label: "Docs",
    path: "/",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  {
    label: "Wiki",
    path: "/",
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  },
  {
    label: "Profile",
    path: "/",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;