import { useDispatch } from "react-redux";
import { register } from "../Auth/authSlice.jsx";
import {useState} from "react";

const SignUpPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.password) {
            dispatch(register(formData));
        } else {
            alert("All fields are required.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};


export default SignUpPage;
