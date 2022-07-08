import { createSlice } from '@reduxjs/toolkit'

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
    adress: "",
    
  },
  reducers: {
    chooseFirstName: (state, action) => { state.firstName = action.payload },
    chooseLastName: (state, action) => { state.lastName = action.payload },
    chooseEmail: (state, action) => { state.email = action.payload },
    choosePassword: (state, action) => { state.password = action.payload },
    chooseAge: (state, action) => { state.age = action.payload },
    chooseGender: (state, action) => { state.gender = action.payload },
    choosePhoneNumber: (state, action) => { state.phoneNumber = action.payload },
    chooseAdress: (state, action) => { state.adress = action.payload },
    
    
  }
})

export const reducer = rootSlice.reducer;

export const {chooseFirstName, chooseLastName, chooseEmail, choosePassword, chooseAge, chooseGender,choosePhoneNumber, chooseAdress } = rootSlice.actions