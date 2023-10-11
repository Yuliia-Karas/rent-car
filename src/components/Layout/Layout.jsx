import { Outlet } from "react-router-dom";
import {  Button, Toolbar } from "@mui/material";
import { Nav,Bar } from "./Layout.styled";

export default function Layout() {
    return (
      <div>
        <Bar position="static">
          <Toolbar>
            <Nav to="/">
              <Button variant="contained">Home</Button>
            </Nav>

            <Nav to="/catalog">
              <Button variant="contained">Catalog</Button>
            </Nav>

            {/* <Nav to="/oldcatalog">
              <Button variant="contained">Old Catalog</Button>
            </Nav> */}

            <Nav to="/favorites">
              <Button variant="contained">Favorites</Button>
            </Nav>
          </Toolbar>
        </Bar>{" "}
        <Outlet />
      </div>
    );
}

