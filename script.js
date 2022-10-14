let food1 = document.querySelector("div#food1");
let food2 = document.querySelector("div#food2");
let food3 = document.querySelector("div#food3");

let beverage1 = document.querySelector("div#beverage1");
let beverage2 = document.querySelector("div#beverage2");
let beverage3 = document.querySelector("div#beverage3");

let dessert1 = document.querySelector("div#dessert1");
let dessert2 = document.querySelector("div#dessert2");
let dessert3 = document.querySelector("div#dessert3");

let food = "";
let beverage = "";
let dessert = "";
let priceFood = 0;
let priceBeverage = 0;
let priceDessert = 0;

let button = document.querySelector(".button");
let buttonActive = document.querySelector("#button");

let checkOut = document.querySelector('.checkOut')

let checkOutFood = document.querySelector('#checkOutFood')
let checkOutFoodPrice = document.querySelector('#checkOutFoodPrice')

let checkOutBeverage = document.querySelector('#checkOutBeverage')
let checkOutBeveragePrice = document.querySelector('#checkOutBeveragePrice')

let checkOutDessert = document.querySelector('#checkOutDessert')
let checkOutDessertPrice = document.querySelector('#checkOutDessertPrice')

let checkOutTotalPrice = document.querySelector('#checkOutTotalPrice')

let totalValue = 0;
let totalValueFloat = 0;

function selectFood1() {
  food1.classList.add("selected");
  food2.classList.remove("selected");
  food3.classList.remove("selected");

  food = "Frango Yin Yang";
  priceFood = 14.90;

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function selectFood2() {
  food1.classList.remove("selected");
  food2.classList.add("selected");
  food3.classList.remove("selected");

  food = "Pizza Romana";
  priceFood = 25.90;

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function selectFood3() {
  food1.classList.remove("selected");
  food2.classList.remove("selected");
  food3.classList.add("selected");

  food = "Burguer NY";
  priceFood = 17.90;

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function selectBeverage1() {
  beverage1.classList.add("selected");
  beverage2.classList.remove("selected");
  beverage3.classList.remove("selected");

  beverage = "Coquinha gelada";
  priceBeverage = 4.90;

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function selectBeverage2() {
  beverage1.classList.remove("selected");
  beverage2.classList.add("selected");
  beverage3.classList.remove("selected");

  beverage = "Suco de laranjinha";
  priceBeverage = 8.00;

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function selectBeverage3() {
  beverage1.classList.remove("selected");
  beverage2.classList.remove("selected");
  beverage3.classList.add("selected");

  beverage = "Cerveja trincando";
  priceBeverage = 6.90;

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function selectDessert1() {
  dessert1.classList.add("selected");
  dessert2.classList.remove("selected");
  dessert3.classList.remove("selected");

  dessert = "Pudim";
  priceDessert = 7.90;

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function selectDessert2() {
  dessert1.classList.remove("selected");
  dessert2.classList.add("selected");
  dessert3.classList.remove("selected");

  dessert = "BOMBA! (de chocolate)";
  priceDessert = 5.00;

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function selectDessert3() {
  dessert1.classList.remove("selected");
  dessert2.classList.remove("selected");
  dessert3.classList.add("selected");

  dessert = "Picolé de morango";
  priceDessert = 3.99;

  if (food !== "" && beverage !== "" && dessert !== "") {
    buttonActive.classList.remove("hide");
  }
}

function makeOrder() {
  totalValue = priceFood + priceBeverage + priceDessert;
  totalValueFloat = totalValue.toFixed(2)

  checkOutFood.innerHTML = (food)
  checkOutFoodPrice.innerHTML = (`R$ ${priceFood.toFixed(2)}`)

  checkOutBeverage.innerHTML = (beverage)
  checkOutBeveragePrice.innerHTML = (`R$ ${priceBeverage.toFixed(2)}`)

  checkOutDessert.innerHTML = (dessert)
  checkOutDessertPrice.innerHTML = (`R$ ${priceDessert.toFixed(2)}`)

  checkOutTotalPrice.innerHTML = totalValueFloat

  checkOut.classList.remove('hide')
}

function checkOutOk() {
  let name = window.prompt('Por favor, digite o seu nome:')
  let address = window.prompt('Por favor, digite o endereço de entrega:')

  let message = (`Olá, gostaria de fazer o pedido:
  - Prato: ${food}
  - Bebida: ${beverage}
  - Sobremesa: ${dessert}
  Total: R$ ${totalValueFloat}
  
  Nome: ${name}
  Endereço: ${address}`)

  let encodeMessage = encodeURIComponent(message)

  window.open("https://wa.me/5548996581772?text=" + encodeMessage);
}

function checkOutCancel() {
  checkOut.classList.add('hide')
}