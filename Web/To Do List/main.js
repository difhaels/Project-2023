const ITEMS = document.getElementById("items");
const TEMPLATE = document.getElementById("template");
const ADD = document.getElementById("add");

let itemss = getItems();

function getItems() {
  const value = localStorage.getItem("todo") || "[]";

  return JSON.parse(value);
}

console.log(itemss);
