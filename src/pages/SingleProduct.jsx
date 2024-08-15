import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // React Router uchun

function SingleProduct() {
  const { id } = useParams(); // URL dan ID olish
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
  {product && (
    <div className="max-w-4xl mx-auto h-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-xl rounded-lg overflow-hidden border border-gray-300 flex flex-col lg:flex-row">
      <img className="w-full lg:w-1/2 h-96 object-cover" src={product.image} alt={product.title} />
      <div className="p-6 lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">{product.title}</h2>
          <p className="text-white text-base mb-4 leading-relaxed">{product.description}</p>
          <div className="flex items-center justify-between mb-6">
            <p className="text-4xl font-bold text-white">Price: ${product.price}</p>
            <span className="text-sm text-white opacity-75">Category: {product.category}</span>
          </div>
        </div>
        <button className="w-full bg-green-500 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
          Add to Cart
        </button>
      </div>
    </div>
  )}
</div>

  


  );
}

export default SingleProduct;
