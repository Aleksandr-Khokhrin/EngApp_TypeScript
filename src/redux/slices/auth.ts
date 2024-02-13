import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
  const { data } = await axios.post("/auth/login", params);
  return data;
});
export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/auth/me");
  return data;
});
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const { data } = await axios.post("/users/new", params);
    return data;
  }
);


interface AuthState {
  data: any; // Тип данных может быть любым, в зависимости от того, что возвращает ваш сервер
  status: "loading" | "loaded" | "error"; // Типы для статуса
}
const initialState: AuthState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = "error";
        state.data = null;
      })

      .addCase(fetchAuthMe.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = "error";
        state.data = null;
      })

      .addCase(fetchRegister.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = "error";
        state.data = null;
      });
  },
});
export const selectIsAuth = (state: { auth: AuthState }) =>
  Boolean(state.auth.data);

export const { reducer: authReducer } = authSlice;
export const { logout } = authSlice.actions;
