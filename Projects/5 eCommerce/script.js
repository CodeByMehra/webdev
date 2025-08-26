let itemCount = 0;

function addToCart(){
    itemCount = itemCount+1 
    document.getElementById("cartItemsCount").innerText= itemCount;
    document.getElementById("cartItemsCount").style.display="inline";
    if(itemCount>20){
       document.getElementById("cartItemsCount").innerText= "20+"; 
    }
}


const products = [
  {
    brand: "Zara",
    name: "Boys Half Sleeve Shirt",
    price: 1199,
    mrp: 1900,
    discount: "62% OFF",
    image: "images/Boys_Shirt.jpg"
  },
  {
    brand: "H&M",
    name: "3 T-Shirts Combo Unisex",
    price: 1249,
    mrp: 2400,
    discount: "55% OFF",
    image: "images/Tshirt_Combo.webp"
  },
  {
    brand: "US POLO",
    name: "Men's Stripes Casual Shirt",
    price: 1385,
    mrp: 2100,
    discount: "46% OFF",
    image: "images/Stripes_Shirt.webp"
  }
];

let itemCardsContainer = document.querySelector(".itemCards")

for (i=0 ; i< products.length ; i++){
    let card = document.createElement(div)
    card.classlist.add("card")

     card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p class="itemBrand">${product.brand}</p>
      <p>${product.name}</p>
      <div class="pricingSection">
          <span class="currentPrice">₹${product.price}</span>
          <span class="mrp">₹${product.mrp}</span>
          <span class="discount">${discount}% OFF</span>
      </div>
      <div class="actionButtons">
          <button>Buy Now</button>
          <button onclick="addToCart('${product.name}', ${product.price})">Add To Cart</button>
      </div>
  `;

  itemCardsContainer.appendChild(card);
}