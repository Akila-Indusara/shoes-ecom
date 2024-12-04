import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(sessionStorage.getItem('user')) || null,
    isAuthenticated: JSON.parse(sessionStorage.getItem('isAuthenticated')) || false,
    message: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            const { name, email, password } = action.payload;
            state.user = { name, email, password };
            state.isAuthenticated = true;
            state.message = 'Registration successful!';

            // Save to sessionStorage
            sessionStorage.setItem('user', JSON.stringify(state.user));
            sessionStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated));
        },
        login: (state, action) => {
            const { email, password } = action.payload;
            const storedUser = JSON.parse(sessionStorage.getItem('user'));

            if (storedUser && email === storedUser.email && password === storedUser.password) {
                state.user = storedUser;
                state.isAuthenticated = true;
                state.message = 'Login successful!';

                // Update sessionStorage
                sessionStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated));
            } else {
                state.message = 'Invalid credentials!';
            }
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.message = 'Logged out successfully!';

            // Clear sessionStorage
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('isAuthenticated');
        },
    },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
