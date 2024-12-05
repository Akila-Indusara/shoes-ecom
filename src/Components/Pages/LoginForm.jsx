import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Auth/authSlice.jsx';
import {Link, useLocation, useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const message = useSelector((state) => state.auth.message);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email && form.password) {
            dispatch(login(form));

            // Use a small timeout to ensure state updates before navigation
            setTimeout(() => {
                navigate(from, { replace: true });
            }, 100);
        } else {
            alert('All fields are required');
        }
    };

    return (
        <div className="mt-20 m-4">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg border shadow-md" >
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Login</h2>

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

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Login
                </button>
                <p className="mt-4 text-center">
                    Don&#39;t have an account? <Link className="text-blue-500" to={"/signup"}>Register</Link>
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

export default LoginForm;
