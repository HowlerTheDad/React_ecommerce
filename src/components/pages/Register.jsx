import { useState } from "react";
export const Register = ({ onClose }) => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        newpassword: "",
        confirmpassword: "",
        address: "",
        phoneNumber: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <div className="glassy-backdrop fixed inset-0 flex justify-center items-center z-50">
            <section className="bg-gray-800 text-white border border-white/10 shadow-lg rounded-xl p-8 w-[90%] max-w-md">

                <form onSubmit={handleSubmit} onChange={onChange}>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label htmlFor="newpassword" className="block text-sm font-medium mb-1">
                        New Password
                    </label>
                    <input
                        type="password"
                        id="newpassword"
                        value={formData.newpassword}
                        className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label htmlFor="confirmpassword" className="block text-sm font-medium mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmpassword"
                        value={formData.confirmpassword}
                        className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label htmlFor="address" className="block text-sm font-medium mb-1">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        value={formData.address}
                        className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">
                        Phone Number
                    </label>
                    <input
                        type="number"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <p>
                    <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
                    >
                        SIGN UP
                    </button>
                    </div>
                    
                        <div>
                        <button
                            onClick={onClose}
                            className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all"
                        >
                            Close
                        </button>
                        </div>
                    </p>
                    
                </form>
            </section>
        </div>
    );
}

