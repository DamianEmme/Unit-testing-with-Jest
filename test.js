// importar la función sum del archivo app.js
const { sum } = require('./app.js');

/*test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});*/

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One dollar should be 106.58 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5)

    // if 1 dollar are 106.88 yens, then 3.5 yens should be (3.5 * 106.58)
    const expected = 3.5 * 106.58; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yens);
})

test("One yen should be 0.0063 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(3.5)

    // if 1 yen are 0.0063 pounds, then 3.5 yens should be (3.5 * 0.0063)
    const expected = 3.5 * 0.0063; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pounds);
})