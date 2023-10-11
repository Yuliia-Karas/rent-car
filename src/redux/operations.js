import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65202948906e276284c41eea.mockapi.io/";

export const fetchCars = createAsyncThunk("cars/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get('/advert');
    return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


export const fetchCarsByPage = createAsyncThunk(
  "adverts/fetchCarsByPage",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get("/advert", {
        params: { page: page, limit: 8 },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



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

