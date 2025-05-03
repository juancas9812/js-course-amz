import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

export function formatOrderDate(orderDate) {
  return dayjs(orderDate).format('MMMM D');
}

export function getOrder(orderId) {
  let matchingOrder;
  orders.forEach((order) => {
    if (orderId === order.id) {
      matchingOrder = order;
    }
  });
  return matchingOrder;
}


/*

{
    "id": "19f7f810-ab8e-4b7d-a9c7-b1312bb2587c",
    "orderTime": "2025-05-01T23:18:53.183Z",
    "totalCostCents": 5251,
    "products": [
        {
            "productId": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            "quantity": 2,
            "estimatedDeliveryTime": "2025-05-08T23:18:53.183Z",
            "variation": null
        },
        {
            "productId": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            "quantity": 1,
            "estimatedDeliveryTime": "2025-05-04T23:18:53.183Z",
            "variation": null
        }
    ]
}

*/