const ul = document.querySelector("#ul");
const URL = "https://fakestoreapi.com";
const inpFnc = document.querySelectorAll(".inpForFunc");
const searchedProd = [];
const categoryLink = document.querySelectorAll(".category-link");
const categoryList = document.querySelector(".category-list");

function renderProduct(products) {
  products.map((el) => {
    const item = document.createElement("li");

    item.innerHTML = `
    <img src="${el.image}" alt="list">
    <h3>${el.title}</h3>
    <span class="sp">
      <span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span>
    </span>
    <div class="sum">
      <p class="money2">${Math.round((el.price / 100) * 76)}</p>
      <del class="money1">${el.price}</del>
      <p class="sale">24% Off</p>
    </div>
    `;
    ul.prepend(item);
  });
}

function getItemAll() {
  fetch(URL + "/" + "products")
    .then((el) => el.json())
    .then((item) => renderProduct(item));
}
getItemAll();

function search(e) {
  const searchFnc = inpFnc.value;

  fetch(URL + "/products").then((resp) =>
    resp
      .json()
      .then((item) =>
        item.map((el) =>
          el.title.includes(inpFnc.value) ? searchedProd.push(el) : ""
        )
      )
  );

  const searchItem = document.createElement("li");
  searchedProd.map((item) => {
    console.log(item);
    searchItem.innerHTML = `
      <img src="${item.image}" alt="list">
      <h3>${item.title}</h3>
      <span class="sp">
        <span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span>
      </span>
      <div class="sum">
        <p class="money2">${Math.round((item.price / 100) * 76)}</p>
        <del class="money1">${item.price}</del>
        <p class="sale">24% Off</p>
      </div>
    `;
  });
  ul.append(searchItem);
}

function allCategory() {
  categoryList.addEventListener("click", (e) => {
    categoryLink.forEach((item)=>item.style.color = '#000')
    e.target.style.color = '#33a0ff'
  });
  ul.textContent = "";
  fetch(URL + "/products")
    .then((resp) => resp.json())
    .then((item) =>
      item.map((el) => {
        const li = document.createElement("li");

        li.innerHTML = `
        <img src="${el.image}" alt="list">
        <h3>${el.title}</h3>
        <span class="sp">
          <span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span>
        </span>
        <div class="sum">
          <p class="money2">${Math.round((el.price / 100) * 76)}</p>
          <del class="money1">${el.price}</del>
          <p class="sale">24% Off</p>
        </div>
    `;
        ul.append(li);
      })
    );
}
function electronics() {
  ul.textContent = "";
  fetch(URL + "/products/category/electronics")
    .then((resp) => resp.json())
    .then((item) =>
      item.map((el) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <img src="${el.image}" alt="list">
          <h3>${el.title}</h3>
          <span class="sp">
            <span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span>
          </span>
          <div class="sum">
            <p class="money2">${Math.round((el.price / 100) * 76)}</p>
            <del class="money1">${el.price}</del>
            <p class="sale">24% Off</p>
          </div>
      `;
        ul.append(li);
      })
    );
}
function jewelery() {
  categoryList.addEventListener("click", (e) => {
    categoryLink.forEach((item)=>item.style.color = '#000')
    e.target.style.color = '#33a0ff'
  });
  ul.textContent = "";
  fetch(URL + "/products/category/jewelery")
    .then((resp) => resp.json())
    .then((item) =>
      item.map((el) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <img src="${el.image}" alt="list">
          <h3>${el.title}</h3>
          <span class="sp">
            <span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span>
          </span>
          <div class="sum">
            <p class="money2">${Math.round((el.price / 100) * 76)}</p>
            <del class="money1">${el.price}</del>
            <p class="sale">24% Off</p>
          </div>
        `;
        ul.append(li);
      })
    );
}
function menClothing() {
  categoryList.addEventListener("click", (e) => {
    categoryLink.forEach((item)=>item.style.color = '#000')
    e.target.style.color = '#33a0ff'
  });
  ul.textContent = "";
  fetch(URL + "/products/category/men's clothing")
    .then((resp) => resp.json())
    .then((item) =>
      item.map((el) => {
        const li = document.createElement("li");

        li.innerHTML = `
        <img src="${el.image}" alt="list">
        <h3>${el.title}</h3>
        <span class="sp">
          <span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span>
        </span>
        <div class="sum">
          <p class="money2">${Math.round((el.price / 100) * 76)}</p>
          <del class="money1">${el.price}</del>
          <p class="sale">24% Off</p>
        </div>
    `;
        ul.append(li);
      })
    );
}
function womenClothing() {
  categoryList.addEventListener("click", (e) => {
    categoryLink.forEach((item)=>item.style.color = '#000')
    e.target.style.color = '#33a0ff'
  });
  ul.textContent = "";
  fetch(URL + "/products/category/women's clothing")
    .then((resp) => resp.json())
    .then((item) =>
      item.map((el) => {
        const li = document.createElement("li");

        li.innerHTML = `
        <img src="${el.image}" alt="list">
        <h3>${el.title}</h3>
        <span class="sp">
          <span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span>
        </span>
        <div class="sum">
          <p class="money2">${Math.round((el.price / 100) * 76)}</p>
          <del class="money1">${el.price}</del>
          <p class="sale">24% Off</p>
        </div>
    `;
        ul.append(li);
      })
    );
}
