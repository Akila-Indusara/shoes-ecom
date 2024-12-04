import { NavLink } from "react-router-dom";
import { useState } from "react";
import {FaBars, FaRegUserCircle, FaTimes} from "react-icons/fa";
import {FaCartShopping} from "react-icons/fa6";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

    const linkClass = ({ isActive }) =>
        isActive
            ? "flex text-blue-700 border-b-4 border-blue-700"
            : "flex hover:text-blue-500";

    const menuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="flex justify-between px-5 sm:px-20 py-3 text-zinc-900 bg-gradient-to-r from-[#94b9ff] to-[#cdffd8]">
                <div className="lg:hidden">
                    <button onClick={menuClick} className="focus:outline-none">
                        <FaBars className="block text-4xl" />
                    </button>
                </div>

                <div className="bg-white opacity-90 px-1 rounded-md">
                    <NavLink to="/" className="">
                        <img src={"/images/logo-placeholder.png"}  alt="Logo" className="h-10" />
                    </NavLink>
                </div>

                {/* Desktop menu */}
                <nav className={"hidden lg:block mx-4"}>
                    <ul className="flex h-full items-center text-xl font-black gap-16 ">
                        <li>
                            <NavLink to="/" className={linkClass}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/category" className={linkClass}>
                                Category
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={linkClass}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={linkClass}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Side-drawer menu */}
                <div className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50 transform 
                ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:hidden`} >
                    <div className="bg-white h-full w-3/4 sm:w-1/2 md:w-1/3 shadow-lg p-6">
                        <button onClick={menuClick} className="text-2xl mb-8 focus:outline-none" >
                            <FaTimes />
                        </button>
                        <nav>
                            <ul className="flex flex-col text-xl font-bold space-y-6">
                                <li>
                                    <NavLink onClick={menuClick} to="/" className={linkClass}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={menuClick} to="/category" className={linkClass}>
                                        Category
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={menuClick} to="/about" className={linkClass}>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={menuClick} to="/contact" className={linkClass}>
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="flex items-center text-3xl gap-8">
                    <FaRegUserCircle />
                    <FaCartShopping />
                </div>
            </div>
        </>
    );
}

export default Navbar;
