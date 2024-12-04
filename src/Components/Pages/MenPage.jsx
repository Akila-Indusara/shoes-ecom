import products from "../../assets/mens.json";
import ProductCard from "../ProductCard.jsx";
import {useEffect, useRef, useState} from "react";
import {MdKeyboardArrowDown} from "react-icons/md";
import Filter from "../Filter.jsx";
import {FaFilter, FaTimes} from "react-icons/fa";

function MenPage() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref to the dropdown element

    const [price, setPrice] = useState([]);
    const [brand, setBrand] = useState([]);
    const [type, setType] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sortedProducts, setSortedProducts] = useState();
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState("Name ( A - Z )");

    useEffect(() => {
        const sortAndFlattenProducts = (data, sortBy) => {
            // Flatten and sort the products
            const flattenedProducts = Object.values(data).flatMap(brandGroup =>
                Object.values(brandGroup).flat()
            );

            return flattenedProducts.sort((a, b) => {
                if (sortBy === "Name ( A - Z )") {
                    return a.name.localeCompare(b.name);
                } else if (sortBy === "Name ( Z - A )") {
                    return b.name.localeCompare(a.name);
                } else if (sortBy === "Price ( Low - High )") {
                    return parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
                } else if (sortBy === "Price ( High - Low )") {
                    return parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""));
                }
                return 0; // Default: no sorting
            });
        };

        setSortedProducts(sortAndFlattenProducts(filteredProducts, sort));
        setLoading(false);

    }, [sort, filteredProducts]);


    //filter products-------------------
    // Update filtered products whenever the brand selection changes
    useEffect(() => {
        let finalFiltered =[];

        // Filter products based on selected price range
        const priceFilter = (p) => {
            for (const range of price) {
                let min, max;
                if (range.includes("over-")) {
                    // Handle "above X" case
                    min = parseFloat(range.replace("over-", ""));
                    max = Infinity; // No upper limit
                } else {
                    // Handle regular range case (e.g., "100-300")
                    [min, max] = range.split("-").map(Number);
                }

                const currentRangeFiltered = p.map((brandObj) => {
                    const filteredBrand = {};
                    for (const [brandName, items] of Object.entries(brandObj)) {
                        const filteredItems = items.filter((item) => {
                            const itemPrice = parseFloat(item.price.replace("$", ""));
                            return itemPrice >= min && itemPrice <= max;
                        });
                        if (filteredItems.length > 0) {
                            filteredBrand[brandName] = filteredItems;
                        }
                    }
                    return Object.keys(filteredBrand).length > 0 ? filteredBrand : null;
                }).filter(Boolean);

                finalFiltered = finalFiltered.concat(currentRangeFiltered);
            }
        }

        // Filter products based on selected types
        const typeFilter = () => {
            if (type.length !== 0) {
                // Filter products based on selected types
                finalFiltered = finalFiltered.map((brandObj) => {
                    const filteredBrand = {};
                    for (const [brandName, items] of Object.entries(brandObj)) {
                        const filteredItems = items.filter((item) => type.includes(item.type));
                        if (filteredItems.length > 0) {
                            filteredBrand[brandName] = filteredItems;
                        }
                    }
                    return Object.keys(filteredBrand).length > 0 ? filteredBrand : null;
                }).filter(Boolean);
            }
        }

        // Check if any brands are selected
        if (brand.length === 0) {
            // Show all products if no brands are selected
            if (price.length === 0) {
                finalFiltered = products;
            } else {
                // Filter products based on selected price range
                priceFilter(products);
            }

            typeFilter();
        }
        else {
            // Filter products based on selected brands
            let brandFiltered = products
                .map((brandObj) => {
                    const filteredBrand = {};
                    for (const [brandName, items] of Object.entries(brandObj)) {
                        // Check if the current brand is selected
                        if (brand.includes(brandName)) {
                            filteredBrand[brandName] = items;
                        }
                    }
                    return Object.keys(filteredBrand).length > 0 ? filteredBrand : null;
                })
                .filter(Boolean); // Remove nulls


            if (price.length !== 0) {
                if (brandFiltered.length !== 0) {
                    priceFilter(brandFiltered);
                }
            } else {
                finalFiltered = brandFiltered;
            }

            typeFilter();
        }
        setFilteredProducts(finalFiltered);
    }, [brand, type, price]);


    // dropdown -------------------
    const handleDropdownClick = (option) => {
        setSort(option);
        setIsDropDownOpen(false); // Close the dropdown after selection
    };

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };

    // Function to close the dropdown when clicking outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropDownOpen(false); // Close dropdown if clicked outside
        }
    };

    // Add event listener to detect clicks outside
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const filterClick = () => {
        setFilterOpen(!filterOpen);
    };

    let numberOfProducts = 0;


    return (
        <div className="container px-2 md:px-10 mx-auto">
            <div className="flex mx-auto">

                {/*Filter*/}
                <div className="hidden lg:block lg:mt-10 sticky top-0 h-screen overflow-auto min-w-[200px]">
                    <Filter type={type} brand={brand} price={price} setBrand={setBrand} setPrice={setPrice} setType={setType} />
                </div>


                {/*products*/}
                <div className="w-full">
                    <div className="lg:flex justify-between items-center pb-2 border-b-2">
                        <div className="flex items-end">
                            <h1 className="text-3xl font-black pl-5 pt-10"> Men&#39;s Shoes </h1>
                            <div className="text-gray-600 pl-2 pt-10">
                                {/* Count the products */}
                                {filteredProducts.map(brand =>
                                    Object.keys(brand).map(brandName =>
                                        brand[brandName].forEach(() => {
                                            numberOfProducts += 1;
                                        })
                                    )
                                )}
                                {numberOfProducts} products
                            </div>
                        </div>

                        {/*sort by*/}
                        <div className="pt-3 lg:pt-10 lg:flex items-center">
                            Sort by: &nbsp;
                            <div className=" max-lg:pt-2 relative w-[200px] select-none" ref={dropdownRef}>
                                {/* Dropdown button */}
                                <div onClick={toggleDropdown} className={`cursor-pointer appearance-none p-2 pr-4 pl-6 border-2
                            ${isDropDownOpen ? "rounded-t-3xl" : "rounded-full"}  bg-white w-full flex justify-between items-center`}>
                                    <span>{sort}</span>
                                    {/* Custom dropdown arrow */}
                                    <MdKeyboardArrowDown/>
                                </div>
                                {/*dropdown */}
                                {isDropDownOpen && (
                                    <ul className="absolute left-0  w-full bg-white border-2 border-t-0  rounded-b-3xl shadow-lg z-10">
                                        <li onClick={() => handleDropdownClick("Name ( A - Z )")}
                                            className="cursor-pointer px-4 py-2 hover:bg-blue-100">
                                            Name ( A - Z )
                                        </li>
                                        <li onClick={() => handleDropdownClick("Name ( Z - A )")}
                                            className="cursor-pointer px-4 py-2 hover:bg-blue-100">
                                            Name ( Z - A )
                                        </li>
                                        <li onClick={() => handleDropdownClick("Price ( Low - High )")}
                                            className="cursor-pointer px-4 py-2 hover:bg-blue-100">
                                            Price ( Low - High )
                                        </li>
                                        <li onClick={() => handleDropdownClick("Price ( High - Low )")}
                                            className="cursor-pointer px-4 py-2 hover:bg-blue-100">
                                            Price ( High - Low )
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>


                        <div onClick={filterClick} className="p-3 flex items-center font-black lg:hidden">
                            <FaFilter/> &nbsp;
                            Filter
                        </div>

                        <div className={`fixed left-0 bottom-0 h-full w-full bg-black bg-opacity-50 z-50 
                        transition-transform duration-300 lg:hidden ${filterOpen ? "translate-y-0" 
                            : "translate-y-full"}`}>
                            {/* White container at the bottom */}
                            <div className="absolute bottom-0 bg-white w-full h-3/4 shadow-lg p-6 overflow-y-auto">
                                <button
                                    onClick={filterClick}
                                    className="text-2xl focus:outline-none absolute top-4 right-4"
                                >
                                    <FaTimes/>
                                </button>
                                <Filter type={type} brand={brand} price={price} setBrand={setBrand} setPrice={setPrice} setType={setType} />
                            </div>
                        </div>


                    </div>


                    <div className="flex flex-wrap gap-5 mt-5 justify-center">
                        {loading ? ("Loading...")
                            : (
                                sortedProducts.map(product => (
                                    <div key={product.name}>
                                        <ProductCard product={product} />
                                    </div>
                                ))
                            )}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default MenPage
