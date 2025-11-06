import { useEffect, useState } from "react";
import ProductListContainer from "./ProductListContainer";
import Tabs from "./Tabs";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    useEffect(() => {
        fetch('/public/Products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                const uniqueCategories = [...new Set(data.products.map(product => product.category).filter(Boolean))];
                setCategories(uniqueCategories);
            });
    }, []);

    // Filter products based on selected category
    const filteredProducts = selectedCategory === "All Products"
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div id="product-list-container" className="pt-44 md:pt-64">
            <div>
                <div className="text-center pb-7">
                    <h2 className="text-2xl lg:text-3xl md:text-3xl font-bold">Explore Cutting-Edge Gadgets</h2>
                </div>
                <div className="flex w-[75%] lg:w-[95%] flex-row-reverse gap-9 mt-9">
                    <div className="grid w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProducts.map((product, idx) => (
                            <ProductListContainer product={product} key={idx} />
                        ))}
                    </div>
                    <div className="w-[20%] pl-3 flex flex-col gap-2">
                        <button
                            className={`p-2 rounded-2xl w-full text-left font-semibold ${selectedCategory === "All Products" ? "bg-fuchsia-600 text-white" : "bg-gray-200"}`}
                            onClick={() => setSelectedCategory("All Products")}
                        >
                            All Products
                        </button>
                        {categories.map((cate, idx) => (
                            <Tabs
                                key={idx}
                                cate={cate}
                                active={selectedCategory === cate}
                                onClick={() => setSelectedCategory(cate)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;