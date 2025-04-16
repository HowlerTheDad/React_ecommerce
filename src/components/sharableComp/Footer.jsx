import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faPaypal, faTelegram } from "@fortawesome/free-brands-svg-icons"
export const Footer = () => {
    return (
        <>
            <footer className="border-t border-white/10 shadow-lg ">
                <div className="flex flex-col md:flex-row justify-around p-5 gap-6">
                    <div>
                        <a href="#home" className="font-mono text-xl font-bold">
                            E_<span className="text-blue-500">Come</span>
                        </a>
                        <ul className="space-y-1">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="cart" className="hover:underline">Your Cart</a></li>
                            <li><a href="catagory" className="hover:underline">Catagory</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Privacy</h2>
                        <ul className="space-y-1">
                            <li><a href="terms.html" className="hover:underline">Terms and Conditions</a></li>
                            <li><a href="privacy.html" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Know More</h2>
                        <ul className="space-y-1">
                            <li><a href="aboutus.html" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Google Map</a></li>
                            <li><a href="faq.html" className="hover:underline">FAQs</a></li>
                            <li><a href="teams.html" className="hover:underline">Teams</a></li>
                            <li><a href="contact.html" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Contact with us</h2>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#">
                                <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600 hover:text-blue-800"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTelegram} size="2x" className="text-blue-600 hover:text-blue-800"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faPaypal} size="2x" className="text-blue-600 hover:text-blue-800"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}