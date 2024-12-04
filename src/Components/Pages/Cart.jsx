import { useState, useEffect } from "react";

function Cart() {
    // State to manage the cart items
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage on component mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
        console.log("Cart loaded:", storedCart);
    }, []);


    // Handle updating the quantity of an item
    const handleQuantityChange = (index, newQuantity) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = newQuantity;
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Handle removing an item from the cart
    const handleRemoveItem = (index) => {
        const updatedCart = cartItems.filter((item, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Calculate the total price of all items in the cart
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (

        <div className="container mx-auto mt-5 px-3">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="border-b flex gap-5 items-center mb-4">
                                <div className="flex items-center min-w-[50vw]">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 m-2 object-cover rounded-md" />
                                    <div>
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-gray-500">Price: ${item.price}</p>
                                    </div>

                                </div>
                                <div className="item-quantity flex items-center">
                                    <button
                                        className="px-2 py-1 bg-gray-300 rounded-l-md"
                                        onClick={() => handleQuantityChange(index, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(index, +e.target.value)}
                                        className="w-12 h-8 text-center border "
                                        min="1"
                                    />
                                    <button
                                        className="px-2 py-1 bg-gray-300 rounded-r-md"
                                        onClick={() => handleQuantityChange(index, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="item-total">
                                    <p>Subtotal: ${item.price * item.quantity}</p>
                                    <button
                                        onClick={() => handleRemoveItem(index)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-summary mt-6">
                        <p className="font-bold">Cart Total: ${getCartTotal()}</p>
                    </div>
                </div>
            )}
        </div>


    );
}

export default Cart;
