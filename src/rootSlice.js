import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    phoneNumber: "",
    address: "",
    completedSteps: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },
  },
  reducers: {
    chooseFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    chooseLastName: (state, action) => {
      state.lastName = action.payload;
    },
    chooseEmail: (state, action) => {
      state.email = action.payload;
    },
    choosePassword: (state, action) => {
      state.password = action.payload;
    },
    chooseAge: (state, action) => {
      state.age = action.payload;
    },
    chooseGender: (state, action) => {
      state.gender = action.payload;
    },
    choosePhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    chooseAddress: (state, action) => {
      state.address = action.payload;
    },
    completeStep: (state, action) => {
      state.completedSteps[action.payload] = true;
    },
    resetSteps: (state) => {
      // Reset all steps to false
      state.completedSteps = {
        step1: false,
        step2: false,
        step3: false,
        step4: false,
      };
    },
  },
});

export const reducer = rootSlice.reducer;

export const {
  chooseFirstName,
  chooseLastName,
  chooseEmail,
  choosePassword,
  chooseAge,
  chooseGender,
  choosePhoneNumber,
  chooseAddress,
  completeStep,
  resetSteps,
} = rootSlice.actions;
