import { renderOrderGrid } from "./orders/orderGrid.js";
import { loadProductsFetch } from "../data/products.js";

async function loadPage() {
  try {
    await loadProductsFetch();
  } catch (error) {
    console.log('unexpected error. Please try again later');
  }
  renderOrderGrid();
}

loadPage();