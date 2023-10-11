import styled from "@emotion/styled";

import { AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";

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

export const Bar = styled(AppBar)`
  background-color: var(--main-blue-text);
`;
