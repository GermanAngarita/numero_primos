import { validationParamIsPrime } from "../../util/validation/validation";
import IServiceResponse from "../../interfaces/repuesta.interface";
import { isPrime } from '../../util/prime/isPrime';

interface IPrimeData {
    number: number;
    primeList: Array<number>;
    totalPrimeFound: number;
}

/**
 * 
 * @param number 
 * @returns status: Boolean
 * @returns operationResult: string
 * @returns data:IPrimeData
 * 
 */
export const getPrimesList = async ( number: number | any): Promise<IServiceResponse> => {

    const validation = validationParamIsPrime(number);
    if (!validation.status) {
        return validation;
    }
    
    const primeData: IPrimeData = {
        number: number,
        primeList:[],
        totalPrimeFound: 0
    };

    for (let i = 0; i<primeData.number; i++) {

        const prime = isPrime( i );
        
        if (prime) {
            primeData.primeList.unshift(i)
            primeData.totalPrimeFound += 1;
        }
    }

    return {
        status: true,
        operationResult: `Se ha obtenido los números primos descendentes desde ${primeData.number}`,
        data: primeData
    }
}