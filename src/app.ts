import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import variables from './config/environment';
import logger from './config/logger';
import router from './routers/v1';
import moment from 'moment-timezone';

// TODO: Test al servicio, controlador también,
// TODO: Dockerizar el proyecto
// TODO: Agregar los end point con los parámetros que recibe.

moment.tz.add("America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5");
moment.tz.setDefault( variables.timeZone );
moment.locale('es')

const app: Application = express();
app.use(express.urlencoded({extended: false}))
app.use( cors() )
app.use(express.json())

app.use(`${variables.principalPath}`, router );

app.use(express.static('public'));
app.get('/', (req: Request, res: Response) => {
    res.sendFile('index.html');
});

app.listen( variables.port, async () => {
    
    logger.info('Servidor corriendo en: ', `${variables.domain}:${variables.port}${variables.principalPath}`)
})