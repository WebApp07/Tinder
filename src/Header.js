import React from "react";
import "./Header.css";
import Person3Icon from "@mui/icons-material/Person3";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <Person3Icon fontSize="large" className="header__icon" />
      </IconButton>

      <img className="header__logo" src="./logo.png" alt="" />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
