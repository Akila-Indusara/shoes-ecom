
const ProductCard = (product) => {
    return (
        <>
            <div className="mx-auto shadow rounded-md p-3 w-[300px] border hover:scale-105 transition-transform hover:shadow-blue-500">
                {product && product.product.images ? (
                    (() => {
                        // Get the first image from the first color
                        const firstImage = Object.values(product.product.images)[0]?.[0];

                        if (firstImage) {
                            return (
                                <img
                                    className="h-[300px] w-full object-cover"
                                    src={firstImage}
                                    alt={product.product.name}
                                />
                            );
                        } else {
                            return <p>No image available.</p>;
                        }
                    })()
                ) : (
                    <p>Product information is unavailable.</p>
                )}
                <h2 className="text-2xl font-black pt-2">
                    {product.product.name.length > 18
                        ? `${product.product.name.slice(0, 18)}...`
                        : product.product.name
                    }
                </h2>
                <p className="text-gray-500">{product.product.type}</p>
                <p className="text-gray-500">{Object.keys(product.product.sizes).length} colors</p>
                <p>{product.product.price}</p>
            </div>


        </>
    )
}

export default ProductCard
