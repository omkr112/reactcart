import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cartTile";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {cart && cart.length ? (
        <>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-10">
            <div className="flex-1 bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
                <FaShoppingCart className="text-3xl text-indigo-500" />
              </div>
              <div>
                {cart.map((cartItem) => (
                  <CartTile cartItem={cartItem} key={cartItem.id} />
                ))}
              </div>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              <div className="space-y-4">
                <p className="text-gray-700 font-semibold">
                  <span className="text-gray-800">Total Items:</span> {cart.length}
                </p>
                <p className="text-gray-700 font-semibold">
                  <span className="text-gray-800">Total Amount:</span> ${totalCart.toFixed(2)}
                </p>
              </div>
              <div className="mt-8">
                <Link to="/checkout">
                  <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <FaShoppingCart className="text-6xl text-gray-400 mb-6" />
          <h1 className="text-gray-800 font-bold text-2xl mb-4">Your cart is empty</h1>
          <Link to="/">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}