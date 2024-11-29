
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./Components/Pages/HomePage.jsx";
import MainLayout from "./Components/Layouts/MainLayout.jsx";
import NotFoundPage from "./Components/Pages/NotFoundPage.jsx";
import CategoryPage from "./Components/Pages/CategoryPage.jsx";
import AboutPage from "./Components/Pages/AboutPage.jsx";
import ContactPage from "./Components/Pages/ContactPage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/category" element={<CategoryPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    ),
);

const App = () => {
    return <RouterProvider router={router}/>;
};

export default App
