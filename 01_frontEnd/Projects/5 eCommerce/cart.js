let cartItems = [
    {
    brand: "Zara",
    name: "Boys Half Sleeve Shirt",
    price: 1199,
    mrp: 1900,
    image: "images/one.jpg"
    },
]

let discountvalue = function (price , mrp){
      let discountvalue= Math.round(price/mrp * 100)
        return discountvalue;
}    

// function showToCart(name, price){
//     for (i=0 ; i<=cartItems.length; i++){
//         if(cartItems.name == name && cartItems.price==price){
//             return
//         }else{
//             let cartSection= document.querySelector(".addedItems")
//             let itemCard= document.createElement("Div")
//             itemCard.classList.add("itemContainer")
//             itemCard.innerHTML= `
//             <img src=${cartItems.image}alt="${cartItems.name}">
//             <div class="itemDetails">
//                 <span class="itemBrand">${cartItems.brand}</span>
//                 <span>${cartItems.name}</span>
//                 <div class="pricingSection">
//                     <span class="currentPrice">${cartItems.price}</span>
//                     <span class="mrp">${cartItems.mrp}</span>
//                     <span class="discount">${discountvalue(product.price, product.mrp)}% OFF</span>
//                 </div>
//                 <span class="deliveryDate">Free Delivery By 3  Sep 2025</span>
//             </div>
//             `

//             cartSection.appendChild(itemCard)
//         }

//     }
// }