import { Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";

import "./App.css";

import Home from "./pages/Home/Home";
// import OldCatalog from "./pages/OldCatalog/OldCatalog";
import Favorites from "./pages/Favorites/Favorites";
import CarDetails from "./pages/CarDetails/CarDetails";
import Layout from "./components/Layout/Layout";

import Catalog from "./pages/Catalog/Catalog";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "./redux/operations";
import { getCars } from "./redux/selectors";

function App() {
  const { items, isLoading, error } = useSelector(getCars);
  console.log({ items, isLoading, error });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/catalog" element={<Catalog />} />

          {/* <Route path="/oldcatalog" element={<OldCatalog />} /> */}

          <Route path="/catalog/:carId" element={<CarDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
