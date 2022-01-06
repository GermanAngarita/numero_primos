const { getPrimesList } = require('./prime-numbers.service')

const resultParamNumberOK = {
    "status": true,
    "operationResult": "Se ha obtenido los números primos descendentes desde 10",
    "data": {
    "number": 10,
    "primeList": [
        7,
        5,
        3,
        2
    ],
    "totalPrimeFound": 4
    }
}

const resultParamNumberIsLessThanMin = {
    "data": {}, 
    "operationResult": "El número debe ser mayor que 2", 
    "status": false
}

const resultParamIsNotANumber = {
    "data": {},
    "operationResult": "El valor introducido no es un número",
    "status": false,
}

const resultParamNumberIsNotAInteger = {
    "data": {},
    "operationResult": "El número debe ser un entero",
    "status": false,
}

test('GetPrimeList: When number is 10', () => {
    expect(getPrimesList(10)).resolves.toStrictEqual( resultParamNumberOK )
})

test('GetPrimeList: when the number is less than 2', () => {
    expect(getPrimesList(1)).resolves.toStrictEqual(resultParamNumberIsLessThanMin)
})

test('GetPrimeList: when the param is not a number', () => {
    expect(getPrimesList('IamNotANumber')).resolves.toStrictEqual(resultParamIsNotANumber)
})

test('GetPrimeList: when the number is not a integer', () => {
    expect(getPrimesList(53.2)).resolves.toStrictEqual(resultParamNumberIsNotAInteger)
})