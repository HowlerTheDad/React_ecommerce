import { Link } from "react-router-dom";
export const HeroSection = () => {
    return (
        <>
            <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-16">

                <div className=" w-[90%] flex items-center justify-around p-6">
                    <div className="text-center ">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                            Welcome to E-COM
                        </h1>
                        <h2>
                            WITH US YOU CAN SHOP ONLINE AND HELP SAVE YOUR HIGH STREET AT THE SAME TIME
                        </h2>
                        <br />
                        <Link 
                        to="/catagory"
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                                       hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                        >
                        Explore Items→
                        </Link>
                    </div>
                    <div>
                        <img src="bags.png" alt="" className="size-100 rounded-xl" />
                    </div>
                </div>
                
            </section>
        </>
    );
}