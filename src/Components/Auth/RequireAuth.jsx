import {Navigate, Outlet, useLocation} from "react-router-dom";

const RequireAuth = () => {
    const isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated'));
    const location = useLocation() ;

    return (
        isAuthenticated
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default RequireAuth;