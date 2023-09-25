import React from "react";

// Material UI
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleIcon from "@mui/icons-material/People";

// Components
import Section from "../Section/Section";
import EmailRow from "../EmailRow/EmailRow";

// CSS Files
import "./EmailList.css";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        {/* Reusable sections component */}
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={LocalOfferIcon} title="Promotions" color="#1A73E8" />
        <Section Icon={PeopleIcon} title="Social" color="green" />
      </div>

      <div className="emailList__list">
        {/* Dummy test value */}
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer"
          description="This is a test"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
