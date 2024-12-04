import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Components
import MainLayout from "./Components/Layouts/MainLayout";
import HomePage from "./Components/Pages/HomePage";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import CategoryPage from "./Components/Pages/CategoryPage";
import AboutPage from "./Components/Pages/AboutPage";
import ContactPage from "./Components/Pages/ContactPage";
import MenPage from "./Components/Pages/MenPage";
import RegistrationForm from "./Components/Pages/RegistrationForm.jsx";
import LoginForm from "./Components/Pages/LoginForm.jsx";
import RequireAuth from "./Components/Auth/RequireAuth.jsx";
import Cart from "./Components/Pages/Cart.jsx";
import ProductDetailsPage from "./Components/Pages/ProductDetailsPage.jsx";

// Create the router configuration
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/category/men" element={<MenPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<NotFoundPage />} />

            {/* protected routes */}
            <Route element={<RequireAuth />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/category/:category/:name" element={<ProductDetailsPage />}/> {/* Updated dynamic route for products */}
            </Route>
        </Route>
    ),
    { basename: "/shoes-ecom" }
);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;
