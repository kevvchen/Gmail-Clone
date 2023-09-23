import React from "react";

// Material UI
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";

// Components
import SidebarOption from "../SidebarOption/SidebarOption";

// CSS
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
    </div>
  );
};

export default Sidebar;
