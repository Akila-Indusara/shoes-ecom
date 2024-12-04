import {useLocation} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {useEffect, useState} from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


function ProductDetailsPage() {

    const location = useLocation();
    // Access the passed item from the previous page via location.state
    const productItem = location.state?.item;

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [color, setColor] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        //localStorage.removeItem("cart");
        // Get the existing cart items from localStorage or initialize to an empty array
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        // Extract the image from the currentItem
        const image = Object.values(productItem.images)[0]?.[0];

        // Check if the item already exists in the cart by matching the name
        const existingItemIndex = existingCart.findIndex(item => item.name === productItem.name);

        if (existingItemIndex !== -1) {
            // If the item already exists, update its quantity
            existingCart[existingItemIndex].quantity += quantity; // Increase quantity
        } else {
            // If the item doesn't exist, add it to the cart with the provided quantity
            existingCart.push({
                name: productItem.name,
                image: image,
                price: productItem.price.replace("$", ""),
                quantity: quantity || 1, // Default quantity to 1 if not provided
            });
        }

        // Save the updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        console.log("Cart updated:", existingCart);
    };





    return (
        <div className="container mx-auto mt-10">
            <div className="mx-10 border shadow rounded-md flex">
                <div className="w-[40vw] p-5">
                     <Swiper style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}

                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2">

                        {Object.values(productItem.images)[color]?.map((image, index) => (
                            <SwiperSlide  key={index} >
                                <img src={image} alt={productItem.name} className="w-full object-cover"/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {Object.values(productItem.images)[color]?.map((image, index) => (
                            <SwiperSlide  key={index} >
                                <img src={image} alt={productItem.name} className="w-full object-cover"/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="w-full">
                    <h1 className="text-3xl font-bold pt-10 ">{productItem.name}</h1>
                    <p className="text-gray-500">{productItem.type}</p>
                    <div className="my-3">
                        {productItem.images && Object.keys(productItem.images).length > 1 ? (
                            <div className="flex gap-2">
                                {Object.keys(productItem.images).map((c, index) => (
                                    <div key={index} className={`border p-2 rounded-md cursor-pointer 
                                    ${color === index ? "bg-blue-200" : ""}`}
                                         onClick={() => setColor(index)}>
                                        <img src={Object.values(productItem.images)[index][0]} alt={productItem.name}
                                             className="w-20 rounded-md h-20 "/>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </div>
                    <p className=" font-bold text-lg pt-3">Price: {productItem.price}</p>
                    <p className="text-gray-500 my-3">
                        Sizes:
                        {Object.values(productItem.sizes)[color]?.map((size, index) => (
                            <span key={index} className="px-2 py-1 mx-1 border rounded-md">
                                {size}
                            </span>
                        ))}
                    </p>

                    <p> Description : {productItem.description}</p>

                    <label className="block mt-5">Quantity: &nbsp;
                    <input type="number" className="border rounded-md w-20 p-2 mt-5" defaultValue={1}
                            onChange={(e) => setQuantity(+e.target.value)} />
                    </label>

                    <button className="bg-blue-500 text-white px-3 py-2 rounded-md mt-5 hover:bg-blue-700"
                            onClick={addToCart}>
                        Add to Cart
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ProductDetailsPage
