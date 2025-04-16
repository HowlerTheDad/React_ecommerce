import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from 'react';
export const BestProduct = () => {
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        fetch("/all_categories_api.json")
            .then((res) => res.json())
            .then((data) => {
                // Get one product per category
                const seen = new Set();
                const unique = [];

                data.forEach((item) => {
                    if (!seen.has(item.category)) {
                        seen.add(item.category);
                        unique.push(item);
                    }
                });

                setCategoryProducts(unique);
            })
            .catch((err) => console.error("Error fetching:", err));
    }, []);

    return (
        <>


            <div className="py-10 px-4">
                <h1 className="text-4xl h-18 md:text-6xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Our Best Selling Products
                </h1>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                    navigation
                    className="w-full"
                >
                    {categoryProducts.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="h-80 w-full p-4 rounded-xl  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-transform duration-300 ease-in-out hover:scale-104 ">
                                <img
                                    src={item.image}
                                    alt={item.category}
                                    className="w-full h-3/4 object-cover rounded-lg"
                                />
                                <h2 className="text-center font-semibold  mt-2 capitalize">
                                    {item.category}
                                </h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    );
}