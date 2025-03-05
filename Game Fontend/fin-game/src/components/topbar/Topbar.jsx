import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { topbarLogoURL , userImageURL } from "../../dummyData";


export default function Topbar() {
 
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <img className="topbarLogo"
              src= { topbarLogoURL }
              alt="Company Logo" />
            <span className="topbarHeading">Financial Management Dashboard</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">9</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">8</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img src={ userImageURL } alt="Player I" className="topAvatar"/>
          </div>
        </div>
      </div>
    );
  
}