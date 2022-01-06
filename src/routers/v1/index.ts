import express from 'express';
import logger from '../../config/logger';

import primeNumbers from '../../controllers/prime-numbers';

const routers = express.Router()

routers.use('/prime-numbers', primeNumbers )

logger.info('NUMEROS PRIMOS', '     /prime-numbers');


export default routers;