import { Outlet } from "react-router-dom";
import {   Toolbar } from "@mui/material";
import { Nav, Bar, StyledButton, Burger } from "./Layout.styled";

import IconButton from "@mui/material/IconButton";

 const handleLogin = () => {
   console.log("Hello world!");
 };
 
export default function Layout() {
    return (
      <div>
        <Bar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleLogin}
            >
              <Burger />
            </IconButton>

            <Nav to="/">
              <StyledButton variant="contained">Home</StyledButton>
            </Nav>

            <Nav to="/catalog">
              <StyledButton variant="contained">Catalog</StyledButton>
            </Nav>

            <Nav to="/favorites">
              <StyledButton variant="contained">Favorites</StyledButton>
            </Nav>
          </Toolbar>
        </Bar>{" "}
        <Outlet />
      </div>
    );
}

