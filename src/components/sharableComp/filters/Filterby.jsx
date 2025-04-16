import { useState } from 'react';

export const Filterby = () => {
  const [isFilterOpen, setFilterOpen] = useState(true);

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <section id="filterby">
        <h3 className=" hover:text-blue-500 flex justify-between w-full text-xl font-semibold mb-2 cursor-pointer" onClick={toggleFilter}>
          All Filters
          <span className="ml-2">{isFilterOpen ? '▲' : '▼'}</span>
        </h3>
        {isFilterOpen && (
          <ul className="space-y-2">
            <li><a href="#" className=" hover:text-blue-500">New Arrivals</a></li>
            <li><a href="#" className=" hover:text-blue-500">Bestsellers</a></li>
            <li><a href="#" className=" hover:text-blue-500">With Discount</a></li>
            <li><a href="#" className=" hover:text-blue-500">In Stock</a></li>
            <li><a href="#" className=" hover:text-blue-500">Out Of Stock</a></li>
          </ul>
        )}
      </section>
    </>
  );
};
