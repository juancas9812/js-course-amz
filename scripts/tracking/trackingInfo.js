import { getProduct } from "../../data/products.js";
import { getOrder } from "../../data/order.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"

export async function renderTrackingPage() {
  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');
  const order = getOrder(orderId);
  const productId = url.searchParams.get('productId');
  const product = await getProduct(productId);
  const orderProduct = getTrackedProduct(productId,order);
  const deliveryTime = formatTrackingDate(orderProduct.estimatedDeliveryTime);

  let trackingHTML = `
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      Arriving on ${deliveryTime}
    </div>

    <div class="product-info">
      ${product.name}
    </div>

    <div class="product-info">
      Quantity: ${orderProduct.quantity}
    </div>

    <img class="product-image" src="${product.image}">

    <div class="progress-labels-container">
      <div class="progress-label">
        Preparing
      </div>
      <div class="progress-label current-status">
        Shipped
      </div>
      <div class="progress-label">
        Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div class="progress-bar"></div>
    </div>
  `
  document.querySelector('.js-order-tracking').innerHTML = trackingHTML;
}


function formatTrackingDate(trackingDate) {
  return dayjs(trackingDate).format('dddd, MMMM D');
}

function getTrackedProduct(productId, order){
  let matchingProduct;
  order.products.forEach((orderProduct) => {
    if (productId === orderProduct.productId) {
      matchingProduct = orderProduct;
    }
  });
  return matchingProduct;
}