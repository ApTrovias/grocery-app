export const addToCart = (product, cartItems, setCartItems) => {
  const existingProductIndex = cartItems.findIndex(
    (item) => item.id === product.id
  );

  if (existingProductIndex !== -1) {
    const updatedCartItems = [...cartItems];
    updatedCartItems[existingProductIndex].quantity += 1;
    updatedCartItems[existingProductIndex].price += product.price;
    setCartItems(updatedCartItems);
  } else {
    const newCartItem = {
      ...product,
      quantity: 1,
      price: Number(product.price.toFixed(2)),
    };
    setCartItems([...cartItems, newCartItem]);
  }
};
