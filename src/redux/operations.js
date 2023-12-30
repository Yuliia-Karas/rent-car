import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://backend-car-catalog.onrender.com";

export const fetchCars = createAsyncThunk("/cars", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/cars");
    return response.data;
  } catch (error) {
    console.log("Non found catalog", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const fetchCarsByPage = createAsyncThunk("/cars", async (page, thunkAPI) => {
  try {
    const response = await axios.get("/cars", {
      params: { page: page, limit: 4 },
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});



// без createAthyncThunk
// import axios from "axios";
// import {
//     fetchingInProgress,
//     fetchingSuccess,
//     fetchingError,
// } from './advertSlice';

// axios.defaults.baseURL = "https://65202948906e276284c41eea.mockapi.io/";

// export const fetchCars = () => async dispatch => {
//     try {
        
//         dispatch(fetchingInProgress());

//         const response = await axios.get('/advert');

//         dispatch(fetchingSuccess(response.data));
//     } catch (e) {
//         console.log(e);

//         dispatch(fetchingError(e.message));
//     }
// }

