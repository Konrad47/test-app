import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthPayload } from "../../views/login/models";

const initialState: AuthPayload = {
  id: 0,
  access_token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state: AuthPayload, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    setId: (state: AuthPayload, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setAccessToken, setId } = authSlice.actions;
export default authSlice.reducer;
