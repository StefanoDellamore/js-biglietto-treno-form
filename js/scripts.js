
// click-button

const myButton = document.getElementById('generates');

myButton.addEventListener('click', function() {

    //id utente
    const idInput = document.getElementById('id');

    console.log('idInput', idInput, typeof idInput);
    console.log('idInput.value', idInput.value, typeof idInput.value);

    //km da percorrere
    const kmInput = document.getElementById('km');
    const kmInputValue = parseInt(kmInput.value);

    console.log('kmInput', kmInput, typeof kmInput);
    console.log('kmInputValue', kmInputValue, typeof kmInputValue);

    idInput.value = '';
    kmInput.value = '';
});




//variabile-saldi con sconto

let variabileSaldo = 'km' * 0.21
let variabileSaldoMinore = 'km' - (('km' / 100) * 20 );
let variabileSaldoOver = 'km' - (('km' / 100) * 40 );

//verifico sconto da applicare
//se l'utente è minorenne
if (isNaN('id'))
if ('id' < 18) {
    console.log ('prezzo:', variabileSaldoMinore.toFixed(2));
}   

//se l'utente è over65
else if ('id' >= 65) {
    console.log ('prezzo:', variabileSaldoOver.toFixed(2));
}

else {
    console.log ('prezzo:', variabileSaldo.toFixed(2));
}