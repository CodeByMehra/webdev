let cartCount = 0;  // start with empty cart

function addToCart(name, price) {
  // increase cart count
  cartCount = cartCount + 1;

  // find the cart count element in HTML
  let cartEl = document.getElementById("cartItemsCount");

  // show number of items
  if (cartCount > 20) {
    cartEl.innerText = "20+";
  } else {
    cartEl.innerText = cartCount;
  }

  // make it visible (if it was hidden before)
  cartEl.style.display = "inline";
}



const products = [
  {
    brand: "Zara",
    name: "Boys Half Sleeve Shirt",
    price: 1199,
    mrp: 1900,
    image: "images/one.jpg"
  },
  {
    brand: "H&M",
    name: "3 T-Shirts Combo Unisex",
    price: 1249,
    mrp: 2400,
    image: "images/3combo.webp"
  },
  {
    brand: "US POLO",
    name: "Men's Stripes Casual Shirt",
    price: 1385,
    mrp: 2100,
    image: "images/three.webp"
  },
  {
    brand: "US POLO",
    name: "Men's Stripes Casual Shirt",
    price: 1385,
    mrp: 2100,
    image: "images/two.webp"
  },
];

let itemCardsContainer = document.querySelector(".itemCards")

for (i=0 ; i< products.length ; i++){
    let product = products[i];

    let discountvalue = function (price , mrp){
      let discountvalue= Math.round(price/mrp * 100)
        return discountvalue;
    }
        
    let card = document.createElement("div")
    card.classList.add("card")

     card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p class="itemBrand">${product.brand}</p>
      <p>${product.name}</p>
      <div class="pricingSection">
          <span class="currentPrice">₹${product.price}</span>
          <span class="mrp">₹${product.mrp}</span>
          <span class="discount">${discountvalue(product.price, product.mrp)}% OFF</span>
      </div>
      <div class="actionButtons">
          <button>Buy Now</button>
          <button onclick="addToCart('${product.name}', ${product.price})">Add To Cart</button>
      </div>
  `;

  itemCardsContainer.appendChild(card);
}