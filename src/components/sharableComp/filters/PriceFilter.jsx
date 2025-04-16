import { useState } from 'react';

export const PriceFilter = () => {
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [sortOption, setSortOption] = useState('low-to-high');
  const [error, setError] = useState('');

  const predefinedRanges = {
    '0-500': { min: 0, max: 500 },
    '500-1200': { min: 500, max: 1200 },
    'more-than-1200': { min: 1200, max: 10000 },
    custom: { min: 0, max: 10000 },
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
    const { min, max } = predefinedRanges[range] || { min: 0, max: 10000 };
    setMinPrice(min);
    setMaxPrice(max);
    setError(''); // Clear any previous error
  };

  const handleCustomRangeChange = (type, value) => {
    const numericValue = parseInt(value, 10);
    if (type === 'min') {
      setMinPrice(numericValue);
      if (numericValue > maxPrice) {
        setError('Min price cannot exceed Max price.');
      } else {
        setError('');
      }
    } else {
      setMaxPrice(numericValue);
      if (numericValue < minPrice) {
        setError('Max price cannot be less than Min price.');
      } else {
        setError('');
      }
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <section id="priceFilter">
      <h3
        className=" hover:text-blue-500 flex justify-between w-full text-xl font-semibold mb-2 cursor-pointer"
        onClick={() => setShowPriceFilter(!showPriceFilter)}
      >
        Price
        <span className="ml-2">{showPriceFilter ? '▲' : '▼'}</span>
      </h3>

      {showPriceFilter && (
        <ul className="space-y-2">
          {/* Predefined Price Ranges */}
          {Object.keys(predefinedRanges).map((range) => (
            <li key={range}>
              <button
                onClick={() => handlePriceRangeChange(range)}
                className={` hover:text-blue-500 ${
                  selectedPriceRange === range ? 'font-semibold' : ''
                }`}
                aria-label={`Select price range ${range}`}
              >
                {range === 'more-than-1200' ? 'More than 1200' : range.replace('-', ' - ')}
              </button>
            </li>
          ))}

          {/* Custom Price Range Slider */}
          {selectedPriceRange === 'custom' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Min: {minPrice}</span>
                <span>Max: {maxPrice}</span>
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                value={minPrice}
                onChange={(e) => handleCustomRangeChange('min', e.target.value)}
                className="w-full"
                aria-label="Set minimum price"
              />
              <input
                type="range"
                min="0"
                max="5000"
                value={maxPrice}
                onChange={(e) => handleCustomRangeChange('max', e.target.value)}
                className="w-full"
                aria-label="Set maximum price"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          )}

          {/* Sorting Option */}
          <li>
            <h4 className="text-lg font-semibold mb-2">Sort by</h4>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="bg-gray-100  p-2 rounded-md w-full"
              aria-label="Sort products by price"
            >
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </li>
        </ul>
      )}
    </section>
  );
};
