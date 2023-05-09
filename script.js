// Obtém os elementos HTML relevantes
const form = document.getElementById("add-form");
const productList = document.getElementById("product-list");
const newProductName = document.getElementById("item-input");
const newProductBrand = document.getElementById("brand-input");
const newProductQuantity = document.getElementById("quantity-input");
const newProductType = document.getElementById("type-input");

// Array para armazenar os produtos da lista
let products = [];

// Função que adiciona um novo produto à lista
function addProduct(event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const productName = newProductName.value.trim();
  const productBrand = newProductBrand.value.trim();
  const productQuantity = newProductQuantity.value.trim();
  const productType = newProductType.value.trim();

  // Verifica se os campos estão preenchidos corretamente
  if (!productName || !productBrand || !productQuantity || !productType) {
    alert("Os campos não podem ficar em branco!");
    return;
  }

  // Cria um objeto para representar o produto
  const newProduct = {
    name: productName,
    brand: productBrand,
    quantity: productQuantity,
    type: productType,
  };

  // Adiciona o produto ao array
  products.push(newProduct);

  // Limpa os campos do formulário
  newProductName.value = "";
  newProductBrand.value = "";
  newProductQuantity.value = "";
  newProductType.value = "";

  // Renderiza a lista de produtos
  renderProductList();
}

// Função para remover um produto da lista
function removeProduct(index) {
  products.splice(index, 1);
  renderProductList();
}

// Função para alterar a quantidade de um produto na lista
function changeProductQuantity(index, newQuantity) {
  products[index].quantity = newQuantity;
}

// Função para renderizar a lista de produtos
function renderProductList() {
  // Limpa a tabela antes de renderizar novamente
  productList.innerHTML = "";

  // Percorre o array de produtos e cria as linhas da tabela
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    // Cria uma nova linha na tabela
    const row = document.createElement("tr");

    // Cria as células para o nome, marca, quantidade e tipo
    const nameCell = document.createElement("td");
    const brandCell = document.createElement("td");
    const quantityCell = document.createElement("td");
    const typeCell = document.createElement("td");
    const actionCell = document.createElement("td");

    // Preenche as células com os valores do produto
    nameCell.textContent = product.name;
    brandCell.textContent = product.brand;
    quantityCell.textContent = product.quantity;
    typeCell.textContent = product.type;

    // Cria o botão de remoção
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", () => {
      removeProduct(i);
    });

    // Adiciona o botão de remoção à célula de ação
    actionCell.appendChild(removeButton);

    // Adiciona as células à linha da tabela
    row.appendChild(nameCell);
    row.appendChild(brandCell);
    row.appendChild(quantityCell);
    row.appendChild(typeCell);
    row.appendChild(actionCell);

    // Adiciona a linha à tabela
    productList.appendChild(row);
  }
}

// Adiciona o evento de envio do formulário para a função de adicionar produto
form.addEventListener("submit", addProduct);

// Renderiza a lista de produtos inicialmente (caso haja produtos pré-existentes)
renderProductList();