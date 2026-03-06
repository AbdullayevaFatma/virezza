const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => {
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img src={product.image} alt={product.name} className="w-20 h-24"/>
          </div>
        </div>;
      })}
    </div>
  );
};

export default CartContents;
