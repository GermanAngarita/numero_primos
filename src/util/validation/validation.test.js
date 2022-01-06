const { validationParamIsPrime } = require('./validation');


const result = {
    status: true,
    operationResult: 'Validación exitosa.',
    data: {}
}

test('ValidationParamIsPrime:: Param is not a number', () => {

    result.status = false;
    result.operationResult = "El valor introducido no es un número"

    expect( validationParamIsPrime('ImNotANumber')).toEqual(result)
})

test('ValidationParamIsPrime:: Param is less than 2', () => {

    result.status = false;
    result.operationResult = "El número debe ser mayor que 2"
    
    expect( validationParamIsPrime(1)).toEqual(result)
})

test('ValidationParamIsPrime:: Param is no a Integer', () => {

    result.status = false;
    result.operationResult = "El número debe ser un entero"
    
    expect( validationParamIsPrime(89.67)).toEqual(result)
})

test('ValidationParamIsPrime:: Param is OK', () => {

    result.status = true;
    result.operationResult = "Validación exitosa."
    
    expect( validationParamIsPrime(100)).toEqual(result)
})

test('ValidationParamIsPrime:: Param is Null', () => {

    result.status = false;
    result.operationResult = "Por favor introduce un número."
    
    expect( validationParamIsPrime()).toEqual(result)
})
