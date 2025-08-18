import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { IBasicResponse, IContactUs } from "../models/general";

interface CommonState {
  apploaded: boolean;
  contactUsStatus: string;
}

const initialState: CommonState = {
  apploaded: false,
  contactUsStatus: "",
};

// export const logOut = createAsyncThunk<any>(
//   "common/logOut",
//   async (_, thunkAPI) => {
//     try {
//       return await agent.Account.logout();
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue({ error: error.response.data });
//     }
//   }
// );

export const contactUs = createAsyncThunk<IBasicResponse, IContactUs>(
  "common/contactUs",
  async (payload, thunkAPI) => {
    try {
      return await agent.Common.contactUs(payload);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ data: error.response.data });
    }
  }
);

export const commonStore = createSlice({
  name: "common",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // cart contactUs
    builder.addCase(contactUs.pending, (state) => {
      state.contactUsStatus = "loading";
    });
    builder.addCase(contactUs.fulfilled, (state, action) => {
      state.contactUsStatus = "";
    });
    builder.addCase(contactUs.rejected, (state, action) => {
      state.contactUsStatus = "failed";
    });
  },
});
