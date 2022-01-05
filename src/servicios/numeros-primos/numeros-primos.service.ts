import IRespuesta from "../../interfaces/repuesta.interface";
import isPrime from '@extra-number/is-prime';
import { esNumeroPrimo } from '../../utilidades/primos';

interface IParametros {
    numero: number;
    numeros_primos: Array<number>;
    total_primos_encontrados: number;
}

/**
 * 
 * @param numero 
 * @returns estatus: Boolean
 * @returns resultadoOperacion: string
 * @returns data: any
 * 
 */
export const obtenerPrimos = async ( numero: number | any ): Promise<IRespuesta> => {

    const parametros: IParametros = {
        numero: numero || 100,
        numeros_primos:[],
        total_primos_encontrados: 0
    };

    for (let i = 0; i<parametros.numero; i++) {
        const esPrimo = isPrime( i );
        if (esPrimo) {
            parametros.numeros_primos.unshift(i);
            parametros.total_primos_encontrados += 1;
        }
    }

    return {
        estatus: true,
        resultadoOperacion: 'Operación exitosa.',
        data: parametros
    }
}

export const obtenerPrimosAlgoritmo = async ( numero: number | any) => {

    const parametros: IParametros = {
        numero: numero || 100,
        numeros_primos:[],
        total_primos_encontrados: 0
    };

    for (let i = 0; i<parametros.numero; i++) {

        const esPrimo = esNumeroPrimo( i );
        
        if (esPrimo) {
            parametros.numeros_primos.unshift(i)
            parametros.total_primos_encontrados += 1;
        } else {
            console.log(esPrimo)
        }
    }

    return {
        estatus: true,
        resultadoOperacion: 'Operación exitosa.',
        data: parametros
    }
}