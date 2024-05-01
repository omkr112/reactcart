import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cartSlice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-4 mb-4 shadow-md">
      <div className="flex items-center flex-grow">
        <img
          src={cartItem?.image}
          className="h-24 w-24 rounded-lg object-cover"
          alt={cartItem?.title}
        />
        <div className="ml-6">
          <h1 className="text-xl font-bold">{cartItem?.title}</h1>
          <p className="text-gray-200 font-semibold">Price: ${cartItem?.price}</p>
        </div>
      </div>
      <div className="ml-4">
        <button
          onClick={handleRemoveFromCart}
          className="bg-white text-indigo-500 hover:bg-indigo-100 font-semibold py-2 px-4 rounded-md transition-colors duration-300 shadow-md"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
}