import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null,
    message: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action) => {
            state.user = action.payload; // Save user details
            state.message = "Registration successful!";
        },
        login: (state, action) => {
            const { email, password } = action.payload;
            if (state.user && state.user.email === email && state.user.password === password) {
                state.isAuthenticated = true;
                state.message = "Login successful!";
            } else {
                state.message = "Invalid email or password.";
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.message = "Logged out.";
        },
    },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
