let PricePlus = document.querySelector('.qty-plus')
let priceMinus= document.querySelector('.qty-minus')
PricePlus.addEventListener ('click', augmentation)

function augmentation(){
    document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value)+1
}