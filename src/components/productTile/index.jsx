import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="group flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="w-40 h-48 overflow-hidden">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h1 className="text-gray-800 font-bold text-lg truncate mb-2">
          {product?.title}
        </h1>
        <div className="flex items-center justify-center w-full mt-4">
          <button
            onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
            className={`${
              isInCart
                ? "bg-red-500 hover:bg-red-600"
                : "bg-indigo-500 hover:bg-indigo-600"
            } text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300`}
          >
            {isInCart ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}