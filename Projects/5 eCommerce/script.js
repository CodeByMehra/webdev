let itemCount = 0;

function addToCart(){
    itemCount = itemCount+1 
    document.getElementById("cartItems").innerText= `Your cart has ${itemCount} items`;
}


