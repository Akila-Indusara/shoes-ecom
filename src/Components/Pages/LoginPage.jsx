import { useDispatch } from "react-redux";
import { login } from "../Auth/authSlice.jsx";
import {useState} from "react";

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email && formData.password) {
            dispatch(login(formData));
        } else {
            alert("All fields are required.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
