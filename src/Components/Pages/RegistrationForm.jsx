import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { register } from '../Auth/authSlice.jsx';
import {NavLink, useLocation, useNavigate} from "react-router-dom";

const RegistrationForm = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const message = useSelector((state) => state.auth.message);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.email && form.password) {
            dispatch(register(form));
            // Use a small timeout to ensure state updates before navigation
            setTimeout(() => {
                navigate(from, { replace: true });
            }, 100);
        } else {
            alert('All fields are required');
        }
    };

    return (
        <div className="mt-28 mx-4">
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>

                {/* Name Input */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Create a password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Register
                </button>

                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{' '}
                    <NavLink to={"/shoes-ecom/login"} className="text-blue-500 hover:underline">
                        Login
                    </NavLink>
                </p>
                {message && (
                    <p
                        className={`mt-4 text-center p-2 rounded-md ${
                            message.includes("successful")
                                ? "bg-green-100 text-green-700 border border-green-300"
                                : "bg-red-100 text-red-700 border border-red-300"
                        }`}
                    >
                        {message}
                    </p>
                )}
            </form>

        </div>

    );
};

export default RegistrationForm;
