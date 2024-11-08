/* const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', ()=>{
    let total = sum(14,9);

    expect(total).toBe(23);
});

const {fromDollarToYen} = require('./app.js');

test("12 dolares a yen", ()=>{
const resultado = fromDollarToYen(12);
expect(resultado).toBe(1755.12)
}) */

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("12 dollar to be yen", ()=>{
    const{fromDollarToYen}=require('./app.js');
    const yen = fromDollarToYen(12);
    let euros = 12 / 1.07;
    let expected = 11.21 * 156.5; 
    expect(fromDollarToYen(12)).toBeCloseTo(1755.14,2);
})

test("10 yen to be pound",()=>{
    const{fromYenToPound}=require('./app.js');
    const pound = fromYenToPound(10);
    let euros1 = 10 / 156.5;
    let expected = 0.063 * 0.87;
    expect(fromYenToPound(10)).toBeCloseTo(0.054);
})