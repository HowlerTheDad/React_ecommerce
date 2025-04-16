import { Register } from "./Register";
import { useState } from "react";
export const Login = ({ onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
      };
      const [formData, setFormData] = useState({
        username: "",
        password: ""
        
      });
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginClick = () => {
        setShowRegister(true);
        document.body.classList.add('overflow-hidden'); // Disable scrolling
    };

    const onChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      };

    const closeRegister = () => {
        setShowRegister(false);
        document.body.classList.remove('overflow-hidden'); // Re-enable scrolling
    };
    return (
        <div className="glassy-backdrop fixed inset-0 flex justify-center items-center z-50">
            <section className="bg-gray-800 text-white border border-white/10 shadow-lg rounded-xl p-8 w-[90%] max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit} onChange={onChange}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="button"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
                        >
                            Log In
                        </button>
                    </div>
                    <div className="flex justify-between text-sm">
                        <a href="#" className="text-blue-400 hover:underline">Forgot Password?</a>
                        <button onClick={handleLoginClick} className="cursor-pointer hover:text-blue-500 transition-colors">
                            Register Now!
                        </button>
                    </div>
                </form>
                <button
                    onClick={onClose}
                    className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all"
                >
                    Close
                </button>
                {showRegister && (
                    <div className="fixed inset-0 w-screen h-screen  z-50">
                        <div className="flex justify-center items-center h-full">
                            <Register onClose={closeRegister} />
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};