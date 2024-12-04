import {FaFacebook} from "react-icons/fa";
import {FaSquareInstagram, FaSquareXTwitter} from "react-icons/fa6";

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
                    <a href="mailto:support@shoeshop.com" className="text-blue-600">
                        xxx@support.com
                    </a>.
                </p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Stay updated on the latest trends, offers, and new arrivals by following us on social media:
                </p>
                <div className="flex justify-center space-x-6 text-3xl">
                    <a href="https://www.facebook.com/shoeshop" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com/shoeshop" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                        <FaSquareXTwitter />
                    </a>
                    <a href="https://www.instagram.com/shoeshop" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                        <FaSquareInstagram />
                    </a>
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
