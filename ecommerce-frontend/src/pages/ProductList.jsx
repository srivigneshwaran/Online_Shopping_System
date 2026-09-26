import { useState, useEffect } from 'react';
import api from '../api/axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('products/');
        // Django REST framework usually paginates, so results might be in response.data.results or just response.data
        const data = response.data.results ? response.data.results : response.data;
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products. Is the backend running?');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-10">Loading amazing products...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
      
      {products.length === 0 ? (
        <p className="text-gray-500 text-center">No products found in the database.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {/* Placeholder for image */}
                <span className="text-gray-400 text-4xl">📸</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-indigo-600 font-semibold mb-1">
                  {product.category_name || 'Electronics'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
