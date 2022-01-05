import { Request, Response, Router } from 'express';
import moment from 'moment-timezone';

import { obtenerPrimos, obtenerPrimosAlgoritmo } from '../../servicios/numeros-primos/numeros-primos.service';
import { obtenerPrimosAlgoritmoSchema } from './numeros-primos.joi';

const NumerosPrimos = Router();

NumerosPrimos.get('/', async (req: Request, res: Response) => {

    const data = req.query['numero'];

    let respuesta
    try {
        respuesta = await obtenerPrimos(data)
    } catch (error) {
        res.status(500).send( error );
    }

    return res.status(200).send(respuesta)
    
})


NumerosPrimos.get('/comprobacion', async (req: Request, res: Response) => {

    try {
        const validacion = await obtenerPrimosAlgoritmoSchema.validateAsync( req.query );
        
    } catch (error) {
        return res.status(400).send({
            estatus: false,
            resultadoOperacion: 'Solicitud incorrecta.',
            error: error
        })
    }
    const data = req.query['numero'];

    let respuesta
    try {
        respuesta = await obtenerPrimosAlgoritmo( data )
    } catch (error) {
        res.status(500).send( error );
    }

    return res.status(200).send(respuesta)
    
})

export default NumerosPrimos;