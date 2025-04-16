import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMoon, faCartShopping, faSun } from '@fortawesome/free-solid-svg-icons';
import { Login } from '../pages/login';

export const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const [searchText, setSearchText] = useState('');
    const [showLogin, setShowLogin] = useState(false);
    const [categories, setCategories] = useState([]); // State for categories and subcategory
    const [filteredCategories, setFilteredCategories] = useState([]); // Filtered results
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route location

    // Fetch categories and subcategory dynamically
    useEffect(() => {
        fetch('/all_categories_api.json')
            .then((res) => res.json())
            .then((data) => {
                const categoryList = data.map((item) => ({
                    category: item.category,
                    subcategory: item.subcategory || '', // Handle subcategory as a string
                }));
                console.log("Fetched Categories:", categoryList); // Debugging
                setCategories(categoryList);
            })
            .catch((err) => console.error('Failed to fetch categories:', err));
    }, []);

    // Clear search bar and dropdown on route change
    useEffect(() => {
        setSearchText('');
        setFilteredCategories([]);
    }, [location]); // Triggered whenever the route changes

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchText(value);

        if (value.length > 0) {
            const filtered = categories
                .filter((item) =>
                    item.subcategory.toLowerCase().includes(value.toLowerCase())
                )
                .map((item) => item.subcategory); // Extract subcategory strings
            console.log("Filtered Subcategories:", filtered); // Debugging
            setFilteredCategories([...new Set(filtered)].slice(0, 5)); // Remove duplicates and limit to 5
        } else {
            setFilteredCategories([]);
        }
    };

    const handleCategorySelect = (subcategory) => {
        console.log("Selected Subcategory:", subcategory); // Debugging
        setSearchText(subcategory); // Set the selected subcategory in the search bar
        setFilteredCategories([]); // Clear the dropdown
        navigate('/catagory', { state: { selectedSubcategory: subcategory } }); // Redirect with the selected subcategory
    };

    useEffect(() => {
        const rootElement = document.getElementById('root');
        if (darkMode) {
            rootElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            rootElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-full mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="font-mono text-xl font-bold">
                        E_<span className="text-blue-500">Come</span>
                    </Link>
                    <div className="links hidden md:flex items-center space-x-8">
                        <Link to="/" className="hover:text-blue-500 transition-colors">
                            Home
                        </Link>
                        <Link to="/catagory" className="hover:text-blue-500 transition-colors">
                            Catagory
                        </Link>
                        <Link to="/contact" className="hover:text-blue-500 transition-colors">
                            Contact Us
                        </Link>
                        <button onClick={() => setShowLogin(true)} className="cursor-pointer hover:text-blue-500 transition-colors">
                            Login
                        </button>
                    </div>
                    <div className="h-13 flex gap-5 items-center relative">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleSearchChange}
                                className="h-full bg-gray-300 dark:bg-gray-900 placeholder-black dark:placeholder-gray-400 rounded px-2 py-1 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Search subcategory..."
                            />
                            
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                                style={{ fontSize: "20px" }}
                            />
                            {filteredCategories.length > 0 && (
                                <ul className="absolute top-full left-0 w-full glassy-backdrop mt-2 rounded shadow-lg z-50">
                                    {filteredCategories.map((sub, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 text-sm cursor-pointer"
                                            onClick={() => handleCategorySelect(sub)}
                                        >
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button onClick={() => setDarkMode(!darkMode)} className='w-5'>
                            <FontAwesomeIcon
                                icon={darkMode ? faSun : faMoon}
                                className="hover:text-blue-500 transition-colors"
                                style={{ fontSize: '30px' }}
                            />
                        </button>
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className="hover:text-blue-500 transition-colors"
                            style={{ fontSize: '30px' }}
                        />
                    </div>
                    {showLogin && (
                        <div className="fixed inset-0 w-screen h-screen glassy-backdrop z-50">
                            <div className="flex justify-center items-center h-full">
                                <Login onClose={() => setShowLogin(false)} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};