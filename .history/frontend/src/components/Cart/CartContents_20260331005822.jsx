import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../redux/slices/cartSlice";

const CartContents = ({ cart, userId, guestId }) => {
  // const cartProducts = [
  //   {
  //     productId: 1,
  //     name: "T-shirt",
  //     size: "M",
  //     color: "Red",
  //     quantity: 1,
  //     price: 15,
  //     image: "https://picsum.photos/200?random=1",
  //   },
  //   {
  //     productId: 2,
  //     name: "Jeans",
  //     size: "L",
  //     color: "Blue",
  //     quantity: 1,
  //     price: 25,
  //     image: "https://picsum.photos/200?random=2",
  //   },
  // ];

  const dispatch = useDispatch();
  console.log("cart", cart);
  console.log("userId", userId);
  console.log("guestId", guestId);
  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          size,
          color,
        }),
      );
    }
  };

  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeFromCart({ productId, guestId, userId, size, color }));
  };

  return (
    <div>
      {cart.products.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b border-gray-200"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover mr-4"
            />
            <div>
              <h3 className="text-gray-700">{product.name}</h3>
              <p className="text-sm text-gray-500 font-light">
                Size: {product.size}
              </p>
              <p className="text-sm text-gray-500 font-light">
                Color: {product.color}
              </p>
              <div className="flex items-center mt-2 border overflow-hidden w-fit border-gray-300">
                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      -1,
                      product.quantity,
                      product.size,
                      product.color,
                    )
                  }
                  className="px-3 py-1 text-lg font-light  cursor-pointer"
                >
                  -
                </button>

                <span className="px-4 py-1 border-x border-gray-300 font-light ">{product.quantity}</span>

                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      +1,
                      product.quantity,
                      product.size,
                      product.color,
                    )
                  }
                  className="px-3 py-1 text-lg font-light cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>$ {product.price.toLocaleString()}</p>
            <button
              onClick={() =>
                handleRemoveFromCart(
                  product.productId,
                  product.size,
                  product.color,
                )
              }
            className="text-sm font-light text-gray-400 mt-2 cursor-pointer">
             Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
