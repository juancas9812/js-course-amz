import { loadProductsFetch } from "../data/products.js";
import { renderOrderHeader } from "./orders/ordersHeader.js";
import { renderTrackingPage } from "./tracking/trackingInfo.js";



async function loadPage() {
  try {
    await loadProductsFetch();
  } catch (error) {
    console.log('unexpected error. Please try again later');
  }
  renderOrderHeader();
  renderTrackingPage();
}

loadPage();