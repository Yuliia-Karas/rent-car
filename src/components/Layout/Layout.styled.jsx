import styled from "@emotion/styled";

import { AppBar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

export const Nav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: var(--main-blue-text);

  &.active {
    font-size: 20px;
    color: #3539b2;
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const StyledButton = styled(Button)`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Bar = styled(AppBar)`
  background-color: var(--main-blue-text);
`;

export const Burger = styled(MenuIcon)`
  @media (min-width: 768px) {
    display: none;
  }
`;
