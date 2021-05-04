import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

import Inicio from "../../Inicio.js";
import Areas from "../Areas.js";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/Inicio" onClick={Inicio}>
            {" "}
            Inicio{" "}
          </SidebarLink>
          <SidebarLink to="/Areas" onClick={Areas}>
            {" "}
            Areas{" "}
          </SidebarLink>
          <SidebarLink to="historia" onClick={toggle}>
            {" "}
            Historia{" "}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/formulario">Iniciar sesión</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
