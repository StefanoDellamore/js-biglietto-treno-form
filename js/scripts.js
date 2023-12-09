const km = document.getElementById ('km');
console.log ('km', km, typeof km);

const age = document.getElementById ('age');
console.log ('age', age, typeof age);

const calcButton = document.getElementById ('calc-button');
console.log ('calcButton', calcButton, typeof calcButton);

calcButton.addEventListener ('click', function(){
    const kmInNumber = parseInt(km.value)
    const ageInNumber = parseInt(age.value)

    //prezzo biglietto base
    const price = (km * 0.21);
    console.log ('price', price, typeof price);

    let finalText = 'il prezzo del biglietto è $:';

    //verifivo sconto da applicare

    if (age < 18) {
        
        //applico 20% di sconto
        const discount = (price / 100) * 20;
        console.log ('discount', discount, typeof discount);
        
        //prezzo scontato
        const discountedPrice = price - discount;
        console.log ('discountedPrice', discountedPrice, typeof discountedPrice);
        finalText = finalText + discountedPrice.toFixed(2);
    }

    else if (age > 65) {
        //applico 40% di sconto
        const discount = (price / 100) * 40;
        console.log ('discount', discount, typeof discount);
        
        //prezzo scontato
        const discountedPrice = price - discount;
        console.log ('discountedPrice', discountedPrice, typeof discountedPrice);
        finalText = finalText + discountedPrice.toFixed(2); 
    }

    else {
        finalText = finalText + price.toFixed(2);
    }

    const resultContainer = document.querySelector ('#result-container');
    console.log ('resultContainer', resultContainer, typeof resultContainer);
    resultContainer.innerHTML = finalText;

    });

