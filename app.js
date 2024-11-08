// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = (dolar)=>{
    let euros = dolar / 1.07;
    let yenes = euros * 156.5;
    return yenes;
}

const fromYenToPound = (yen)=>{
    let euros1 = yen / 156.5;
    let pound = euros1 * 0.87;
    return pound;
}

const sum = (a,b) => {
    return a+b
}
console.log(sum(7,3));

module.exports={sum, fromEuroToDollar,fromDollarToYen,fromYenToPound};

/* let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar (euros){
    let dollar = euros * oneEuroIs.USD;
    return dollar;
}
console.log(fromEuroToDollar());
module.exports = {fromEuroToDollar}; */





