let itemCount = 0;

function addToCart(){
    itemCount = itemCount+1 
    document.getElementById("cartItemsCount").innerText= itemCount;
    document.getElementById("cartItemsCount").style.display="inline";
    if(itemCount>20){
       document.getElementById("cartItemsCount").innerText= "20+"; 
    }
}


