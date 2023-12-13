import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    greeting: {},
    isLoading: false,
    error: undefined,
};

export const fetchgreeting = createAsyncThunk("greeting/fetchgreeting", async () => {
    try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/greetings/random');
        return response.data
    } catch (error) {
        console.log(error)
    }
    ;
});

const greetingSlice = createSlice({
    name: 'greeting',
    initialState , 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchgreeting.pending, (state)=>{
            state.isLoading = true
        });
        builder.addCase(fetchgreeting.fulfilled, (state, action) => {
            state.greeting = action.payload;
            state.isLoading = false
        });
        builder.addCase(fetchgreeting.rejected, (state, action)=>{
            state.error = action.payload
            state.isLoading = false
        })
    }
});



export default greetingSlice.reducer;