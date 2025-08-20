let product = {
    Name : "iPhone",
    Brand : "Apple",
    rating : {
        stars : "4.5",
        reviews : "967",
    }
};

console.log(product)

let newProduct = JSON.stringify(product)
console.log(newProduct)

let convertedProduct = JSON.parse(newProduct)
console.log(convertedProduct)