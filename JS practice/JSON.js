let product = {
    Name : "iPhone",
    Brand : "Apple",
    rating : {
        stars : "4.5",
        reviews : "967",
    }
};

console.log(`Line 1 running ${product}`)

let newProduct = JSON.stringify(product)
console.log(`Line 1 running ${newProduct}`)

let convertedProduct = JSON.parse(newProduct)
console.log(`Line 1 running ${convertedProduct}`)