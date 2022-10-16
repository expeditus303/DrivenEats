let food = "";
let beverage = "";
let dessert = "";
let priceFood = 0;
let priceBeverage = 0;
let priceDessert = 0;

let button = document.querySelector(".button");
let buttonActive = document.querySelector("#button");

let checkOut = document.querySelector(".checkOut");

let checkOutFood = document.querySelector("#checkOutFood");
let checkOutFoodPrice = document.querySelector("#checkOutFoodPrice");

let checkOutBeverage = document.querySelector("#checkOutBeverage");
let checkOutBeveragePrice = document.querySelector("#checkOutBeveragePrice");

let checkOutDessert = document.querySelector("#checkOutDessert");
let checkOutDessertPrice = document.querySelector("#checkOutDessertPrice");

let checkOutTotalPrice = document.querySelector("#checkOutTotalPrice");

let totalValue = 0;
let totalValueFloat = 0;

function selectFood(selector) {
  let lastSelected = document.querySelector(".foods .selected");
  if (lastSelected !== null) {
    lastSelected.classList.remove("selected");
  }
  selector.classList.add("selected");

  food = selector.querySelector(".food_name").innerHTML;

  let price = selector
    .querySelector(".food_price")
    .innerHTML.replace("R$ ", "")
    .replace(",", ".");
  priceFood = Number(price);

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function selectBeverage(selector) {
  let lastSelected = document.querySelector(".beverages .selected");
  if (lastSelected !== null) {
    lastSelected.classList.remove("selected");
  }
  selector.classList.add("selected");

  beverage = selector.querySelector(".food_name").innerHTML;

  let price = selector
    .querySelector(".food_price")
    .innerHTML.replace("R$ ", "")
    .replace(",", ".");
  priceBeverage = Number(price);

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function selectDessert(selector) {
  let lastSelected = document.querySelector(".desserts .selected");
  if (lastSelected !== null) {
    lastSelected.classList.remove("selected");
  }
  selector.classList.add("selected");

  dessert = selector.querySelector(".food_name").innerHTML;

  let price = selector
    .querySelector(".food_price")
    .innerHTML.replace("R$ ", "")
    .replace(",", ".");
  priceDessert = Number(price);

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function makeOrder() {
  totalValueFloat = (priceFood + priceBeverage + priceDessert).toFixed(2);

  checkOutFood.innerHTML = food;
  checkOutFoodPrice.innerHTML = `R$ ${priceFood.toFixed(2).replace(".", ",")}`;

  checkOutBeverage.innerHTML = beverage;
  checkOutBeveragePrice.innerHTML = `R$ ${priceBeverage
    .toFixed(2)
    .replace(".", ",")}`;

  checkOutDessert.innerHTML = dessert;
  checkOutDessertPrice.innerHTML = `R$ ${priceDessert
    .toFixed(2)
    .replace(".", ",")}`;

  checkOutTotalPrice.innerHTML = `R$ ${totalValueFloat.replace(".", ",")}`;

  checkOut.classList.remove("hide");
}

function checkOutOk() {
  let name = window.prompt("Por favor, digite o seu nome:");
  let address = window.prompt("Por favor, digite o endereço de entrega:");

  let message = `Olá, gostaria de fazer o pedido:
  - Prato: ${food}
  - Bebida: ${beverage}
  - Sobremesa: ${dessert}
  Total: R$ ${totalValueFloat}
  
  Nome: ${name}
  Endereço: ${address}`;

  let encodeMessage = encodeURIComponent(message);

  window.open("https://wa.me/5548996581772?text=" + encodeMessage);
}

function checkOutCancel() {
  checkOut.classList.add("hide");
}
