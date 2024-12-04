import products from "../assets/mens.json";
import PropTypes from "prop-types";

const Filter = ({ price, setPrice, brand, setBrand, type, setType }) => {
    // Handle filter changes
    const handlePriceChange = (event) => {
        const { value } = event.target;
        if (price.includes(value)) {
            // Remove the price if it's already selected
            setPrice(price.filter((item) => item !== value));
        } else {
            // Add the price to the selected list
            setPrice([...price, value]);
        }
    };

    const handleBrandChange = (event) => {
        const { value } = event.target;
        if (brand.includes(value)) {
            // Remove the brand if it's already selected
            setBrand(brand.filter((item) => item !== value));
        } else {
            // Add the brand to the selected list
            setBrand([...brand, value]);
        }
    };

    const handleTypeChange = (event) => {
        const { value } = event.target;
        if (type.includes(value)) {
            // Remove the type if it's already selected
            setType(type.filter((item) => item !== value));
        } else {
            // Add the type to the selected list
            setType([...type, value]);
        }
    }

    return (
        <div className="mr-3 rounded lg:border-2 lg:p-5">
            <p className="text-xl font-black border-b-2 pb-2">Filter</p>

            {/* Price Filter */}
            <div className="border-b-2 pb-2">
                <p className="pt-3 font-bold">Price</p>
                <label className="block">
                    <input type="checkbox" name="price" value="0-50" onChange={handlePriceChange} />
                    <span className="ml-2">$0 - $50</span>
                </label>
                <label className="block">
                    <input type="checkbox" name="price" value="50-100" onChange={handlePriceChange} />
                    <span className="ml-2">$50 - $100</span>
                </label>
                <label className="block">
                    <input type="checkbox" name="price" value="100-150" onChange={handlePriceChange} />
                    <span className="ml-2">$100 - $150</span>
                </label>
                <label className="block">
                    <input type="checkbox" name="price" value="150-200" onChange={handlePriceChange} />
                    <span className="ml-2">$150 - $200</span>
                </label>
                <label>
                    <input type="checkbox" name="price" value="over-200" onChange={handlePriceChange} />
                    <span className="ml-2">Over $200</span>
                </label>
            </div>

            {/* Brand Filter */}
            <div className="border-b-2 pb-2">
                <p className="pt-3 font-bold">Brand</p>
                <div className="p-1">
                    {products.map((brand, index) =>
                        Object.keys(brand).map((brandName) => (
                            <div key={`${brandName}-${index}`}>
                                <label className="block">
                                    <input
                                        type="checkbox"
                                        name="brand"
                                        onChange={handleBrandChange}
                                        value={brandName}
                                    />
                                    <span className="ml-2">{brandName.charAt(0).toUpperCase() + brandName.slice(1)}</span>
                                </label>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Type Filter */}
            <div className="border-b-2 pb-2">
                <p className="pt-3 font-bold">Type</p>
                <div className="p-1">
                    <label className="block">
                        <input type="checkbox" name="type" onChange={handleTypeChange} value="Casual wear" />
                        <span className="ml-2">Casual-wear</span>
                    </label>
                    <label className="block">
                        <input type="checkbox" name="type" onChange={handleTypeChange} value="Sportswear" />
                        <span className="ml-2">Sportswear</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

Filter.propTypes = {
    price: PropTypes.array,
    setPrice: PropTypes.func,
    brand: PropTypes.array,
    setBrand: PropTypes.func,
    type: PropTypes.array,
    setType: PropTypes.func,
};

export default Filter;
