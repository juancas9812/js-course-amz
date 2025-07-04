export let cart;

loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2'
      }
    ];
  }
}



function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  const selectorItem = document.querySelector(`.js-quantity-selector-${productId}`);
  let quantity = 1;
  if (selectorItem){
    quantity = Number(selectorItem.value);
  }

  if (matchingItem) {
    matchingItem.quantity+=quantity
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId: '1'
    })
  }

  saveToStorage();
}


export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem)
    }
  })

  cart=newCart;

  saveToStorage();
}

export function calculateCartQuantity() {
  let cartQuantity=0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
}


export function updateQuantity(productId, newQuantity){
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity=newQuantity;
  }
  saveToStorage();
}


export function updateDeliveryOption(productId, deliveryOptionId){
  if (!deliveryOptionId) {
    return;
  }
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if( matchingItem ) {
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
  }
}


export function loadCart(fun) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    fun();
  });
  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send()
}


export async function loadCartFetch() {
  const request = await fetch('https://supersimplebackend.dev/cart');
  const response = await request.text();
  console.log(response);
  return response;
}


export function emptyCart() {
  cart = [];
  saveToStorage();
}

export function addToCartFromPrevious(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  const selectorItem = document.querySelector(`.js-order-quantity-${productId}`);
  let quantity = 1;
  if (selectorItem){
    quantity = Number(selectorItem.value);
  }

  if (matchingItem) {
    matchingItem.quantity+=quantity
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId: '1'
    })
  }

  saveToStorage();
}