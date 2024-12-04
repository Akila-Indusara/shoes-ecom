import {Outlet} from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";

const MainLayout = () => {
    // Define the shared state

    return (
        <div className="font-Lato min-h-screen flex flex-col">
            {/* Pass the state setter to Navbar */}
            <Navbar/>

            {/* Pass the state to components rendered by Outlet */}
            <div className="flex-grow">
                <Outlet/>
            </div>

            <Footer/>
        </div>

    );
};
export default MainLayout;