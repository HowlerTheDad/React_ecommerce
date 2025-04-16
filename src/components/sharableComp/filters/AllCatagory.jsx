import { useState } from "react";

export const AllCatagory = ({ onSelectCategory }) => {
  const [isAllCategoriesOpen, setAllCategoriesOpen] = useState(false);
  const [isElectronicsOpen, setElectronicsOpen] = useState(false);
  const [isClothingOpen, setClothingOpen] = useState(false);
  const [isBagsOpen, setBagsOpen] = useState(false);
  const [isGroceriesOpen, setGroceriesOpen] = useState(false);
  const [isHomeAppliancesOpen, setHomeAppliancesOpen] = useState(false);
  const [isBeautyHealthOpen, setBeautyHealthOpen] = useState(false);
  const [isSportsOutdoorsOpen, setSportsOutdoorsOpen] = useState(false);

  // Toggle all categories
  const toggleAllCategories = () => {
    setAllCategoriesOpen(!isAllCategoriesOpen);
  };

  // Handle individual category clicks
  const handleCategoryClick = (category, subcategory = null) => {
    onSelectCategory({ category, subcategory }); // Pass both category and subcategory
  };

  return (
    <section id="allCatagory" className="space-y-2">
      <ul className="space-y-2">
        {/* All Categories Button */}
        <li className="relative">
          <button
            onClick={toggleAllCategories}
            className="hover:text-blue-500 flex justify-between w-full"
          >
            <h3 className="text-xl font-semibold mb-2 cursor-pointer">All Categories</h3>
            <span className="ml-2">{isAllCategoriesOpen ? "▲" : "▼"}</span>
          </button>
          <ul className={`ml-4 space-y-1 ${isAllCategoriesOpen ? "block" : "hidden"}`}>
            
            {/* Electronics */}
            <li className="relative">
              <button
                onClick={() => setElectronicsOpen(!isElectronicsOpen )}
                className="hover:text-blue-500 flex justify-between w-full"
              >
                Electronics
                <span className="ml-2">{isElectronicsOpen ? "▲" : "▼"}</span>
              </button>
              <ul className={`ml-4 space-y-1 ${isElectronicsOpen ? "block" : "hidden"}`}>
              <li>
                  <button
                    onClick={() => handleCategoryClick("Electronics")}
                    className="hover:text-blue-400"
                  >
                    Electronics
                  </button>
                </li><li>
                  <button
                    onClick={() => handleCategoryClick("Electronics", "Mobile Phones")}
                    className="hover:text-blue-400"
                  >
                    Mobile Phones
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Electronics", "Laptops")}
                    className="hover:text-blue-400"
                  >
                    Laptops
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Electronics", "Headphones")}
                    className="hover:text-blue-400"
                  >
                    Headphones
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Electronics", "Smart Watches")}
                    className="hover:text-blue-400"
                  >
                    Smart Watches
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Electronics", "Cameras")}
                    className="hover:text-blue-400"
                  >
                    Cameras
                  </button>
                </li>
              </ul>
            </li>

            {/* Clothing */}
            <li className="relative">
              <button
                onClick={() => setClothingOpen(!isClothingOpen)}
                className="hover:text-blue-500 flex justify-between w-full"
              >
                Clothing
                <span className="ml-2">{isClothingOpen ? "▲" : "▼"}</span>
              </button>
              <ul className={`ml-4 space-y-1 ${isClothingOpen ? "block" : "hidden"}`}>
              <li>
                  <button
                    onClick={() => handleCategoryClick("Clothing")}
                    className="hover:text-blue-400"
                  >
                  Clothing
                  </button>
                </li><li>
                  <button
                    onClick={() => handleCategoryClick("Clothing", "Men's Clothing")}
                    className="hover:text-blue-400"
                  >
                    Men's Clothing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Clothing", "Women's Clothing")}
                    className="hover:text-blue-400"
                  >
                    Women's Clothing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Clothing", "Kids' Clothing")}
                    className="hover:text-blue-400"
                  >
                    Kids' Clothing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Clothing", "Accessories")}
                    className="hover:text-blue-400"
                  >
                    Accessories
                  </button>
                </li>
              </ul>
            </li>

            {/* Bags */}
            <li className="relative">
              <button
                onClick={() => setBagsOpen(!isBagsOpen)}
                className="hover:text-blue-500 flex justify-between w-full"
              >
                Bags
                <span className="ml-2">{isBagsOpen ? "▲" : "▼"}</span>
              </button>
              <ul className={`ml-4 space-y-1 ${isBagsOpen ? "block" : "hidden"}`}>
              <li>
                  <button
                    onClick={() => handleCategoryClick("Bags")}
                    className="hover:text-blue-400"
                  >
                   Bags
                  </button>
                </li><li>
                  <button
                    onClick={() => handleCategoryClick("Bags", "Handbags")}
                    className="hover:text-blue-400"
                  >
                    Handbags
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Bags", "Backpacks")}
                    className="hover:text-blue-400"
                  >
                    Backpacks
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Bags", "Travel Bags")}
                    className="hover:text-blue-400"
                  >
                    Travel Bags
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Bags", "Laptop Bags")}
                    className="hover:text-blue-400"
                  >
                    Laptop Bags
                  </button>
                </li>
              </ul>
            </li>

            {/* Groceries */}
            <li className="relative">
              <button
                onClick={() => setGroceriesOpen(!isGroceriesOpen)}
                className="hover:text-blue-500 flex justify-between w-full"
              >
                Groceries
                <span className="ml-2">{isGroceriesOpen ? "▲" : "▼"}</span>
              </button>
              <ul className={`ml-4 space-y-1 ${isGroceriesOpen ? "block" : "hidden"}`}>
              <li>
                  <button
                    onClick={() => handleCategoryClick("Groceries")}
                    className="hover:text-blue-400"
                  >
                    Groceries
                  </button>
                </li><li>
                  <button
                    onClick={() => handleCategoryClick("Groceries", "Fresh Vegetables")}
                    className="hover:text-blue-400"
                  >
                    Fresh Vegetables
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Groceries", "Fruits")}
                    className="hover:text-blue-400"
                  >
                    Fruits
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Groceries", "Dairy Products")}
                    className="hover:text-blue-400"
                  >
                    Dairy Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Groceries", "Snacks")}
                    className="hover:text-blue-400"
                  >
                    Snacks
                  </button>
                </li>
              </ul>
            </li>

            {/* Home Appliances */}
            <li className="relative">
              <button
                onClick={() => setHomeAppliancesOpen(!isHomeAppliancesOpen)}
                className="hover:text-blue-500 flex justify-between w-full"
              >
                Home Appliances
                <span className="ml-2">{isHomeAppliancesOpen ? "▲" : "▼"}</span>
              </button>
              <ul className={`ml-4 space-y-1 ${isHomeAppliancesOpen ? "block" : "hidden"}`}>
              <li>
                  <button
                    onClick={() => handleCategoryClick("Home Appliances")}
                    className="hover:text-blue-400"
                  >
                    Home Appliances
                  </button>
                </li><li>
                  <button
                    onClick={() => handleCategoryClick("Home Appliances", "Refrigerators")}
                    className="hover:text-blue-400"
                  >
                    Refrigerators
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Home Appliances", "Washing Machines")}
                    className="hover:text-blue-400"
                  >
                    Washing Machines
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Home Appliances", "Microwave Ovens")}
                    className="hover:text-blue-400"
                  >
                    Microwave Ovens
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Home Appliances", "Air Conditioners")}
                    className="hover:text-blue-400"
                  >
                    Air Conditioners
                  </button>
                </li>
              </ul>
            </li>

            {/* Beauty & Health */}
            <li className="relative">
              <button
                onClick={() => setBeautyHealthOpen(!isBeautyHealthOpen)}
                className="hover:text-blue-500 flex justify-between w-full"
              >
                Beauty & Health
                <span className="ml-2">{isBeautyHealthOpen ? "▲" : "▼"}</span>
              </button>
              <ul className={`ml-4 space-y-1 ${isBeautyHealthOpen ? "block" : "hidden"}`}>
              <li>
                  <button
                    onClick={() => handleCategoryClick("Beauty & Health")}
                    className="hover:text-blue-400"
                  >
                    Beauty & Health
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Beauty & Health", "Skincare")}
                    className="hover:text-blue-400"
                  >
                    Skincare
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Beauty & Health", "Makeup")}
                    className="hover:text-blue-400"
                  >
                    Makeup
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Beauty & Health", "Haircare")}
                    className="hover:text-blue-400"
                  >
                    Haircare
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Beauty & Health", "Fragrances")}
                    className="hover:text-blue-400"
                  >
                    Fragrances
                  </button>
                </li>
              </ul>
            </li>

            {/* Sports & Outdoors */}
            <li className="relative">
              <button
                onClick={() => setSportsOutdoorsOpen(!isSportsOutdoorsOpen)}
                className="hover:text-blue-500 flex justify-between w-full"
              >
                Sports & Outdoors
                <span className="ml-2">{isSportsOutdoorsOpen ? "▲" : "▼"}</span>
              </button>
              <ul className={`ml-4 space-y-1 ${isSportsOutdoorsOpen ? "block" : "hidden"}`}>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Sports & Outdoors", "Fitness Equipment")}
                    className="hover:text-blue-400"
                  >
                    Fitness Equipment
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Sports & Outdoors")}
                    className="hover:text-blue-400"
                  >
                    Sports & Outdoors
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Sports & Outdoors", "Cycling")}
                    className="hover:text-blue-400"
                  >
                    Cycling
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Sports & Outdoors", "Camping")}
                    className="hover:text-blue-400"
                  >
                    Camping
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Sports & Outdoors", "Outdoor Gear")}
                    className="hover:text-blue-400"
                  >
                    Outdoor Gear
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};