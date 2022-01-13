import IServiceResponse from "@src/interfaces/repuesta.interface";

export const validationParamIsPrime = ( number: any) => {

    const result: IServiceResponse = {
        status: true,
        operationResult: 'Validación exitosa.',
        data: {}
    }

    if (!number) {
        result.status = false;
        result.operationResult = 'Por favor introduce un número.'
        return result;
    }

    if ( isNaN(number) ) {
        result.status = false;
        result.operationResult = 'El valor introducido no es un número'
        return result;
    }

    if (number < 2 ) {
        result.status = false;
        result.operationResult = 'El número debe ser mayor que 2'
        return result;
    }

    if ( !Number.isInteger(Number(number))) {
        result.status = false;
        result.operationResult = 'El número debe ser un entero'
        return result;
    }

    return result;

    
}