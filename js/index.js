const createElement = cart.querySelector('.create-product');

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  return subtotal.textContent = price.textContent * quantity.value;

}

function calculateAll() {
  const total = document.querySelector('#total-value span');
  const products = document.querySelectorAll('table#cart tr.product');
  total.textContent = [...products].reduce((toto, singleProduct) => toto + updateSubtotal(singleProduct), 0);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const body = document.querySelector('table#cart tbody');
  const name = createElement.querySelector('td input[type="text"]');
  const price = createElement.querySelector('td input[type="number"]');
  const element = document.createElement('tr');
  element.classList.add("product");
  element.innerHTML = `<tr class="product">
  <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
  element.querySelector('.action .btn-remove').addEventListener('click', removeProduct);
  body.appendChild(element);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const remove = document.querySelectorAll('table#cart .action .btn-remove');
  const create = createElement.querySelector('#create');
  calculatePricesBtn.addEventListener('click', calculateAll);
  remove.forEach((el) => el.addEventListener('click', removeProduct));
  create.addEventListener('click', createProduct);
});
