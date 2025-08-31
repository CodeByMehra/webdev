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

