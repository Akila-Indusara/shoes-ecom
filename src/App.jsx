import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import store from "./Components/Auth/store.jsx";

// Components
import MainLayout from "./Components/Layouts/MainLayout";
import HomePage from "./Components/Pages/HomePage";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import CategoryPage from "./Components/Pages/CategoryPage";
import AboutPage from "./Components/Pages/AboutPage";
import ContactPage from "./Components/Pages/ContactPage";
import MenPage from "./Components/Pages/MenPage";
import RegistrationForm from "./Components/Pages/SignUpPage.jsx";
import LoginForm from "./Components/Pages/LoginPage.jsx";
import AuthFeedback from "./Components/Auth/AuthFeedback.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/category/men" element={<MenPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signin" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <RouterProvider router={router} />
                <AuthFeedback />
            </div>
        </Provider>
    );
};

export default App;
