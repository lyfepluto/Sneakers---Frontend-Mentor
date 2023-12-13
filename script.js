const plusCartNumber = document.getElementById("plus")
const minusCartNumber = document.getElementById("minus")
const numberOfCart = document.getElementById("number")
const mainImg = document.getElementById("main_img")
const secondaryImgs = document.querySelectorAll(".secondary_img")


secondaryImgs.forEach( function(secondaryImg) {
    secondaryImg.addEventListener('click', function() {
        mainImg.src = secondaryImg.src;
        secondaryImgs.forEach( function(img) {
            img.classList.remove('selected_img');
        });

        secondaryImg.classList.add('selected_img')
    })
})


let number = 0

plusCartNumber.addEventListener('click', function() {
    number++
    numberOfCart.textContent = number
})

minusCartNumber.addEventListener('click', function() {
    if(number > 0) {
        number--;
        numberOfCart.textContent = number;
    }
})

const addToCartButton = document.querySelector('.add-to_cart');
const cartNum = document.getElementById('cart_num');

let cartItemsCount = 0;

addToCartButton.addEventListener('click', function() {
    const number = parseInt(document.getElementById('number').textContent); 

    if (number > 0) {
        cartItemsCount += number; 
        cartNum.textContent = cartItemsCount; 
    }
})