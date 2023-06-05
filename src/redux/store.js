import { configureStore } from "@reduxjs/toolkit";

import card from "./slices/card";
import filter from "./slices/filter";

export const store = configureStore({
  reducer: { filter, card },
});
