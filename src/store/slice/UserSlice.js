import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let createBlog = createAsyncThunk("createBlog", async (data) => {
    let response = await axios.post("https://65864a3e468ef171392e1c78.mockapi.io/crud", data)

    try {
        return response.data
    } catch (error) {
        console.log(error);
    }
})

let getBlog = createAsyncThunk("getBlog", async () => {
    let response = await axios.get("https://65864a3e468ef171392e1c78.mockapi.io/crud")

    try {
        return response.data
    } catch (error) {
        console.log(error)
    }
})

let deleteBlog = createAsyncThunk("deleteBlog", async (id) => {
    let response = await axios.delete(`https://65864a3e468ef171392e1c78.mockapi.io/crud/${id}`)

    try {
        return response.data
    } catch (error) {
        console.log(error);
    }
})

let UserSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        userData: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createBlog.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createBlog.fulfilled, (state, action) => {
            state.loading = false
            state.userData.push(action.payload)
        })
        builder.addCase(createBlog.rejected, (state, action) => {
            console.log("Error");
        })

        builder.addCase(getBlog.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getBlog.fulfilled, (state, action) => {
            state.loading = false
            state.userData = action.payload
        })
        builder.addCase(getBlog.rejected, (state, action) => {
            console.log("Error");
        })

        builder.addCase(deleteBlog.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteBlog.fulfilled, (state, action) => {
            state.loading = false
            let { id } = action.payload

            if (id) {
                state.userData = state.userData.filter((e) => e.id !== id)
            }
        })
        builder.addCase(deleteBlog.rejected, (state, action) => {
            console.log("Error");
        })
    }
})


export default UserSlice
export { createBlog, getBlog, deleteBlog }
