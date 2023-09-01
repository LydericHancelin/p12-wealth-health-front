import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export const employeeReducer = employeeSlice.reducer;

export const employeesSelector = (state) => {
  return [...state.employees.employees];
};
