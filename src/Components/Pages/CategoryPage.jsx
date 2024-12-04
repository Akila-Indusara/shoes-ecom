import {Link} from "react-router-dom";

function CategoryPage() {
    return (
        <div className="container mx-auto">
                <h1 className="text-3xl font-bold my-5 pt-10 text-center">Category</h1>
                <div className="flex flex-wrap gap-5 justify-center">
                    <Link to={"men"}>
                        <div
                            className="w-[300px] p-3 shadow rounded border hover:scale-105 transition-transform hover:shadow-blue-500">
                            <img src="/shoes-ecom/images/mens_shoes.webp" alt="category1"/>
                            <h2 className="text-xl font-bold text-center pt-3">Men</h2>
                        </div>
                    </Link>
                    <Link to={"women"}>
                        <div
                            className="w-[300px] p-3 shadow rounded border hover:scale-105 transition-transform hover:shadow-blue-500">
                            <img src="/shoes-ecom/images/womens_shoes.jpg" alt="category1"/>
                            <h2 className="text-xl font-bold text-center pt-3">Women</h2>
                        </div>
                    </Link>
                    <Link to={"kids"}>
                        <div
                            className="w-[300px] p-3 shadow rounded border hover:scale-105 transition-transform hover:shadow-blue-500">
                            <img src="/shoes-ecom/images/kids_shoes.jpeg" alt="category1"/>
                            <h2 className="text-xl font-bold text-center pt-3">Kids</h2>
                        </div>
                    </Link>
                </div>
        </div>
    )
}

export default CategoryPage
