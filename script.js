// Lista de compras
const form = document.getElementById("form");
const input = document.getElementById("input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("list");

let items = [];

addButton.addEventListener("click", function (event) {
 
/////


const productList = document.getElementById("product-list");
const addButton = document.getElementById("add-button");
const newProductName = document.getElementById("new-product-name");
const newProductQuantity = document.getElementById("new-product-quantity");
const errorMessage = document.getElementById("error-message");


let products = [];

// Função que adiciona um novo produto à lista
function addProduct(event) {
  event.preventDefault();
  const productName = newProductName.value.trim();
  const productQuantity = newProductQuantity.value.trim();
  if (!productName || !productQuantity) {
    errorMessage.textContent = "Os campos não podem ficar em branco!";
    return;
  }
  const newProduct = {
    name: productName,
    quantity: productQuantity,
  };
  products.push(newProduct);
  newProductName.value = "";
  newProductQuantity.value = "";
  errorMessage.textContent = "";
  renderProductList();
}

// Função que remove um produto da lista
function removeProduct(event) {
  const productIndex = parseInt(event.target.dataset.index);
  products.splice(productIndex, 1);
  renderProductList();
}

// Função que altera a quantidade de um produto na lista
function changeProductQuantity(event) {
  const productIndex = parseInt(event.target.dataset.index);
  const newQuantity = event.target.value.trim();
  if (!newQuantity) {
    errorMessage.textContent = "A quantidade não pode ficar em branco!";
    return;
  }
  products[productIndex].quantity = newQuantity;
  errorMessage.textContent = "";
  renderProductList();
}

// Função que renderiza a lista de produtos
function renderProductList() {
  let html = "";
  for (let i = 0; i < products.length; i++) {
    html += `
      <li class="product">
        <span class="product-name">${products[i].name}</span>
        <input type="text" class="product-quantity" value="${products[i].quantity}" data-index="${i}" />
        <button class="remove-button" data-index="${i}">Remover</button>
      </li>
    `;
  }
  productList.innerHTML = html;
  const removeButtons = document.getElementsByClassName("remove-button");
  const quantityInputs = document.getElementsByClassName("product-quantity");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", removeProduct);
    quantityInputs[i].addEventListener("change", changeProductQuantity);
  }
}

// Adiciona os event listeners aos botões
addButton.addEventListener("click", addProduct);
loginButton.addEventListener("click", checkLoginCode);
})
