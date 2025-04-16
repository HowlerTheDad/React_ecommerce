import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AllCatagory } from "../sharableComp/filters/AllCatagory";
import { PriceFilter } from "../sharableComp/filters/PriceFilter";
import { ProductContainer } from "../sharableComp/ProductContainer";

export const Catagory = ({ searchQuery }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const location = useLocation();

    useEffect(() => {
        console.log("Location State:", location.state); // Debugging
        if (location.state?.selectedSubcategory) {
            setSelectedSubcategory(location.state.selectedSubcategory);
        }
        if (location.state?.selectedCategory) {
            setSelectedCategory(location.state.selectedCategory);
        }
    }, [location.state]);

    return (
        <section id="home" className="min-h-screen flex flex-col items-center relative pt-25">
            <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6">
                {/* Filters Section */}
                <div className="w-full md:w-1/4 space-y-4">
                    <AllCatagory onSelectCategory={(category) => {
                        setSelectedCategory(category.category);
                        setSelectedSubcategory(category.subcategory);
                    }} />
                    <PriceFilter />
                </div>

                {/* Product Container Section */}
                <div className="w-full md:w-3/4">
                    <ProductContainer
                        selectedCategory={selectedCategory}
                        selectedSubcategory={selectedSubcategory}
                        searchQuery={searchQuery} // Pass searchQuery here
                    />
                </div>
            </div>
        </section>
    );
};