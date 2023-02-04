const inputValue = document.getElementById("product-value");
const addBtn = document.getElementById("add-product");
const productList = document.getElementById("product-list");

function addProduct() {
  let product = document.createElement("li");

  product.innerText = `${inputValue.value}`;

  if (product.innerText.length < 1) {
    alert("You cannot enter empty value.");
  } else {
    productList.appendChild(product);
    inputValue.value = "";
  }

  let itemButtons = document.createElement("div");
  itemButtons.classList.add("item-buttons");
  product.appendChild(itemButtons);

  let deleteBtn = document.createElement("button");

  deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>';
  deleteBtn.classList.add("delete-product");
  itemButtons.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.parentElement.remove();
  });

  let checkedBtn = document.createElement("button");

  checkedBtn.innerHTML = '<span class="material-symbols-outlined">check</span>';
  checkedBtn.classList.add("checked-product");
  itemButtons.appendChild(checkedBtn);

  checkedBtn.addEventListener("click", function () {
    checkedBtn.parentElement.parentElement.style.textDecoration =
      "line-through";
  });
}

addBtn.addEventListener("click", addProduct);
