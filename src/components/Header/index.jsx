import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-500 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center">
              <h1 className="text-white font-bold text-2xl md:text-3xl tracking-wide">
                REACT SHOPPING CART
              </h1>
            </div>
          </Link>
          <ul className="flex items-center space-x-4 md:space-x-6">
            <Link to="/">
              <li className="text-white font-semibold hover:text-indigo-200 transition-colors duration-300 cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/cart">
              <li className="text-white font-semibold hover:text-indigo-200 transition-colors duration-300 cursor-pointer">
                Cart
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}