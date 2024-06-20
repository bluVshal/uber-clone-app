import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null, //where are you right now?
    destination: null, //where do you want to go?
    travelTimeInformation: null // how much time it will take to reach destination
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer:{
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.origin = action.payload;5
        },
        setTravelTimeInformation: (state, action) => {
            state.orgin = action.payload; 
        }
    },
});


export const{ setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

//grab data from Data Layer
// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.setTravelTimeInformation;

export default navSlice.reducer;
