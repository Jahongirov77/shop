import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({
    category: '',
    price: 'all'
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initial filtered products
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    filterProducts();
  }, [filter, products]);

  const filterProducts = () => {
    let filtered = products;

    if (filter.category) {
      filtered = filtered.filter(product => product.category === filter.category);
    }

    if (filter.price !== 'all') {
      const priceRange = filter.price === 'low' ? [0, 50] : [51, 100];
      filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    }

    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (e) => {
    setFilter({ ...filter, category: e.target.value });
  };

  const handlePriceChange = (e) => {
    setFilter({ ...filter, price: e.target.value });
  };

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <label htmlFor="category" className="text-lg font-medium text-gray-700">Category:</label>
            <select id="category" value={filter.category} onChange={handleCategoryChange} className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              <option value="">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="price" className="text-lg font-medium text-gray-700">Price:</label>
            <select id="price" value={filter.price} onChange={handlePriceChange} className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              <option value="all">All</option>
              <option value="low">Under $50</option>
              <option value="high">$50 and above</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/SingleProduct/${product.id}`} className="block">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-transform transform hover:scale-105">
                <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                  <p className="text-gray-700 text-base">{product.description}</p>
                </div>
                <div className="px-6 py-4 border-t border-gray-200">
                  <span className="block font-semibold text-gray-800">Price: ${product.price}</span>
                  <span className="block text-sm text-gray-600">Category: {product.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
