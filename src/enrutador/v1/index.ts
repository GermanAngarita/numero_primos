import express from 'express';
import logger from '../../configuraciones/logger';

import test from '../../controladores/test.ctr';
import numerosPrimos from '../../controladores/numeros-primos';

const enrutador = express.Router()

enrutador.use('/test', test );
enrutador.use('/primos', numerosPrimos)

logger.info('TEST: SERVIDOR', '     /test');


export default enrutador;