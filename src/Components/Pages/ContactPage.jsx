import {FaFacebook} from "react-icons/fa";
import {FaSquareInstagram, FaSquareXTwitter} from "react-icons/fa6";
import {NavLink} from "react-router-dom";

const ContactPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>
            <p className="text-lg text-gray-700 mb-4">
                We’d love to hear from you! If you have any questions about our shoes, need assistance with your order, or just want to share feedback, feel free to reach out.
            </p>

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                    You can reach us via email at &nbsp;
                    <NavLink to="#" className="text-blue-600">
                        xxx@support.com
                    </NavLink>.
                </p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Stay updated on the latest trends, offers, and new arrivals by following us on social media:
                </p>
                <div className="flex justify-center space-x-6 text-3xl">
                    <NavLink to="#" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        <FaFacebook />
                    </NavLink>
                    <NavLink to="#" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                        <FaSquareXTwitter />
                    </NavLink>
                    <NavLink to="#" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                        <FaSquareInstagram />
                    </NavLink>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Mailing Address</h2>
                <p className="text-lg text-gray-700 mb-4">
                    xxxxx, xxxxx, xxxxx, xxxxx, xxxxx
                </p>
            </div>
        </div>
    );
};

export default ContactPage;
