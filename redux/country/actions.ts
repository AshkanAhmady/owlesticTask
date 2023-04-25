import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/Configs/request";

export const fetchAllCountries = createAsyncThunk(
  "countries/fetchAllCountries",
  async (_, { rejectWithValue }) => {
    try {
      const data = await request.get("/all");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
