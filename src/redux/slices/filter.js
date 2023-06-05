import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  searchValue: "",
  status: "",
  gender: "",
  species: "",
};

const filter = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setSpecies(state, action) {
      state.species = action.payload;
    },
  },
});

export const { setCurrentPage, setSearchValue, setStatus, setGender, setSpecies } = filter.actions;

export default filter.reducer;
