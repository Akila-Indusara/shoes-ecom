import { useSelector } from "react-redux";

const AuthFeedback = () => {
    const { isAuthenticated, message } = useSelector((state) => state.auth);

    return (
        <div>
            {message && <p>{message}</p>}
            {isAuthenticated ? <p>You are logged in!</p> : <p>Please log in.</p>}
        </div>
    );
};

export default AuthFeedback;
