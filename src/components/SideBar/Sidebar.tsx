import { Fragment } from "react";
import { sideBarIcons } from "./SideBarData";
import { SideBarWrapper } from "./SideBar.styled";

const Sidebar = () => {
  return (
    <SideBarWrapper>
      {sideBarIcons.map((icon, index) => (
        <Fragment key={index}>{icon}</Fragment>
      ))}
    </SideBarWrapper>
  );
};

export default Sidebar;
