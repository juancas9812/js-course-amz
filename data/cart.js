export const cart = [];


export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  const selectorItem = document.querySelector(`.js-quantity-selector-${productId}`);
  let quantity = Number(selectorItem.value);

  if (matchingItem) {
    matchingItem.quantity+=quantity
  } else {
    cart.push({
      productId,
      quantity
    })
  }
}