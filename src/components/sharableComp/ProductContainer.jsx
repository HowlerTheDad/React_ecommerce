import { useState, useEffect } from "react";

export const ProductContainer = ({ selectedCategory, selectedSubcategory, searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/all_categories_api.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch products:", err);
                setLoading(false);
            });
    }, []);

    // Debugging: Log the searchQuery, selectedCategory, and selectedSubcategory
    console.log("Search Query:", searchQuery);
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Subcategory:", selectedSubcategory);

    const filteredProducts = products.filter((item) => {
        const matchesCategory = selectedCategory
            ? item.category === selectedCategory
            : true;

        const matchesSubcategory = selectedSubcategory
            ? item.subcategory === selectedSubcategory
            : true;

        const matchesSearch = searchQuery
            ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.category.toLowerCase().includes(searchQuery.toLowerCase())
            : true;

        return matchesCategory && matchesSubcategory && matchesSearch;
    });

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading ? (
                <p>Loading...</p>
            ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover mb-2"
                        />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-600">{product.subcategory}</p>
                        <p className="text-blue-600 font-bold">${product.price}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};