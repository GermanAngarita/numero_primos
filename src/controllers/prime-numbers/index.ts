import { getPrimesList } from '../../services/prime-numbers/prime-numbers.service';
import { Request, Response, Router } from 'express';

import { getPrimesListSchema } from './numeros-primos.joi';

const primeNumbers = Router();

primeNumbers.get('/', async (req: Request, res: Response) => {
    
    const data = req.query['number'];
    try {
        await getPrimesListSchema.validateAsync({ number: data });
        
    } catch (error) {
        return res.status(400).send({
            estatus: false,
            resultadoOperacion: 'Solicitud incorrecta.',
            error: error
        })
    }

    

    let result
    try {
        result = await getPrimesList( data )
    } catch (error) {
        res.status(500).send( error );
    }

    return res.status(200).send(result)
    
})

export default primeNumbers;