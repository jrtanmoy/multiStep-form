import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  initialState: {
    firstName: "",
    lastName: "",
    
  },
  reducers: {
    chooseFirstName: (state, action) => { state.firstName = action.payload },
    chooseLastName: (state, action) => { state.lastName = action.payload },
   
    
  }
})

export const reducer = rootSlice.reducer;

export const {chooseFirstName, chooseLastName } = rootSlice.actions