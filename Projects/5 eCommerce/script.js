let cartCount = 0; 

function addToCart(name, price) {
  cartCount = cartCount + 1;

  let cartEl = document.getElementById("cartItemsCount");

  if (cartCount > 20) {
    cartEl.innerText = "20+";
  } else {
    cartEl.innerText = cartCount;
  }

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
    name: "solid formal Shirt",
    price: 1445,
    mrp: 2190,
    image: "images/three.webp"
  },
  {
    brand: "US POLO",
    name: "Mes Stripes Casual Shirt",
    price: 1385,
    mrp: 2100,
    image: "images/two.webp"
  },
  {
    brand: "US POLO",
    name: "Mens Hal sleeve Shirt",
    price: 1385,
    mrp: 2100,
    image: "images/four.webp"
  },

  {
    brand: "Red Tape",
    name: `Mens Solid Casual Shirt`,
    price: 1076,
    mrp: 1600,
    image: "images/five.webp"
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