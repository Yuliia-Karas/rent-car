import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toolbar } from "@mui/material";
import { Nav, Bar, StyledButton, Burger, BurgerList } from "./Layout.styled";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function Layout() {
  const [isListVisible, setListVisible] = useState(false);

  const handleLogin = () => {
    setListVisible(!isListVisible);
  };

  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

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

          {!isListVisible && (
            <>
              <Nav to="/">
                <StyledButton variant="contained">Home</StyledButton>
              </Nav>

              <Nav to="/catalog">
                <StyledButton variant="contained">Catalog</StyledButton>
              </Nav>

              <Nav to="/favorites">
                <StyledButton variant="contained">Favorites</StyledButton>
              </Nav>
            </>
          )}
        </Toolbar>
      </Bar>{" "}
      {isListVisible && (
        <BurgerList sx={style} component="nav" aria-label="mailbox folders">
          <Nav to="/">
            <ListItemText primary="Home" />
          </Nav>
          <Divider />
          <Nav to="/catalog">
            <ListItemText primary="Catalog" />
          </Nav>
          <Divider />
          <Nav to="/favorites">
            <ListItemText primary="Favorites" />
          </Nav>
        </BurgerList>
      )}
      <Outlet />
    </div>
  );
}
