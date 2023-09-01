import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "./employeeStore";

export const store = configureStore({
  reducer: { employees: employeeReducer },
});
