// Sélectionnez le bouton pour augmenter la quantité
let btnPlus = document.querySelector('.qty-plus');

// Sélectionnez le bouton pour diminuer la quantité
let btnMinus = document.querySelector('.qty-minus');

// Sélectionnez le champ de quantité
let inputQty = document.querySelector('.qty');

// Ajoutez un événement clic pour augmenter la quantité
btnPlus.addEventListener('click', function() {
    let qty = parseInt(inputQty.value);
        qty++;
        inputQty.value = qty;
    }
);

// Ajoutez un événement clic pour diminuer la quantité
btnMinus.addEventListener('click', function() {
    let qty = parseInt(inputQty.value);
        qty--;
        inputQty.value = qty;
    }
);

//Augmenter le sous totale
let Subto = document.querySelector('.subtotal');
btnPlus.addEventListener('click', function() {
let prix = parseInt(Subto.value);
let qty = parseInt(inputQty.value);
let newTotal = prix * qty;
Subto.value = newTotal;
})