import { orders, formatOrderDate } from "../../data/order.js";
import formatCurrency from "../utils/money.js";
import { products, getProduct } from "../../data/products.js";
import { addToCartFromPrevious } from "../../data/cart.js";
import { renderOrderHeader } from "./ordersHeader.js";


export function renderOrderGrid() {
  let orderPageHTML = '';

  orders.forEach((order) => {
    const orderDate = formatOrderDate(order.orderTime);
    const orderTotal = formatCurrency(order.totalCostCents);
    const orderId = order.id;
    orderPageHTML += `
      <div class="order-container">

          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${orderDate}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$${orderTotal}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${orderId}</div>
            </div>
          </div>
          <div class="order-details-grid js-order-details-grid-${orderId}">
          </div>
        </div>
    `
  });
  document.querySelector('.js-orders-grid').innerHTML=orderPageHTML;
  orders.forEach((order) => {
    renderOrderDetails(order.products, order.id);
  });
  document.querySelectorAll('.js-buy-again-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCartFromPrevious(productId);
      renderOrderHeader();
    });
  });
}


function renderOrderDetails(orderProducts,orderId) {
  let productsHTML = '';
  orderProducts.forEach((product) => {
    const matchingProduct = getProduct(product.productId);
    const deliveryDate = formatOrderDate(product.estimatedDeliveryTime);

    productsHTML += `
      <div class="product-image-container">
        <img src="${matchingProduct.image}">
      </div>

      <div class="product-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-delivery-date">
          Arriving on: ${deliveryDate}
        </div>
        <div class="product-quantity">
          Quantity: ${product.quantity}
        </div>
        <button class="buy-again-button button-primary js-buy-again-button js-buy-again-button-${product.productId}" data-product-id = ${product.productId}>
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
        </button>
      </div>

      <div class="product-actions">
        <a href="tracking.html?orderId=${orderId}&productId=${product.productId}">
          <button class="track-package-button button-secondary">
            Track package
          </button>
        </a>
      </div>
    `
    document.querySelector(`.js-order-details-grid-${orderId}`).innerHTML=productsHTML;
  });
  

}