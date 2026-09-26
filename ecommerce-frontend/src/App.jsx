import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import ProductList from './pages/ProductList';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <header className="bg-white shadow-sm py-4 px-8 sticky top-0 z-10">
            <h1 className="text-2xl font-bold text-indigo-600">Online Shopping</h1>
          </header>
          
          <main className="flex-grow container mx-auto px-4">
            <Routes>
              <Route path="/" element={<ProductList />} />
              {/* We will add more routes here soon */}
            </Routes>
          </main>
          
          <footer className="bg-gray-800 text-white py-6 text-center">
            <p>&copy; 2026 Online Shopping System. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
