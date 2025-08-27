const productGrid = document.getElementById("productGrid");
const searchBar = document.getElementById("searchBar");

if (productGrid) {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      window.allProducts = data;
      showProducts(data);
    });

  function showProducts(products) {
    productGrid.innerHTML = "";
    products.forEach(p => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${p.title}</h3>
        <img src="${p.image}" alt="${p.title}" width="100">
        <p>$${p.price}</p>
      `;
      productGrid.appendChild(div);
    });
  }

  // Búsqueda parcial
  searchBar.addEventListener("input", e => {
    const term = e.target.value.toLowerCase();
    const filtered = window.allProducts.filter(p =>
      p.title.toLowerCase().includes(term)
    );
    showProducts(filtered);
  });
}