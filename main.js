const addCart = document.querySelectorAll('.btn-cart');
const cartShow = document.querySelectorAll('.nav span');
console.log(addCart);
for(var i = 0; i < addCart.length; i++){
    addCart[i].addEventListener('click', () => {

        cartCount();
    })
    
}

function cartCount(){
let prdCount = localStorage.getItem('cartCount');
prdCount = parseInt(prdCount);
if(prdCount){
    localStorage.setItem('cartCount', prdCount + 1);
    cartShow.textContent = prdCount + 1;
}else{
    localStorage.setItem('cartCount', 1);
    cartShow.textContent = prdCount = 1;
}

}
function displayCart(){
    let prdCount = localStorage.getItem('cartCount');
    if(prdCount){
        cartShow.textContent = prdCount;
    }
}
displayCart();